import * as THREE from 'three';
import anime from 'animejs';
//imgs
import magCoverImg from '../imgs/room/buzz_mag.jpg';
/**
  * Creates a two wall room with a floor
   - "width" : Determines the width of the room
   - "height" : Determines the height of the room
   - "scene" : Must be the THREE scene so the room can be added

  * @param {number} width - The width of the room
  * @param {number} height - The height of the room
  * @returns {Object} Returnts a THREE.Object that represents the room
  */
function createRoom(width, height) {
    const room = new THREE.Group();
    const floorMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const floorGeo = new THREE.BoxGeometry(width, 10, width);
    const floor = new THREE.Mesh(floorGeo, floorMaterial);
    floor.receiveShadow = true;
    const wall1Geo = new THREE.BoxGeometry(5, height, width);
    wall1Geo.translate(-width / 2 + 2.5, height / 2, 0);
    const wall1 = new THREE.Mesh(wall1Geo, floorMaterial);
    wall1.castShadow = true;
    const wall2Geo = new THREE.BoxGeometry(width, height, 5);
    wall2Geo.translate(0, height / 2, -width / 2 + 2.5);
    const wall2 = new THREE.Mesh(wall2Geo, floorMaterial);
    wall2.castShadow = true;
    room.add(floor);
    room.add(wall1);
    room.add(wall2);
    //room.rotation.y -= 45;
    return room;
}

function createStairs(stairDepth, stairHeight, stepWidth, floorWidth, stairColor) {
    const floorOffset = 5;
    const numOfSteps = 10;
    const stairs = new THREE.Group();
    const stairsMaterial = new THREE.MeshLambertMaterial({ color: stairColor })
    for (let i = 1; i <= numOfSteps; i++) {
        const stepDepth = (stairDepth / numOfSteps);
        const stepHeight = (stairHeight / numOfSteps);
        const stepGeo = new THREE.BoxGeometry(stepWidth, stepHeight * i, stepDepth, 1, 1, 1);
        stepGeo.translate(0, (stepHeight * i / 2), -stepDepth * i);
        const step = new THREE.Mesh(stepGeo, stairsMaterial);
        step.castShadow = true;
        step.receiveShadow = true;
        stairs.add(step);
    }
    stairs.position.set(-floorWidth / 2 + floorOffset + stepWidth / 2, floorOffset, floorWidth / 2 + 10);
    return stairs;
}

function createPlant(stemColor, caseColor, plantColor) {
    const plant = new THREE.Group();
    const baseSize = 20;
    const baseGeo = new THREE.BoxGeometry(baseSize, baseSize, baseSize, 5, 5, 5);
    baseGeo.vertices.forEach(vert => {
        if (vert.y >= baseSize / 2 && Math.abs(vert.x) <= 8 && Math.abs(vert.z) <= 8) {
            vert.y -= 4;
        }
    })
    baseGeo.translate(0, baseSize / 2 + 5, 0);
    const baseMaterial = new THREE.MeshLambertMaterial({ color: caseColor });
    const base = new THREE.Mesh(baseGeo, baseMaterial);
    base.castShadow = true;
    base.receiveShadow = true;
    plant.add(base);
    //stem
    const stemHeight = 50;
    const stemGeo = new THREE.CylinderGeometry(2, 2, stemHeight);
    stemGeo.translate(0, stemHeight / 2 + baseSize / 2 + 5, 0);
    const stemMaterial = new THREE.MeshLambertMaterial({ color: stemColor });
    const stem = new THREE.Mesh(stemGeo, stemMaterial);
    stem.castShadow = true;
    stem.receiveShadow = true;
    plant.add(stem);

    const plantMaterial = new THREE.MeshLambertMaterial({ color: plantColor })
    //plantTop
    const plantTopGeo = new THREE.IcosahedronGeometry(20, 0);
    plantTopGeo.translate(0, 75, 0);
    const plantTop = new THREE.Mesh(plantTopGeo, plantMaterial);
    plantTop.castShadow = true;
    plantTop.receiveShadow = true;
    plant.add(plantTop);

    //plant side piece
    const branch = new THREE.Group();
    const smallStemGeo = new THREE.CylinderGeometry(1, 1, 10, 2, 1, true);
    const smallStem = new THREE.Mesh(smallStemGeo, stemMaterial);
    smallStem.castShadow = true;
    plant.add(smallStem);
    //plantSmallTop
    const plantSmallTopGeo = new THREE.IcosahedronGeometry(5, 0);
    const plantSmallTop = new THREE.Mesh(plantSmallTopGeo, plantMaterial);
    plantSmallTop.castShadow = true;
    branch.add(smallStem);
    smallStem.position.set(0, 5, 0);
    branch.add(plantSmallTop);
    plantSmallTop.position.set(0, 12, 0);
    branch.position.set(0, 40, 0);
    branch.rotation.z += 45;
    plant.add(branch);
    plant.position.set(90, 0, -70)
    return plant;
}

