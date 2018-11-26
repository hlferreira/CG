class ChessBoard extends THREE.Object3D{
  constructor(x, y, z){
    super();

    this.lenghtBoard = 180;
    this.heightBoard = 2;

    this.lenghtMargin = 16;
    this.cornerRadius = 8;

    this.marginLimit = this.lenghtBoard/2 + this.lenghtMargin/2;

    this.materials = [];
    this.phong = true;
    this.textureBoard = new THREE.TextureLoader().load( 'textures/board3.jpg' );
    this.textureMargin = new THREE.TextureLoader().load( 'textures/margin.jpg' );

    this.setMaterials();
    this.addBoard();
    this.addBoardBorders();
    this.addAllCorners();


    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
  }

  setMaterials(){
    this.materials.push(new THREE.MeshPhongMaterial( { map: this.textureBoard, specular: 0x010101, color: 0xffffff} ));
    this.materials.push(new THREE.MeshPhongMaterial({ map: this.textureMargin}));
    this.materials.push(new THREE.MeshBasicMaterial({map: this.textureBoard}));
    this.materials.push(new THREE.MeshBasicMaterial({map: this.textureMargin}));
  }

  addBoardBorders(){
    this.addBorder(0, this.heightBoard + 1 , this.marginLimit, 0);
    this.addBorder(0, this.heightBoard + 1, -this.marginLimit, 0);
    this.addBorder(this.marginLimit, this.heightBoard + 1, 0, Math.PI/2);
    this.addBorder(-this.marginLimit, this.heightBoard + 1, 0, Math.PI/2);
  }

  addAllCorners(){
    this.addCorner(-this.marginLimit, this.heightBoard + 1, this.marginLimit);
    this.addCorner(-this.marginLimit, this.heightBoard + 1, -this.marginLimit);
    this.addCorner(this.marginLimit, this.heightBoard + 1, this.marginLimit);
    this.addCorner(this.marginLimit, this.heightBoard + 1, -this.marginLimit);

  }


  addBoard(){
    'use strict';
    var geometry = new THREE.CubeGeometry(this.lenghtBoard, this.heightBoard, this.lenghtBoard,150,150);
    var mesh = new THREE.Mesh(geometry, this.materials[0]);
    mesh.position.y = this.heightBoard/2;
    this.add(mesh);
  }


  addBorder(x, y, z, angle){
    'use strict';
    var geometry = new THREE.CubeGeometry(this.lenghtBoard, this.heightBoard, this.lenghtMargin,50,50);
    var mesh = new THREE.Mesh(geometry, this.materials[1]);
    mesh.rotation.y = angle;
    mesh.position.set(x, y, z);
    this.add(mesh);
  }

  addCorner(x, y, z){
    'use strict';
    var geometry1 = new THREE.CylinderGeometry(this.cornerRadius, this.cornerRadius, 4, 20);
    var mesh = new THREE.Mesh(geometry1, this.materials[1]);
    this.add(mesh);
    mesh.position.set(x, y, z);
  }
  changeIlumination(){
    if(this.phong){
      this.children[0].material = this.materials[2];
      for(var i = 1; i< this.children.length; i++){
        this.children[i].material = this.materials[3];
      }
    }
    else{
      this.children[0].material = this.materials[0];
      for(var i = 1; i< this.children.length; i++)
        this.children[i].material = this.materials[1];
    }
    this.phong = !this.phong;
  }

  
}
