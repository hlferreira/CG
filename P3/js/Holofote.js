class Holofote extends THREE.Object3D{
  constructor(x, y, z, lamp_radius, cone_length, angle){
    super();

    this.lampRadius = lamp_radius;
    this.coneLength = cone_length;
    this.coneRadius = 6;

    this.rotation.y = angle;

    this.addSpotlight();

    this.lightUp = true;

    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
  }

  addSpotlight(){
    this.addLamp(0, this.lampRadius, 0);
    this.addCone(0, this.coneLength, 0);
    this.addLight(0, 0, 0);
  }

  addLamp(x, y, z){
    'use strict';
    var geometry = new THREE.SphereGeometry(this.lampRadius, 16, 16);
    var pmaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe: true});
    var mesh = new THREE.Mesh(geometry, pmaterial);
    mesh.position.set(x, y, z);
    this.add(mesh);
  }

  addCone(x, y, z){
    var geometry = new THREE.ConeGeometry(this.coneRadius, this.coneLength, 32);
    var pmaterial = new THREE.MeshPhongMaterial({ color: 0x4245f4, wireframe: true});
    var mesh = new THREE.Mesh(geometry, pmaterial);
    mesh.rotation.x = Math.PI/4;
    mesh.position.set(x, y - 2, z + 2);
    this.add(mesh);
  }

  addLight(x, y, z){
    this.light = new THREE.PointLight( 0xffffff, 1, 100);
    //this.light.position.set(x , y, z - this.lampRadius*Math.cos(Math.PI/4));
    this.add(this.light);
  }

  stateSpotLight(){
    if(this.lightUp == true){
      this.lightUp = false;
      this.light.intensity = 0;
    }
    else{
      this.lightUp = true;
      this.light.intensity = 1;
    }
  }
  
}
