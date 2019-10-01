import * as THREE from 'three';
import anime from 'animejs';
//imgs
import magCoverImg from '../imgs/room/buzz_mag.jpg';
const frustrum = 0.6;
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
    let floor = new THREE.Mesh(floorGeo, floorMaterial);
    floor.receiveShadow = true;
    const wall1Geo = new THREE.BoxGeometry(5, height, width);
    wall1Geo.translate(-width / 2 + 2.5, height / 2, 0);
    let wall1 = new THREE.Mesh(wall1Geo, floorMaterial);
    wall1.castShadow = true;
    wall1.receiveShadow = true;
    let wall2Geo = new THREE.BoxGeometry(width, height, 5);
    wall2Geo.translate(0, height / 2, -width / 2 + 2.5);
    let wall2 = new THREE.Mesh(wall2Geo, floorMaterial);
    wall2.castShadow = true;
    wall2.receiveShadow = true;
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
        let step = new THREE.Mesh(stepGeo, stairsMaterial);
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
    let base = new THREE.Mesh(baseGeo, baseMaterial);
    base.castShadow = true;
    base.receiveShadow = true;
    plant.add(base);
    //stem
    const stemHeight = 50;
    const stemGeo = new THREE.CylinderGeometry(2, 2, stemHeight);
    stemGeo.translate(0, stemHeight / 2 + baseSize / 2 + 5, 0);
    const stemMaterial = new THREE.MeshLambertMaterial({ color: stemColor });
    let stem = new THREE.Mesh(stemGeo, stemMaterial);
    stem.castShadow = true;
    stem.receiveShadow = true;
    plant.add(stem);

    const plantMaterial = new THREE.MeshLambertMaterial({ color: plantColor })
    //plantTop
    const plantTopGeo = new THREE.IcosahedronGeometry(20, 0);
    plantTopGeo.translate(0, 75, 0);
    let plantTop = new THREE.Mesh(plantTopGeo, plantMaterial);
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
    let plantSmallTop = new THREE.Mesh(plantSmallTopGeo, plantMaterial);
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
    let tableBase = new THREE.Mesh(tableBaseGeo, tableMaterial);
    tableBase.receiveShadow = true;
    tableBase.castShadow = true;
    table.add(tableBase);
    const legGeo = new THREE.CylinderGeometry(20, tableSize / 2, 25, 8, 8);
    legGeo.translate(0, 25 / 2, 0);
    let leg = new THREE.Mesh(legGeo, tableMaterial);
    leg.receiveShadow = true;
    leg.castShadow = true;
    table.add(leg);

    //make magazines for table
    const mags = new THREE.Group();
    const numOfMags = 2;
    for (let i = 0; i < numOfMags; i++) {
        const magazine = createMagazine(texture);
        magazine.rotation.z += -(Math.PI * 2) / 24 * i;
        magazine.position.set(25 * i, 5 * i, 0);
        mags.add(magazine);
    }
    mags.rotation.x += -(Math.PI * 2) / 4;
    mags.position.set(-10, 30, 10)
    table.add(mags);
    table.position.set(25, 0, 25);
    return table;
}

