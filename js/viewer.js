import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

import {OrbitControls}
from "https://unpkg.com/three@0.165.0/examples/jsm/controls/OrbitControls.js";

import {GLTFLoader}
from "https://unpkg.com/three@0.165.0/examples/jsm/loaders/GLTFLoader.js";

const scene=new THREE.Scene();

scene.background=new THREE.Color(0x090909);

const camera=new THREE.PerspectiveCamera(
60,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.set(3,2,6);

const renderer=new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

document.getElementById("viewer")
.appendChild(renderer.domElement);

const controls=new OrbitControls(
camera,
renderer.domElement
);

controls.enableDamping=true;

const light1=new THREE.DirectionalLight(0xffffff,3);

light1.position.set(3,5,2);

scene.add(light1);

scene.add(new THREE.AmbientLight(0xffffff,2));

const loader=new GLTFLoader();

const params=new URLSearchParams(location.search);

const model=params.get("model");

document.getElementById("modelName").textContent=model.toUpperCase();

loader.load(

"models/"+model+".glb",

gltf=>{

scene.add(gltf.scene);

},

undefined,

err=>{

console.log(err);

}

);

function animate(){

requestAnimationFrame(animate);

controls.update();

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});