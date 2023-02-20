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
      renderer.setClearColor( 0x000000, 0 );
      document.body.appendChild(renderer.domElement);
    
      let light = new THREE.DirectionalLight('#f0f0f0f0', 5);
      light.position.set(1, 1, 0)
      scene.add(light);
    
      const loader = new GLTFLoader();
      loader.load('./src/millennium_falcon/scene.gltf', (gltf) => {
        scene.add(gltf.scene);
      });
    
      camera.position.set(4, 0, 5);
    
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();
    });
    </script>