function createChair(chairColor) {
    const chair = new THREE.Group();
    const legs = new THREE.Group();
    const chairMaterial = new THREE.MeshLambertMaterial({ color: chairColor });
    for (let i = 1; i <= 4; i++) {
        const legGeo = new THREE.BoxGeometry(2, 20, 2, 1, 1, 1);
        legGeo.translate(i % 2 == 0 ? 20 : 0, 0, i === 4 || i === 3 ? -20 : 0);
        let leg = new THREE.Mesh(legGeo, chairMaterial);
        leg.receiveShadow = true;
        legs.add(leg);
    }
    legs.position.set(-10, 0, 10);
    chair.add(legs);
    //seat
    const seatGeo = new THREE.BoxGeometry(25, 4, 25);
    seatGeo.translate(0, 12, 0);
    let seat = new THREE.Mesh(seatGeo, chairMaterial);
    seat.castShadow = true;
    seat.receiveShadow = true;
    chair.add(seat);

    //backFrame
    const backFrame = new THREE.Group();
    for (let i = 1; i <= 2; i++) {
        const legGeo = new THREE.BoxGeometry(2, 25, 2, 1, 1, 1);
        legGeo.translate(i === 2 ? 20 : 0, 0, 0);
        let leg = new THREE.Mesh(legGeo, chairMaterial);
        leg.receiveShadow = true;
        leg.castShadow = true;
        backFrame.add(leg);
    }
    const frameGeo = new THREE.BoxGeometry(19, 8, 1, 1, 1, 1);
    frameGeo.translate(10, 4, 0);
    let frame = new THREE.Mesh(frameGeo, chairMaterial);
    frame.receiveShadow = true;
    backFrame.add(frame);
    backFrame.position.set(-10, 25, -10);
    chair.add(backFrame);
    return chair;
}

function createLamp(standColor, lampShadeColor) {
    const lamp = new THREE.Group();
    const standMaterial = new THREE.MeshLambertMaterial({ color: standColor });
    const standGeo = new THREE.CylinderGeometry(2, 10, 4, 4, 1);
    let stand = new THREE.Mesh(standGeo, standMaterial);
    lamp.add(stand);
    const lampHeight = 80;
    const poleGeo = new THREE.BoxGeometry(2, lampHeight, 2, 1, 1, 1);
    poleGeo.translate(0, lampHeight / 2, 0);
    let pole = new THREE.Mesh(poleGeo, standMaterial);
    lamp.add(pole);
    const lampShadeGeo = new THREE.CylinderBufferGeometry(4, 15, 20, 4, 4, true);
    lampShadeGeo.translate(0, 80, 0);
    const lampShadeMaterial = new THREE.MeshLambertMaterial({ color: lampShadeColor })
    let lampShade = new THREE.Mesh(lampShadeGeo, lampShadeMaterial);
    lamp.add(lampShade);
    lamp.rotation.y += Math.PI * 2 / 8;
    lamp.position.set(-40, 10, -80);
    //start shadows
    stand.receiveShadow = true;
    pole.receiveShadow = true;
    pole.castShadow = true;
    lampShade.castShadow = true;
    lampShade.receiveShadow = true;
    return lamp;
}

function createTablePlant(stemColor, baseColor, plantColor) {
    const tablePlant = new THREE.Group();
    const baseGeo = new THREE.CylinderGeometry(5, 4, 5, 8, 4);
    const baseMaterial = new THREE.MeshLambertMaterial({ color: baseColor });
    let base = new THREE.Mesh(baseGeo, baseMaterial);
    base.castShadow = true;
    tablePlant.add(base);
    const stemGeo = new THREE.CylinderGeometry(1, 1, 5);
    stemGeo.translate(0, 5, 0);
    const stemMaterial = new THREE.MeshLambertMaterial({ color: stemColor });
    let stem = new THREE.Mesh(stemGeo, stemMaterial);
    tablePlant.add(stem);
    const plantGeo = new THREE.DodecahedronGeometry(10, 0);
    plantGeo.translate(0, 15, 0);
    const plantMaterial = new THREE.MeshLambertMaterial({ color: plantColor });
    const plantTop = new THREE.Mesh(plantGeo, plantMaterial);
    tablePlant.add(plantTop);
    tablePlant.position.set(30, 30, -15);
    return tablePlant;
}

