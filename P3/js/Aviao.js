class Aviao extends THREE.Object3D{
  constructor(){
    super();

    this.spotlights_group = new THREE.Group();

    this.x_pos_light = 60;
    this.z_pos_light = 60;
    this.y_pos_light = 60;

    this.materials = [];

    this.setMaterials();
    this.addFuselagem();
    this.addVerticalStabilizer();
    this.addHorizontalStabilizer();
    this.addWings();
    this.addCockpit();

    this.position.y = 8;

    this.lambertM = new THREE.MeshLambertMaterial({color: 0xf78b20, wireframe: false});
    this.phongM = new THREE.MeshPhongMaterial({color: 0xf78b20, wireframe: false});
    this.basicM = new THREE.MeshBasicMaterial({color: 0xf78b20, wireframe: false});

  }

  setMaterials(){
    this.materials.push(new THREE.MeshPhongMaterial({color: 0xff00ff, wireframe: true}));
    this.materials.push(new THREE.MeshPhongMaterial({color: 0xf78b20, wireframe: true}));
    this.materials.push(new THREE.MeshPhongMaterial({color: 0x10c6ef, wireframe: true}));
  }


  addFuselagem(){
      'use strict';
    var geom = new THREE.Geometry();

    geom.vertices.push(new THREE.Vector3(8.0,  2.0, 18.0));       //0
    geom.vertices.push(new THREE.Vector3(8.0,  -2.0, 18.0));      //1
    geom.vertices.push(new THREE.Vector3(8.0,  -2.0, -44.0));     //2
    geom.vertices.push(new THREE.Vector3(8.0,  2.0, -44.0));      //3
    geom.vertices.push(new THREE.Vector3(-8.0,  2.0, 18.0));      //4
    geom.vertices.push(new THREE.Vector3(-8.0,  -2.0, 18.0));     //5
    geom.vertices.push(new THREE.Vector3(-8.0,  -2.0, -44.0));    //6
    geom.vertices.push(new THREE.Vector3(-8.0,  2.0, -44.0));     //7
    geom.vertices.push(new THREE.Vector3(6.0,  -6.0,  18.0));     //8
    geom.vertices.push(new THREE.Vector3(6.0,  -6.0, -44.0));     //9
    geom.vertices.push(new THREE.Vector3(2.0,  -8.0,  18.0));     //10
    geom.vertices.push(new THREE.Vector3(2.0,  -8.0, -44.0));     //11
    geom.vertices.push(new THREE.Vector3(-6.0,  -6.0,  18.0));    //12
    geom.vertices.push(new THREE.Vector3(-6.0,  -6.0, -44.0));    //13
    geom.vertices.push(new THREE.Vector3(-2.0,  -8.0,  18.0));    //14
    geom.vertices.push(new THREE.Vector3(-2.0,  -8.0, -44.0));    //15
    geom.vertices.push(new THREE.Vector3(6.0,  6.0,  12.0));      //16
    geom.vertices.push(new THREE.Vector3(8.0,  2.0,  12.0));      //17
    geom.vertices.push(new THREE.Vector3(8.0,  2.0, -44.0));      //18
    geom.vertices.push(new THREE.Vector3(6.0,  6.0, -44.0));      //19
    geom.vertices.push(new THREE.Vector3(2.0,  8.0,  12.0));      //20
    geom.vertices.push(new THREE.Vector3(2.0,  8.0, -44.0));      //21
    geom.vertices.push(new THREE.Vector3(-6.0,  6.0,  12.0));     //22
    geom.vertices.push(new THREE.Vector3(-8.0,  2.0,  12.0));     //23
    geom.vertices.push(new THREE.Vector3(-8.0,  2.0, -44.0));     //24
    geom.vertices.push(new THREE.Vector3(-6.0,  6.0, -44.0));     //25
    geom.vertices.push(new THREE.Vector3(-2.0,  8.0,  12.0));     //26
    geom.vertices.push(new THREE.Vector3(-2.0,  8.0, -44.0));     //27
    geom.vertices.push(new THREE.Vector3(-2.0,  7.0, -64.0));     //28
    geom.vertices.push(new THREE.Vector3(2.0,  7.0, -64.0));      //29
    geom.vertices.push(new THREE.Vector3(-1.0,  5.0, -64.0));     //30
    geom.vertices.push(new THREE.Vector3(1.0,  5.0, -64.0));      //31
    geom.vertices.push(new THREE.Vector3(-2.0, 2.0, 32.0));       //32
    geom.vertices.push(new THREE.Vector3(-2.0, 2.0, 18.0));       //33
    geom.vertices.push(new THREE.Vector3(-2.0,  2.0, 24.0));      //34
    geom.vertices.push(new THREE.Vector3(-8.0,  2.0,  15.0));     //35
    geom.vertices.push(new THREE.Vector3(2.0,  2.0, 24.0));       //36
    geom.vertices.push(new THREE.Vector3(8.0,  2.0,  15.0));      //37
    geom.vertices.push(new THREE.Vector3(2.0, 2.0, 32.0));        //38
    geom.vertices.push(new THREE.Vector3(2.0, -2.0, 32.0));       //39
    geom.vertices.push(new THREE.Vector3(-2.0, -2.0, 32.0));      //40
    geom.vertices.push(new THREE.Vector3(-2.0,  1.0,  32.0));     //41
    geom.vertices.push(new THREE.Vector3(-1.0,  1.0,  34.0));     //42
    geom.vertices.push(new THREE.Vector3(-1.0,  -1.0,  34.0));    //43
    geom.vertices.push(new THREE.Vector3(-2.0,  -1.0,  34.0));    //44
    geom.vertices.push(new THREE.Vector3(-1.0,  -2.0,  32.0));    //45
    geom.vertices.push(new THREE.Vector3(1.0,  -2.0,  32.0));     //46
    geom.vertices.push(new THREE.Vector3(1.0,  -1.0,  34.0));     //47
    geom.vertices.push(new THREE.Vector3(-2.0,  -1.0,  32.0));    //48
    geom.vertices.push(new THREE.Vector3(2.0,  1.0,  32.0));      //49
    geom.vertices.push(new THREE.Vector3(1.0,  1.0,  34.0));      //50
    geom.vertices.push(new THREE.Vector3(2.0,  -1.0,  32.0));     //51
    geom.vertices.push(new THREE.Vector3(-1.0,  1.0,  34.0));     //52
    geom.vertices.push(new THREE.Vector3(-1.0, 2.0, 32.0));       //53
    geom.vertices.push(new THREE.Vector3(-1.0, -1.0, 34.0));      //54
    geom.vertices.push(new THREE.Vector3(1.0, -1.0, 34.0));       //55

    geom.faces.push(new THREE.Face3(1, 2, 0));
    geom.faces.push(new THREE.Face3(3, 0, 2));
    geom.faces.push(new THREE.Face3(6, 5, 4));
    geom.faces.push(new THREE.Face3(7, 6, 4));
    geom.faces.push(new THREE.Face3(2, 1, 8));
    geom.faces.push(new THREE.Face3(8, 9, 2));
    geom.faces.push(new THREE.Face3(9, 8, 10));
    geom.faces.push(new THREE.Face3(10, 11, 9));
    geom.faces.push(new THREE.Face3(12, 5, 6));
    geom.faces.push(new THREE.Face3(6, 13, 12));
    geom.faces.push(new THREE.Face3(12, 13, 14));
    geom.faces.push(new THREE.Face3(15, 14, 13));
    geom.faces.push(new THREE.Face3(10, 14, 15));
    geom.faces.push(new THREE.Face3(15, 11, 10));
    geom.faces.push(new THREE.Face3(16, 17, 18));
    geom.faces.push(new THREE.Face3(18, 19, 16));
    geom.faces.push(new THREE.Face3(21, 20, 16));
    geom.faces.push(new THREE.Face3(16, 19, 21));
    geom.faces.push(new THREE.Face3(24, 23, 22));
    geom.faces.push(new THREE.Face3(22, 25, 24));
    geom.faces.push(new THREE.Face3(22, 26, 27));
    geom.faces.push(new THREE.Face3(27, 25, 22));
    geom.faces.push(new THREE.Face3(26, 27, 22));
    geom.faces.push(new THREE.Face3(27, 20, 21));
    geom.faces.push(new THREE.Face3(20, 27, 26));
    geom.faces.push(new THREE.Face3(21, 29, 27));
    geom.faces.push(new THREE.Face3(28, 27, 29));
    geom.faces.push(new THREE.Face3(7, 25, 28));
    geom.faces.push(new THREE.Face3(25, 27, 28));
    geom.faces.push(new THREE.Face3(28, 30, 7));
    geom.faces.push(new THREE.Face3(29, 19, 3));
    geom.faces.push(new THREE.Face3(19, 29, 21));
    geom.faces.push(new THREE.Face3(3, 31, 29));
    geom.faces.push(new THREE.Face3(2, 9, 31));
    geom.faces.push(new THREE.Face3(9, 11, 31));
    geom.faces.push(new THREE.Face3(30, 13, 6));
    geom.faces.push(new THREE.Face3(30, 15, 13));
    geom.faces.push(new THREE.Face3(11, 15, 30));
    geom.faces.push(new THREE.Face3(30, 31, 11));
    geom.faces.push(new THREE.Face3(3, 2, 31));
    geom.faces.push(new THREE.Face3(30, 6, 7));
    geom.faces.push(new THREE.Face3(31, 30, 28)); //42
    geom.faces.push(new THREE.Face3(31, 28, 29)); //43



    //NoseAnterior
    geom.faces.push(new THREE.Face3(4, 32, 34));
    geom.faces.push(new THREE.Face3(4, 34, 35));
    geom.faces.push(new THREE.Face3(0, 36, 38));
    geom.faces.push(new THREE.Face3(0, 37, 36));
    geom.faces.push(new THREE.Face3(34, 38, 36));
    geom.faces.push(new THREE.Face3(34, 32, 38));
    geom.faces.push(new THREE.Face3(1, 39, 8));
    geom.faces.push(new THREE.Face3(10, 8, 39));
    geom.faces.push(new THREE.Face3(5, 12, 40));
    geom.faces.push(new THREE.Face3(12, 14, 40));
    geom.faces.push(new THREE.Face3(40, 14, 10));
    geom.faces.push(new THREE.Face3(10, 39, 40));
    geom.faces.push(new THREE.Face3(4, 5, 40));
    geom.faces.push(new THREE.Face3(4, 40, 32));
    geom.faces.push(new THREE.Face3(1, 0, 39));
    geom.faces.push(new THREE.Face3(39, 0, 38));
    //NosePosterior
    geom.faces.push(new THREE.Face3(32, 41, 42));
    geom.faces.push(new THREE.Face3(41, 43, 42));
    geom.faces.push(new THREE.Face3(43, 41, 48));
    geom.faces.push(new THREE.Face3(48, 40, 43));
    geom.faces.push(new THREE.Face3(43, 40, 46));
    geom.faces.push(new THREE.Face3(43, 46, 47));
    geom.faces.push(new THREE.Face3(39, 47, 46));
    geom.faces.push(new THREE.Face3(38, 50, 49));
    geom.faces.push(new THREE.Face3(49, 50, 47));
    geom.faces.push(new THREE.Face3(47, 39, 49));
    geom.faces.push(new THREE.Face3(52, 38, 53));
    geom.faces.push(new THREE.Face3(50, 38, 52));
    geom.faces.push(new THREE.Face3(32, 52, 53));
    geom.faces.push(new THREE.Face3(50, 52, 54));
    geom.faces.push(new THREE.Face3(54, 55, 50));
    geom.faces.push(new THREE.Face3(50, 52, 54));

    geom.computeVertexNormals();
    var mesh = new THREE.Mesh(geom, this.materials[0]);
    this.add(mesh);
  }


  addVerticalStabilizer(){
      'use strict';
      var geom = new THREE.Geometry();

      geom.vertices.push(new THREE.Vector3(-0.5, 7.5, -46.0));    //0
      geom.vertices.push(new THREE.Vector3(-0.5, 7.0, -60.0));    //1
      geom.vertices.push(new THREE.Vector3(-0.5, 26.0, -60.0));   //2
      geom.vertices.push(new THREE.Vector3(-0.5, 26.0, -61.0));   //3
      geom.vertices.push(new THREE.Vector3(0.5,  7.5, -46.0));    //4
      geom.vertices.push(new THREE.Vector3(0.5,  7.0, -60.0));    //5
      geom.vertices.push(new THREE.Vector3(0.5,  26.0, -60.0));   //6
      geom.vertices.push(new THREE.Vector3(0.5,  26.0, -61.0));   //7

      geom.faces.push(new THREE.Face3(2, 1, 0));
      geom.faces.push(new THREE.Face3(3, 1, 2));
      geom.faces.push(new THREE.Face3(4, 5, 6));
      geom.faces.push(new THREE.Face3(6, 5, 7));
      geom.faces.push(new THREE.Face3(2, 0, 4));
      geom.faces.push(new THREE.Face3(4, 6, 2));
      geom.faces.push(new THREE.Face3(3, 6, 7));
      geom.faces.push(new THREE.Face3(6, 3, 2));
      geom.faces.push(new THREE.Face3(5, 1, 3));
      geom.faces.push(new THREE.Face3(3, 7, 5));

      geom.computeVertexNormals();
      var mesh = new THREE.Mesh(geom, this.materials[1]);
      this.add(mesh);
  }


  addHorizontalStabilizer(){
      'use strict';
      var geom = new THREE.Geometry();

      geom.vertices.push(new THREE.Vector3(2.0,  5.0,  -49.0));     //0
      geom.vertices.push(new THREE.Vector3(2.0,  5.0,  -59.0));     //1
      geom.vertices.push(new THREE.Vector3(20.0,  5.0,  -61.0));    //2
      geom.vertices.push(new THREE.Vector3(20.0,  5.0,  -60.0));    //3
      geom.vertices.push(new THREE.Vector3(2.0,  4.5,  -49.0));     //4
      geom.vertices.push(new THREE.Vector3(2.0,  4.5,  -59.0));     //5
      geom.vertices.push(new THREE.Vector3(20.0,  4.5,  -61.0));    //6
      geom.vertices.push(new THREE.Vector3(20.0,  4.5,  -60.0));    //7
      geom.vertices.push(new THREE.Vector3(-2.0,  5.0,  -49.0));    //8
      geom.vertices.push(new THREE.Vector3(-2.0,  5.0,  -59.0));    //9
      geom.vertices.push(new THREE.Vector3(-20.0,  5.0,  -61.0));   //10
      geom.vertices.push(new THREE.Vector3(-20.0,  5.0,  -60.0));   //11
      geom.vertices.push(new THREE.Vector3(-2.0,  4.5,  -49.0));    //12
      geom.vertices.push(new THREE.Vector3(-2.0,  4.5,  -59.0));    //13
      geom.vertices.push(new THREE.Vector3(-20.0,  4.5,  -61.0));   //14
      geom.vertices.push(new THREE.Vector3(-20.0,  4.5,  -60.0));   //15

      //left
      geom.faces.push(new THREE.Face3(2, 1, 0));
      geom.faces.push(new THREE.Face3(3, 2, 0));
      geom.faces.push(new THREE.Face3(5, 6, 4));
      geom.faces.push(new THREE.Face3(4, 6, 7));
      geom.faces.push(new THREE.Face3(0, 4, 3));
      geom.faces.push(new THREE.Face3(3, 4, 7));
      geom.faces.push(new THREE.Face3(1, 2, 5));
      geom.faces.push(new THREE.Face3(2, 6, 5));
      geom.faces.push(new THREE.Face3(2, 7, 6));
      geom.faces.push(new THREE.Face3(3, 7, 2));
      //right
      geom.faces.push(new THREE.Face3(9, 10, 8));
      geom.faces.push(new THREE.Face3(10, 11, 8));
      geom.faces.push(new THREE.Face3(13, 12, 14));
      geom.faces.push(new THREE.Face3(12, 15, 14));
      geom.faces.push(new THREE.Face3(8, 11, 12));
      geom.faces.push(new THREE.Face3(11, 15, 12));
      geom.faces.push(new THREE.Face3(9, 13, 10));
      geom.faces.push(new THREE.Face3(10, 13, 14));
      geom.faces.push(new THREE.Face3(10, 14, 15));
      geom.faces.push(new THREE.Face3(11, 10, 15));

      geom.computeVertexNormals();
      var mesh = new THREE.Mesh(geom, this.materials[1]);
      this.add(mesh);
  }


  addWings(){
      'use strict';
      var geom = new THREE.Geometry();

      geom.vertices.push(new THREE.Vector3(8.0,  0.5, -4.0));     //0
      geom.vertices.push(new THREE.Vector3(8.0,  0.5, -16.0));    //1
      geom.vertices.push(new THREE.Vector3(48.0, 1.0, -22.0));    //2
      geom.vertices.push(new THREE.Vector3(48.0, 0.0, -20.0));    //3
      geom.vertices.push(new THREE.Vector3(8.0,  -1.5, -4.0));    //4
      geom.vertices.push(new THREE.Vector3(8.0,  -1.5, -16.0));   //5
      geom.vertices.push(new THREE.Vector3(48.0, 0, -22.0));      //6
      geom.vertices.push(new THREE.Vector3(48.0, 0, -20.0));      //7
      geom.vertices.push(new THREE.Vector3(-8.0,  0.5, -4.0));    //8
      geom.vertices.push(new THREE.Vector3(-8.0,  0.5, -16.0));   //9
      geom.vertices.push(new THREE.Vector3(-48.0, 1.0, -22.0));   //10
      geom.vertices.push(new THREE.Vector3(-48.0, 1.0, -20.0));   //11
      geom.vertices.push(new THREE.Vector3(-8.0,  -1.5, -4.0));   //12
      geom.vertices.push(new THREE.Vector3(-8.0,  -1.5, -16.0));  //13
      geom.vertices.push(new THREE.Vector3(-48.0, 0.0, -22.0));   //14
      geom.vertices.push(new THREE.Vector3(-48.0, 0.0, -20.0));   //15

      //left
      geom.faces.push(new THREE.Face3(2, 1, 0));
      geom.faces.push(new THREE.Face3(3, 2, 0));
      geom.faces.push(new THREE.Face3(5, 6, 4));
      geom.faces.push(new THREE.Face3(4, 6, 7));
      geom.faces.push(new THREE.Face3(0, 4, 3));
      geom.faces.push(new THREE.Face3(3, 4, 7));
      geom.faces.push(new THREE.Face3(1, 2, 5));
      geom.faces.push(new THREE.Face3(2, 6, 5));
      geom.faces.push(new THREE.Face3(2, 7, 6));
      geom.faces.push(new THREE.Face3(3, 7, 2));
      //right
      geom.faces.push(new THREE.Face3(9, 10, 8));
      geom.faces.push(new THREE.Face3(10, 11, 8));
      geom.faces.push(new THREE.Face3(13, 12, 14));
      geom.faces.push(new THREE.Face3(12, 15, 14));
      geom.faces.push(new THREE.Face3(8, 11, 12));
      geom.faces.push(new THREE.Face3(11, 15, 12));
      geom.faces.push(new THREE.Face3(9, 13, 10));
      geom.faces.push(new THREE.Face3(10, 13, 14));
      geom.faces.push(new THREE.Face3(10, 14, 15));
      geom.faces.push(new THREE.Face3(11, 10, 15));

      geom.computeVertexNormals();
      var mesh = new THREE.Mesh(geom, this.materials[1]);
      this.add(mesh);
  }


  addCockpit(){
      'use strict';
      var geom = new THREE.Geometry();

      geom.vertices.push(new THREE.Vector3(6.0,  6.0,  15.0));     //0
      geom.vertices.push(new THREE.Vector3(8.0,  2.0,  15.0));     //1
      geom.vertices.push(new THREE.Vector3(8.0,  2.0,  12.0));     //2
      geom.vertices.push(new THREE.Vector3(6.0,  6.0,  12.0));     //3
      geom.vertices.push(new THREE.Vector3(2.0,  8.0,  15.0));     //4
      geom.vertices.push(new THREE.Vector3(2.0,  8.0,  12.0));     //5
      geom.vertices.push(new THREE.Vector3(-6.0,  6.0,  15.0));    //6
      geom.vertices.push(new THREE.Vector3(-8.0,  2.0,  15.0));    //7
      geom.vertices.push(new THREE.Vector3(-8.0,  2.0,  12.0));    //8
      geom.vertices.push(new THREE.Vector3(-6.0,  6.0,  12.0));    //9
      geom.vertices.push(new THREE.Vector3(-2.0,  8.0,  15.0));    //10
      geom.vertices.push(new THREE.Vector3(-2.0,  8.0,  12.0));    //11
      geom.vertices.push(new THREE.Vector3(4.0,  6.0,  18.0));     //12
      geom.vertices.push(new THREE.Vector3(6.0,  2.0,  18.0));     //13
      geom.vertices.push(new THREE.Vector3(2.0,  6.0,  22.0));     //14
      geom.vertices.push(new THREE.Vector3(2.0,  2.0,  24.0));     //15
      geom.vertices.push(new THREE.Vector3(-4.0,  6.0,  18.0));    //16
      geom.vertices.push(new THREE.Vector3(-6.0,  2.0,  18.0));    //17
      geom.vertices.push(new THREE.Vector3(-2.0,  6.0,  22.0));    //18
      geom.vertices.push(new THREE.Vector3(-2.0,  2.0,  24.0));    //19

      geom.faces.push(new THREE.Face3(1, 2, 0));
      geom.faces.push(new THREE.Face3(2, 3, 0));
      geom.faces.push(new THREE.Face3(0, 5, 4));
      geom.faces.push(new THREE.Face3(5, 0, 3));
      geom.faces.push(new THREE.Face3(6, 8, 7));
      geom.faces.push(new THREE.Face3(8, 6, 9));
      geom.faces.push(new THREE.Face3(6, 10, 11));
      geom.faces.push(new THREE.Face3(11, 9, 6));
      geom.faces.push(new THREE.Face3(4, 11, 10));
      geom.faces.push(new THREE.Face3(4, 5, 11));
      geom.faces.push(new THREE.Face3(1, 0, 12));
      geom.faces.push(new THREE.Face3(12, 13, 1));
      geom.faces.push(new THREE.Face3(0, 4, 12));
      geom.faces.push(new THREE.Face3(12, 14, 13));
      geom.faces.push(new THREE.Face3(13, 14, 15));
      geom.faces.push(new THREE.Face3(4, 14, 12));
      geom.faces.push(new THREE.Face3(16, 6, 7));
      geom.faces.push(new THREE.Face3(16, 7, 17));
      geom.faces.push(new THREE.Face3(16, 10, 6));
      geom.faces.push(new THREE.Face3(16, 17, 18));
      geom.faces.push(new THREE.Face3(18, 17, 19));
      geom.faces.push(new THREE.Face3(18, 10, 16));
      geom.faces.push(new THREE.Face3(18, 19, 15));
      geom.faces.push(new THREE.Face3(18, 15, 14));
      geom.faces.push(new THREE.Face3(4, 10, 14));
      geom.faces.push(new THREE.Face3(10, 18, 14));

      geom.computeVertexNormals();
      var mesh = new THREE.Mesh(geom, this.materials[2]);
      this.add(mesh);
  }

  addSpotLights(){
    let spotlight1 = new Holofote(this.x_pos_light, this.y_pos_light, 0, 4, 8, Math.PI/2);
    let spotlight2 = new Holofote(0, this.y_pos_light, -this.z_pos_light, 4, 8, Math.PI);
    let spotlight3 = new Holofote(0, this.y_pos_light, this.z_pos_light, 4, 8, Math.PI*2);
    let spotlight4 = new Holofote(-this.x_pos_light, this.y_pos_light, 0, 4, 8, Math.PI/2*3);
    this.spotlights_group.add(spotlight1);
    this.spotlights_group.add(spotlight2);
    this.spotlights_group.add(spotlight3);
    this.spotlights_group.add(spotlight4);
    return this.spotlights_group;

  }

  lambert(){
    var i;
    for(i in this.children){
      var newlambert = this.lambertM.clone();
      var cor = this.children[i].material.color.clone().getHex();
      this.children[i].material = newlambert;
      this.children[i].material.color.setHex(cor);
    }
  }

  phong(){
    var i;
    for(i in this.children){
      var newphong = this.phongM.clone();
      var cor = this.children[i].material.color.clone().getHex();
      this.children[i].material = newphong;
      this.children[i].material.color.setHex(cor);
    }
  }

  basic(){
    var i;
    for(i in this.children){
      var cor = this.children[i].material.color.clone().getHex();
      this.children[i].material = this.basicM.clone();
      this.children[i].material.color.setHex(cor);
    }
  }

  changeStateSpotLight(index){
    this.spotlights_group.children[index].stateSpotLight();
  }

}
