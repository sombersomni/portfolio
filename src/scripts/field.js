import * as THREE from 'three';
import anime from 'animejs';
import { all } from 'q';

const hillPoints = [
    [-1000, 1000, 10],
    [6000, 7500, 40],
    [-8000, 9000, 80]
]
function createField(vert, r, depth, numOfSegments) {
    const radius = Math.floor(Math.random() * 2 + r);
    const segmentRadius = radius * numOfSegments;
    const wallSegments = (radius + 3) * numOfSegments;
    const randomNoise = Math.floor(Math.random() * 100 + 25);
    const diff = wallSegments - segmentRadius;
    if (vert.y >= 10000) {
        const highPoint = 18000;
        const height = 2000;
        if (vert.y > 10000 && vert.y < 25000) {
            if (vert.y >= highPoint - 2000 && vert.y <= highPoint + 2000) {
                vert.z += height + randomNoise;
            } else {
                const highDiff = height - Math.abs(highPoint - vert.y) / 10;
                vert.z += Math.floor(Math.random() * 20 + highDiff);
            }
        }
    } else {
        if (vert.x <= segmentRadius && vert.x >= -1 * segmentRadius) {
            vert.z -= depth + randomNoise;
        } else if ((vert.x > segmentRadius && vert.x <= wallSegments) || (vert.x < -1 * segmentRadius && vert.x >= -1 * wallSegments)) {
            vert.z -= depth - (Math.abs(vert.x) - diff) / 5;
            vert.x += randomNoise * (vert.x < 0 ? 1 : -1);
        } else {
            for (let i = 0; i < hillPoints.length; i++) {
                const distance = Math.sqrt(Math.pow(vert.x - hillPoints[i][0], 2) + Math.pow(vert.y - hillPoints[i][1], 2));
                const radi = hillPoints[i][2] * numOfSegments / 2 - distance;

                if (radi > 0) {
                    if (distance <= (hillPoints[i][2] * numOfSegments / 2) / 4) {
                        vert.z += hillPoints[i][2] * numOfSegments / 2 - randomNoise;
                    } else {
                        if (radi < 50) {
                            const noise = Math.floor(Math.random() * radi + 10);
                            vert.z += noise;
                        } else {
                            const noise = Math.floor(Math.random() * 100 + radi);
                            vert.z += noise
                        }
                    }
                } else {
                    vert.z += randomNoise / 5;
                }
            }
        }
    }
}
export default function startEnvironment(canvas) {
    console.log("inside env", canvas);
    let scene = new THREE.Scene();
    scene.background = new THREE.Color().setHSL(0.6, 0, 1);
    scene.fog = new THREE.FogExp2(scene.background, 0.0001);
    let camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 10000);
    //let camera = new THREE.OrthographicCamera(canvas.width / - 2, canvas.width / 2, canvas.height / 2, canvas.height / - 2, 0.1, 1000 )
    let renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.width, canvas.height);
    renderer.shadowMap.enabled = true;
    //light
    let dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(- 1, 1.75, 1);
    dirLight.position.multiplyScalar(30);
    scene.add(dirLight);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    let hemiLight = new THREE.HemisphereLight(0xffffff, 0x22ffff, 0.6);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 1000, 0);
    scene.add(hemiLight);

    let spotLight = new THREE.SpotLight(0xf3e165, 0.1, 400);
    spotLight.position.set(100, 1000, 100);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;
    scene.add(spotLight);
    // const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
    // scene.add(hemiLightHelper);

    const size = 50000;
    const numOfSegments = 500;
    let groundGeometry = new THREE.PlaneGeometry(size, size, numOfSegments, numOfSegments);
    groundGeometry.vertices.forEach((vert) => {
        const segmentSize = size / numOfSegments;
        createField(vert, 2, 200, segmentSize);
    })
    groundGeometry.rotateX(-90);
    let groundMaterial = new THREE.MeshLambertMaterial({
        color: new THREE.Color(0x326983),
        emissive: new THREE.Color(0x3438),
        emissiveIntensity: 0.5,
        reflectivity: 0.3,

    });

    let ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.castShadow = true;
    ground.receiveShadow = true;
    scene.add(ground);
    //create fish
    const numOfFish = 50;
    let allFish = [];
    let followTarget = new THREE.Object3D();
    followTarget.position.z += 10;
    for (let i = 0; i < numOfFish; i++) {
        let fish = new THREE.Group();
        const bodyRadius = 5;
        let fishBodyGeometry = new THREE.OctahedronGeometry(bodyRadius, 0);
        fishBodyGeometry.vertices.forEach(vert => {
            //shape fish body;
            if (vert.y === 0) {
                if (vert.z === bodyRadius) {
                    vert.z *= 0.5;
                } else {
                    vert.x *= 0.5;
                }
            } else if (Math.abs(vert.y) === bodyRadius) {
                vert.y -= bodyRadius / 5 * (vert.y < 0 ? -1 : 1);
            }
        })
        let fishTailGeometry = new THREE.BoxGeometry(0.5, bodyRadius, bodyRadius)
        fishTailGeometry.vertices.forEach(vert => {
            if (vert.z === bodyRadius / 2) {
                vert.y = 0;
            }
        })
        fishTailGeometry.translate(0, 0, -bodyRadius / 4);
        let fishMaterial = new THREE.MeshLambertMaterial({ color: new THREE.Color(0xC6B6E0) });
        let fishBody = new THREE.Mesh(fishBodyGeometry, fishMaterial);
        let fishTail = new THREE.Mesh(fishTailGeometry, fishMaterial);
        let tail = new THREE.Group();
        tail.position.z -= bodyRadius;
        tail.rotation.y = 0;
        tail.add(fishTail);
        fish.add(fishBody);
        fish.add(tail);
        fish.castShadow = true;
        anime({
            targets: tail.rotation,
            y: [50, -50, 20, -20, 0],
            duration: 10000,
            elasticity: 0.25,
            delay: 100 * i,
            loop: true

        })
        fish.position.set(
            Math.floor(Math.random() * 10) * (Math.round(Math.random()) === 1 ? -1 : 1), 
            Math.floor(Math.random() * 10) * (Math.round(Math.random()) === 1 ? -1 : 1) + 100, 
            i * bodyRadius * 2 - 1000)
        scene.add(fish);
        allFish.push(fish);
    }
    scene.add(followTarget);
    camera.position.z += 500;
    camera.position.y += 600;
    camera.rotation.x -= 45;
    // postprocessing
    // let composer = new EffectComposer( renderer );
    // composer.addPass( new RenderPass( scene, camera ) );
    // glitchPass = new GlitchPass();
    // composer.addPass( glitchPass );

    var animate = function () {
        requestAnimationFrame(animate);
        followTarget.position.y += 0.1;
        followTarget.position.x += 0.1;
        allFish.forEach(fish => {
            fish.lookAt(followTarget.position);
        });
        camera.position.z -= 1;
        if (camera.position.z <= -2000) {
            camera.position.z = 500;
        }
      
        renderer.render(scene, camera);
    };

    animate();
}