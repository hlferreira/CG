var camera, cameraO, cameraP, scene, pauseScene, renderer, wireframe = false, day = true, pl = true, paused = false;

var directionalLight, pointLight; pointLightIntesity = 0.5;

var chessBoard, poolBall, magicCube;

var frustum = 700;

/*----------------------------------------------------------------------------*/
/*                                  SCENE                                     */
/*----------------------------------------------------------------------------*/

function createScene() {
  'use strict';

  scene = new THREE.Scene();

  scene.add(new THREE.AxesHelper(10));

  chessBoard = new ChessBoard(0,0,0);
  poolBall = new PoolBall(40, chessBoard.heightBoard, 0);
  magicCube = new MagicCube(0, chessBoard.heightBoard, 0)


  scene.add(chessBoard);
  scene.add(poolBall);
  scene.add(magicCube);

  directionalLight(60, 100 , 60);
  pointlight(-60,100,-60);

  scene.add(directionalLight);
  scene.add(pointLight);
  console.log(scene);

}

function createPauseScene(){
    'use strict'
    pauseScene = new THREE.Scene();
    var pauseTexture = new THREE.TextureLoader().load( 'textures/pause.png' );
    pauseTexture.wrapS = pauseTexture.wrapT = THREE.RepeatWrapping;
    pauseTexture.repeat.set(1, 1);

    var pauseBox = new THREE.PlaneBufferGeometry(100, 50,8,8);
    var material = new THREE.MeshBasicMaterial({color: 0x00ffff, map: pauseTexture});
    var mesh = new THREE.Mesh(pauseBox, material);

    mesh.position.set(0,0,0);
    //mesh.rotation.x = -Math.PI / 2;
    pauseScene.add(mesh);
}
/*----------------------------------------------------------------------------*/
/*                                  CAMERAS                                   */
/*----------------------------------------------------------------------------*/

function directionalLight(x, y, z){
  directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
  directionalLight.position.set(x, y, z);
}

function pointlight(x,y,z){
    pointLight = new THREE.PointLight(0xffffff,pointLightIntesity,1000);
    pointLight.position.set(x,y,z);
    console.log(pointLight);
}

function createPCamera(x,y,z) {
    'use strict';
    var c = window.innerWidth / window.innerHeight;
    cameraP = new THREE.PerspectiveCamera(80,window.innerWidth / window.innerHeight,1,1000);
    setCameraPosition(cameraP,x,y,z);
}

function createOCamera(x,y,z) {
    'use strict';
    var c = window.innerWidth / window.innerHeight;
    cameraO = new THREE.OrthographicCamera(-frustum*c/10,frustum*c/10,frustum/10,-frustum/10,1,1000);
    setCameraPosition(cameraO,x,y,z);
    //ta a olhar para a primeria cena
}


function setCameraPosition(cam,x,y,z){
    cam.position.x = x;
    cam.position.y = y;
    cam.position.z = z;
    cam.lookAt(scene.position);
}

function onResize() {
    'use strict';
    renderer.setSize(window.innerWidth, window.innerHeight);

    var aspect = window.innerWidth/ window.innerHeight;
    if (window.innerHeight < window.innerWidth) {
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
    }

}


/*----------------------------------------------------------------------------*/
/*                                  KEYS                                      */
/*----------------------------------------------------------------------------*/

function onKeyDown(e) {
    'use strict';

  switch (e.keyCode) {
    case 87: //A
      wireframe = !wireframe;
      console.log(wireframe);
      scene.traverse(function (node) {
          if (node instanceof THREE.Mesh) {
            node.material.wireframe =  wireframe;
          }
      });
      break;
    case 69:  //E
      activateAxis = true;
      break;
    case 80: //P
    //console.log(pointLight.intensity>0);
      if(pl){
        pl = false
        pointLight.intensity = 0;
        console.log(pointLight);
      }
      else{
        pl = true
        pointLight.intensity = 0.5;
      }
        break;
    case 68: //D
    if(day == true){
        day = false;
        directionalLight.intensity = 0;
        }
        else{
        day = true;
        directionalLight.intensity = 1;
        }
        break;
    case 76:
        console.log(scene.children[2]);
        for(var i = 1; i<scene.children.length -2  ;i++)
            scene.children[i].changeIlumination();
        break;
    case 83:// S
        poolBall.moving = !poolBall.moving;
        console.log(poolBall.moving );
        paused = !paused;
        break;
    }
    

}

/*----------------------------------------------------------------------------*/
/*                                 ANIMATE                                    */
/*----------------------------------------------------------------------------*/

function animate() {
    'use strict';

    poolBall.ballMovement(chessBoard.heightBoard);
    render();
    requestAnimationFrame(animate);

}



/*----------------------------------------------------------------------------*/
/*                                  INIT                                      */
/*----------------------------------------------------------------------------*/

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    createScene();
    createPauseScene();
    createPCamera(80,50,70);
    createOCamera(0,0,10);
    camera = cameraP;
    var controls = new THREE.OrbitControls(camera);

    renderer.autoClear = false;

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
}


/*----------------------------------------------------------------------------*/
/*                                  RENDER                                    */
/*----------------------------------------------------------------------------*/

function render() {
    'use strict';
    renderer.render(scene, camera);


    if(paused) {
        console.log('rocha');
        //meter clock.getdelta()
        renderer.clearDepth();
        renderer.render(pauseScene,cameraO);
    }
}
