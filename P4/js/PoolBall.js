class PoolBall extends THREE.Object3D{
  constructor(x, y, z){
    super();

    this.radius = 12

    this.textureBall = new THREE.TextureLoader().load( 'textures/ball2.jpg' );
    this.materials = [];
    this.phong = true;
    this.materials.push(new THREE.MeshPhongMaterial( { map: this.textureBall, specular: 0x9f9f9f} ))
    this.materials.push(new THREE.MeshBasicMaterial({map: this.textureBall}))
    this.material = this.materials[0];

    this.moving = true;
    this.velocity = 0;
    this.addBall();

    this.position.x = x;
    this.position.y = y + this.radius;
    this.position.z = z;
  //this.vec = new THREE.Vector3(-this.position.x,-1,-this.position.z);

    this.add(new THREE.AxesHelper(10));
  }

  addBall() {
    'use strict';
    var geometry = new THREE.SphereGeometry(this.radius, 20, 20);
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.rotation.y = Math.PI/4;
    this.add(this.mesh);
  }

  changeIlumination(){
    if(this.phong)
      this.children[0].material = this.materials[1];
    else
      this.children[0].material = this.materials[0];

    this.phong = !this.phong;
  }

  ballMovement(chessheight){
    var old_vector = new THREE.Vector3(-this.position.x,-1,-this.position.z);
    
    if(this.moving){
      this.velocity += 0.005;
     
      var velocidade = new THREE.Vector3(40 * Math.cos(this.velocity),this.radius + chessheight,40 * Math.sin(this.velocity));
      this.position.copy(velocidade);
      
      var vector = new THREE.Vector3(-this.position.x,-1,-this.position.z);

      var angle = vector.angleTo(old_vector);
      
      this.rotateOnWorldAxis(new THREE.Vector3(0,1,0),-angle);
      this.ballRotation(old_vector,vector);
    } 
  }

  ballRotation(old_vector,vetor){

    let delta_s = old_vector.distanceTo(vetor);
    let delta_a = delta_s/this.radius;
    this.rotateX(delta_a);
  
    
  }

}
