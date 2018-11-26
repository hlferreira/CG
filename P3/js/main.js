var camera, cameraO, cameraP, scene, renderer, wireframe = true;

var directionalLight;

var day = true;

var aviao, holofote;

var frustum = 700;

var clock = new THREE.Clock(), time_delta;

var upflag = false; downflag = false; rightflag = false; leftflag = false, phong = true, basic = false;


/*----------------------------------------------------------------------------*/
/*                                  SCENE                                     */
/*----------------------------------------------------------------------------*/

function createScene() {
  'use strict';

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  scene.add(new THREE.AxesHelper(10));

  aviao = new Aviao();
  scene.add(aviao);
  scene.add(aviao.addSpotLights());

  directionalLight(60, 100 , 60);

  scene.add(directionalLight);

}

/*----------------------------------------------------------------------------*/
/*                                  CAMERAS                                   */
/*----------------------------------------------------------------------------*/

function directionalLight(x, y, z){
  directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
  directionalLight.position.set(x, y, z);
}

function createPCamera(x,y,z) {
    'use strict';
    var c = window.innerWidth / window.innerHeight;
    cameraP = new THREE.PerspectiveCamera(80,window.innerWidth / window.innerHeight,1,1000);
    setCameraPosition(cameraP,x,y,z);
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
    case 65: //A
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
    case 78: //N
      if(day == true){
        day = false;
        directionalLight.intensity = 0;
      }
      else{
        day = true;
        directionalLight.intensity = 1;
      }
      break;
    case 76: //L
      if(!basic)
        aviao.basic();
      else
        if(phong)
          aviao.phong();
        else
          aviao.lambert();
      basic = !basic;
      break;
    case 71: //G
      if(!basic){
        phong = !phong;
          if(phong)
            aviao.phong();
          else
            aviao.lambert();
        }
      break;
    case 49: //1
      aviao.changeStateSpotLight(0);
      break;
    case 50: //2
      aviao.changeStateSpotLight(1);
      break;
    case 51: //3
      aviao.changeStateSpotLight(2);
      break;
    case 52: //4
      aviao.changeStateSpotLight(3);
      break;
    case 38: //arrow-up
      upflag = true;
      break;
    case 40: //arrow-down
      downflag = true
      break;
    case 37: //arrow-left
      leftflag = true;
      break;
    case 39: //arrow-right
      rightflag = true;
      break;
    }

}

function onKeyup(e){
    switch (e.keyCode){
        case 38: //arrow-up
            upflag = false;
        break;
        case 40: //arrow-down
            downflag = false;
        break;
        case 37: //arrow-left
            leftflag = false;
        break;
        case 39: //arrow-right
            rightflag = false;
        break;
    }
}


/*----------------------------------------------------------------------------*/
/*                                 ANIMATE                                    */
/*----------------------------------------------------------------------------*/

function animate() {
    'use strict';


    time_delta = clock.getDelta();


    if(upflag){aviao.rotateX(-1*time_delta);}
    if(downflag){aviao.rotateX(1*time_delta);}
    if(leftflag){aviao.rotateY(-1*time_delta);}
    if(rightflag){aviao.rotateY(1*time_delta);}


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
    createPCamera(80,70,70);
    camera = cameraP;
    //var controls = new THREE.OrbitControls(camera);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyup);
    window.addEventListener("resize", onResize);
}


/*----------------------------------------------------------------------------*/
/*                                  RENDER                                    */
/*----------------------------------------------------------------------------*/

function render() {
    'use strict';
    renderer.render(scene, camera);
}
