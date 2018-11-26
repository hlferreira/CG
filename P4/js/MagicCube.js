class MagicCube extends THREE.Object3D{
  constructor(x, y, z){
    super();

    this.lenght = 24;
    
    
    this.materials = [];
    this.phong = true;
    this.texture = new THREE.TextureLoader().load( 'textures/cube.png' );
    this.bumpmap = new THREE.TextureLoader().load('textures/cubebumpmap.png');
    this.materials.push(new THREE.MeshPhongMaterial( { map: this.texture,  bumpMap:this.bumpmap} ));
    this.materials.push(new THREE.MeshBasicMaterial({ map: this.texture} ));
    this.material = this.materials[0];

    this.texture.wrapS = THREE.RepeatWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;

    this.addCube();

    this.position.x = x;
    this.position.y = y + this.lenght/2;
    this.position.z = z;
  }



  addCube(){
    'use strict';
    var geometry = new THREE.CubeGeometry(this.lenght, this.lenght, this.lenght);
    //ponto A
    console.log(geometry.faceVertexUvs[0][0][0]);
    for(var i=0; i<8; i = i+2){
      geometry.faceVertexUvs[0][i][0].x = (i/2)/4;
      geometry.faceVertexUvs[0][i][0].y = 2/3;
      //ponto 2
      geometry.faceVertexUvs[0][i][1].x = (i/2)/4;
      geometry.faceVertexUvs[0][i][1].y = 1/3;
      //ponto 3
      geometry.faceVertexUvs[0][i][2].x = ((i/2)+1)/4;
      geometry.faceVertexUvs[0][i][2].y = 2/3;

      geometry.faceVertexUvs[0][i+1][0].x = (i/2)/4;
      geometry.faceVertexUvs[0][i+1][0].y = 1/3;
      //ponto 2
      geometry.faceVertexUvs[0][i+1][1].x = ((i/2)+1)/4;
      geometry.faceVertexUvs[0][i+1][1].y = 1/3;
      //ponto 3
      geometry.faceVertexUvs[0][i+1][2].x = ((i/2)+1)/4;
      geometry.faceVertexUvs[0][i+1][2].y = 2/3;
    }
    //face traz
    geometry.faceVertexUvs[0][10][0].x = 1/4;
    geometry.faceVertexUvs[0][10][0].y = 1;
    //ponto 2
    geometry.faceVertexUvs[0][10][1].x = 1/4;
    geometry.faceVertexUvs[0][10][1].y = 2/3;
    //ponto 3
    geometry.faceVertexUvs[0][10][2].x = 2/4;
    geometry.faceVertexUvs[0][10][2].y = 1;

    geometry.faceVertexUvs[0][11][0].x = 1/4;
    geometry.faceVertexUvs[0][11][0].y = 2/3;
    //ponto 2
    geometry.faceVertexUvs[0][11][1].x = 2/4;
    geometry.faceVertexUvs[0][11][1].y = 2/3;
    //ponto 3
    geometry.faceVertexUvs[0][11][2].x = 2/4;
    geometry.faceVertexUvs[0][11][2].y = 1;

    //face frente
    geometry.faceVertexUvs[0][8][0].x = 1/4;
    geometry.faceVertexUvs[0][8][0].y = 1/3;
    //ponto 2
    geometry.faceVertexUvs[0][8][1].x = 1/4;
    geometry.faceVertexUvs[0][8][1].y = 0;
    //ponto 3
    geometry.faceVertexUvs[0][8][2].x = 2/4;
    geometry.faceVertexUvs[0][8][2].y = 1/3;

    geometry.faceVertexUvs[0][9][0].x = 1/4;
    geometry.faceVertexUvs[0][9][0].y = 0;
    //ponto 2
    geometry.faceVertexUvs[0][9][1].x = 2/4;
    geometry.faceVertexUvs[0][9][1].y = 0;
    //ponto 3
    geometry.faceVertexUvs[0][9][2].x = 2/4;
    geometry.faceVertexUvs[0][9][2].y = 1/3;


    var mesh = new THREE.Mesh(geometry, this.material);
    this.add(mesh);
    this.add(new THREE.AxisHelper(10));
  }

  changeIlumination(){
    if(this.phong)
      this.children[0].material = this.materials[1];
    else
      this.children[0].material = this.materials[0];

    this.phong = !this.phong;
  }  
}