function createMagazine(texture) {
    const options = { color: 0xffffff, map: texture };
    const magGeo = new THREE.BoxGeometry(20, 25, 1);
    const magMaterial = new THREE.MeshLambertMaterial(options)
    const magazine = new THREE.Mesh(magGeo, magMaterial);
    return magazine;
}

function createCoffeeTable(tableColor, texture) {
    //tablebase
    const table = new THREE.Group();
    const tableMaterial = new THREE.MeshLambertMaterial({ color: tableColor })
    const tableSize = 50;
    const tableBaseGeo = new THREE.CylinderGeometry(tableSize, tableSize, 5);
    tableBaseGeo.translate(0, 25, 0);
    const tableBase = new THREE.Mesh(tableBaseGeo, tableMaterial);
    tableBase.receiveShadow = true;
    tableBase.castShadow = true;
    table.add(tableBase);
    const legGeo = new THREE.CylinderGeometry(20, tableSize / 2, 25, 8, 8);
    legGeo.translate(0, 25 / 2, 0);
    const leg = new THREE.Mesh(legGeo, tableMaterial);
    leg.receiveShadow = true;
    leg.castShadow = true;
    table.add(leg);

    //make magazines for table
    const numOfMags = 4;
    for(let i = 0; i < numOfMags; i++) {
        const magazine = createMagazine(texture);
        magazine.position.set(0, 50, 0);
    }
    table.add(magazine);
    table.position.set(25, 0, 0);
    return table;
}

export default function startEnvironment(canvas) {
    console.log("inside env", canvas);
    let scene = new THREE.Scene();
    scene.background = new THREE.Color().setHSL(0.6, 0, 1);
    let camera = new THREE.PerspectiveCamera(60, canvas.width / canvas.height, 0.1, 10000);
    //let camera = new THREE.OrthographicCamera(canvas.width / - 2, canvas.width / 2, canvas.height / 2, canvas.height / - 2, 0.1, 1000 );
    camera.position.set(0, 50, 200);
    //camera.rotation.x -= 15;
    let renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.width, canvas.height);
    renderer.shadowMap.enabled = true;
    //light
    let dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(0, 1.75, 1);
    dirLight.position.multiplyScalar(30);
    dirLight.lookAt(new THREE.Vector3(0, 100, 0));
    scene.add(dirLight);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    let hemiLight = new THREE.HemisphereLight(0xffffff, 0x22ffff, 0.6);
    hemiLight.color.setHSL(0.6, 1, 0.8);
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

    //load textures
    const magTexture = new THREE.TextureLoader().load(magCoverImg);

    scene.add(createRoom(200, 200)); //adds room
    scene.add(createStairs(195, 190, 40, 200, 0xB9E6EA));
    scene.add(createPlant(0xC78C9C, 0xFFB6C1, 0xB9E6EA));
    const coffeeTable = createCoffeeTable(0xFFB6C1, magTexture);
    scene.add(coffeeTable);
    const clock = new THREE.Clock(true);
    var animate = function () {
        requestAnimationFrame(animate);
        clock.getElapsedTime();
        camera.lookAt(new THREE.Vector3(0, 100, 0));
        camera.position.set(250 * Math.cos(clock.elapsedTime / 10), 100, 250 * Math.sin(clock.elapsedTime / 10))
        renderer.render(scene, camera);
    };
    animate();
}