function createTable(tableColor) {
    const table = new THREE.Group();
    const legs = new THREE.Group();
    const tableHeight = 50;
    const tableMaterial = new THREE.MeshLambertMaterial({ color: tableColor });
    for (let i = 1; i <= 4; i++) {
        const legGeo = new THREE.BoxGeometry(2, tableHeight, 2, 1, 1, 1);
        legGeo.translate(i % 2 == 0 ? 90 : 0, 0, i === 4 || i === 3 ? -20 : 0);
        let leg = new THREE.Mesh(legGeo, tableMaterial);
        leg.receiveShadow = true;
        legs.add(leg);
    }
    table.add(legs);
    let tableGeo = new THREE.BoxGeometry(100, 5, 30, 1, 1, 1);
    tableGeo.translate(45, tableHeight / 2, -10);
    let tableBody = new THREE.Mesh(tableGeo, tableMaterial);
    tableBody.castShadow = true;
    tableBody.receiveShadow = true;
    table.add(tableBody);

    //table plant
    const tablePlant = createTablePlant(0xC78C9C, 0xFFB6C1, 0xB9E6EA);
    table.add(tablePlant);
    table.position.set(-30, 30, -70);
    return table;
}

function canvasResize(camera, canvas) {
    camera.left = frustrum * -canvas.innerWidth/ 2;
    camera.right = frustrum * canvas.innerWidth / 2;
    camera.top = frustrum * canvas.innerHeight / 2;
    camera.bottom = frustrum * -canvas.innerHeigt / 2;
    camera.updateProjectionMatrix();
}
export default function startEnvironment(canvas, bgColor) {
    console.log("inside env", canvas);
    let scene = new THREE.Scene();
    scene.background = new THREE.Color( bgColor );
    //let camera = new THREE.PerspectiveCamera(60, canvas.width / canvas.height, 0.1, 10000);
    let camera = new THREE.OrthographicCamera(frustrum * canvas.width / - 2, frustrum * canvas.width / 2, frustrum * canvas.height / 2, frustrum * canvas.height / - 2, 0.01, 300);
    camera.position.set(0, 120, 50);
    //camera.rotation.x -= 15;
    let renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.width, canvas.height);
    renderer.shadowMap.enabled = true;
    renderer.setClearColor(new THREE.Color(1,1,1), 0);
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
    const livingRoom = new THREE.Group();
    const room = createRoom(200, 200); //adds room
    livingRoom.add(room);
    const stairs = createStairs(195, 190, 40, 200, 0xB9E6EA);
    livingRoom.add(stairs);
    const plant = createPlant(0xC78C9C, 0xFFB6C1, 0xB9E6EA);
    livingRoom.add(plant);
    //table
    const coffeeTable = createCoffeeTable(0xFFB6C1, magTexture);
    livingRoom.add(coffeeTable);
    const table = createTable(0xFBDDA2);
    livingRoom.add(table);
    //chairs
    const chair1 = createChair(0xC78C9C);
    chair1.rotation.y += Math.PI * 2 / 8;
    chair1.position.set(-10, 10, -25);
    livingRoom.add(chair1);
    const chair2 = createChair(0xC78C9C);
    chair2.rotation.y -= Math.PI * 2 / 8;
    chair2.position.set(75, 10, -20);
    livingRoom.add(chair2);
    //lamp
    const lamp = createLamp(0xFFB6C1, 0xEA8A9D);
    livingRoom.add(lamp);
    livingRoom.rotation.y -= Math.PI * 2 / 8;
    livingRoom.position.set(0, 10, -100);
    scene.add(livingRoom);
    camera.lookAt(new THREE.Vector3(0, 100, 0));
    anime({
        targets: livingRoom.rotation,
        y: [Math.PI/4, -Math.PI/4],
        duration: 10000,
        loop: true
    })
    const clock = new THREE.Clock(true);

    canvas.addEventListener('resize', function() {
        console.log('canvas change');
        canvasResize(camera, canvas);
    });
    var animate = function () {
        requestAnimationFrame(animate);
        // clock.getElapsedTime();
        // camera.lookAt(new THREE.Vector3(0, 100, 0));
        // camera.position.set(250 * Math.cos(clock.elapsedTime / 10), 100, 250 * Math.sin(clock.elapsedTime / 10))
        renderer.render(scene, camera);
    };
    animate();
}