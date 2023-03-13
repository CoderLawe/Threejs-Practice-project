import * as THREE from "three";

// Scene

const scene = new THREE.Scene();

// Creating the sphere

// First arg is radius, Next two are segments
const geometry = new THREE.SphereGeometry(3, 64, 64);

const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
});

// A mesh is essentially a combination of the geometry and material
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera

// Parameters: FOV, Next 2 is aspect ratio
const camera = new THREE.PerspectiveCamera(45, 800, 600);
camera.position.z = 20;
scene.add(camera);

// Renderer

const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(800, 600);

renderer.render(scene, camera);
