<script>
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
    
    onMount(() => {
      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      let renderer = new THREE.WebGLRenderer();
      const controls = new OrbitControls( camera, renderer.domElement );
    
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
    
      let light = new THREE.AmbientLight(0xffffff, 1);
      scene.add(light);
    
      const loader = new GLTFLoader();
      loader.load('./src/routes/test/millennium_falcon/scene.gltf', (gltf) => {
        scene.add(gltf.scene);
      });
    
      camera.position.z = 7;
    
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();
    });
    </script>