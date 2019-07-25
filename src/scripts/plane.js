import * as THREE from 'three';
import anime from 'animejs';
export default function startPlane(canvas, bgcolor) {
    const cM = new THREE.Matrix4().makeTranslation(0, 15, 30);
    // const fCM = new THREE.Matrix4()
    //     .compose(
    //         new THREE.Vector3(0, 20, 0),
    //         new THREE.Quaternion(),
    //         new THREE.Vector3(1, 1, 1)
    //     );
    const xRM = new THREE.Matrix4().makeRotationX(Math.PI);
    /*plane*/
    class Plane {
        constructor(speed = 0.5, animationSpeed) {
            this.speed = speed;
            this.propeller = null;
            this.head = new THREE.Group();
            const createPlane = () => {
                //Matrices
                const xRM2 = new THREE.Matrix4().makeRotationX(-Math.PI / 2);
                const wingM = new THREE.Matrix4().makeTranslation(0, -4, 4);
                const pHeadM = new THREE.Matrix4().makeTranslation(0, 0, 0.3);
                const propellerM = new THREE.Matrix4()
                    .compose(
                        new THREE.Vector3(0, -9.5, 0),
                        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2),
                        new THREE.Vector3(1, 1, 1)
                    );
                const tailM = new THREE.Matrix4()
                    .compose(
                        new THREE.Vector3(0, 10, 0),
                        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2),
                        new THREE.Vector3(1, 1, 1)
                    );
                const mainColor = 0xff0000;
                const secondaryColor = 0xffff00;
                /*materials */
                const mainMaterial = new THREE.MeshToonMaterial({ color: mainColor });
                const secondaryMaterial = new THREE.MeshToonMaterial({ color: secondaryColor });
                const plane = new THREE.Group();
                /*wing*/
                const wingGeometry = new THREE.BoxGeometry(25, 5, 0.5);
                wingGeometry.applyMatrix(wingM);
                const wing = new THREE.Mesh(wingGeometry, secondaryMaterial);
                /*plane body*/
                const pBodyGeometry = new THREE.CylinderGeometry(4, 1, 18, 8, 5);
                pBodyGeometry.vertices.forEach((v, i) => {
                    if (i <= 15 && i >= 8) {
                        v.setX(v.x * 1.2);
                        v.setZ(v.z * 1.2);
                    }
                });
                const pBody = new THREE.Mesh(pBodyGeometry, mainMaterial);
                pBody.applyMatrix(xRM);
                /* propeller */
                let blades = [];
                for (let i = 0; i < 4; i++) {
                    const bladeWidth = 4;
                    const bladeM = i % 2 == 0 ? new THREE.Matrix4()
                        .compose(
                            new THREE.Vector3(0, bladeWidth / 2 * (i == 0 ? 1 : -1), 0),
                            new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2),
                            new THREE.Vector3(1, 1, 1)
                        ) : new THREE.Matrix4().makeTranslation(bladeWidth / 2 * (i == 1 ? 1 : -1), 0, 0);
                    const bladeGeometry = new THREE.BoxGeometry(bladeWidth, 1, 0.5);
                    bladeGeometry.applyMatrix(bladeM);
                    const blade = new THREE.Mesh(bladeGeometry, secondaryMaterial);
                    blades.push(blade);
                }
                const pHeadGeometry = new THREE.SphereGeometry(1, 3, 5, 0, Math.PI, 0, Math.PI);
                pHeadGeometry.applyMatrix(pHeadM);
                const propellerHead = new THREE.Mesh(pHeadGeometry, mainMaterial);
                const propeller = new THREE.Group();
                /*plane tail */
                const tailHeight = 4;
                const tailDepth = 2;
                const tailWidth = 0.4;
                const hTailGeometry = new THREE.BoxGeometry(8, tailWidth, tailDepth);
                const hTail = new THREE.Mesh(hTailGeometry, secondaryMaterial);
                const bTailGeometry = new THREE.BoxGeometry(tailWidth, tailHeight, 2);
                bTailGeometry.vertices.forEach(v => {
                    if (v.y === tailHeight / 2 && v.z === tailDepth / 2) {
                        v.z -= tailDepth - 0.2;
                    }
                });
                const bTailM = new THREE.Matrix4().makeTranslation(0, tailHeight / 2, 0);
                bTailGeometry.applyMatrix(bTailM);
                const bTail = new THREE.Mesh(bTailGeometry, secondaryMaterial);
                const tail = new THREE.Group();
                tail.add(hTail);
                tail.add(bTail);
                tail.applyMatrix(tailM);

                //const tailPipeGeometry = new THREE.CylinderGeometry()
                /*plane construction*/
                plane.add(pBody);
                plane.add(wing);
                blades.forEach(b => {
                    propeller.add(b);
                });
                propeller.add(propellerHead);
                propeller.applyMatrix(propellerM);
                this.propeller = propeller;
                plane.add(propeller);
                plane.add(tail);
                this.head.applyMatrix(propellerM);
                plane.applyMatrix(xRM2);
                return plane;
            }
            this.mesh = createPlane();
            this.animationSpeed = 1 / animationSpeed;
        }
        animate() {
            this.propeller.rotation.z += 1;
        }
        runIdle() {
            //ets rotation animation
            anime({
                targets: simplePlane.mesh.rotation,
                loop: true,
                autoplay: true,
                easing: 'easeInOutCirc',
                y: [{ value: 0, duration: 1000 * this.animationSpeed }, { value: -Math.PI / (Math.round(Math.random()) * 5 + 15), duration: 4000 * this.animationSpeed }, { duration: 1000 * this.animationSpeed }, { value: 0, duration: 1000 * this.animationSpeed }, { value: Math.PI / (Math.round(Math.random()) * 5 + 15), duration: 4000 * this.animationSpeed }, { value: Math.PI * 4 + Math.PI / 8, duration: 2000 * this.animationSpeed }, { value: Math.PI * 4, duration: 1000 * this.animationSpeed }],
                z: [{ value: Math.PI / 50, duration: 1000 * this.animationSpeed }, { value: Math.PI / 50, duration: 7000 * this.animationSpeed }, { value: -Math.PI / 50, duration: 7000 * this.animationSpeed }, { value: Math.PI / 50, duration: 3000 * this.animationSpeed }],
                x: [{ value: -Math.PI / 2 + Math.PI / 20, duration: 2000 * this.animationSpeed, delay: 300 }, { value: -Math.PI / 2, duration: 4000 * this.animationSpeed }, { value: -Math.PI / 2 - Math.PI / 20, duration: 2000 * this.animationSpeed }, { value: -Math.PI / 2, duration: 4000 * this.animationSpeed }]
            });

        }
    }
    const simplePlane = new Plane(0.3, 0.5);
    /* Scene */
    const scene = new THREE.Scene();
    /* set up scene */
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.applyMatrix(new THREE.Matrix4().makeTranslation(0, 1000, 0));
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    scene.add(directionalLight.target);
    scene.add(simplePlane.mesh);
    // var axesHelper = new THREE.AxesHelper( 15 );
    // scene.add( axesHelper );
    directionalLight.target = simplePlane.mesh;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.shadowMap.enabled = true;
    renderer.setClearColor(new THREE.Color(bgcolor));
    const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, .1, 100);
    camera.applyMatrix(cM);
    renderer.setSize(canvas.width, canvas.height);
    /*interactivity*/

    simplePlane.runIdle();
    function animate() {
        simplePlane.animate();
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
    }
    camera.lookAt(simplePlane.mesh.position);
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);

}