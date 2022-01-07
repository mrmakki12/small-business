import './scene.css';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Scene = () => {

    // using useEffect to constantly rerender the scene since I cannot/don't 
    // know how to use request animation frame within react
    useEffect(() => {
        // canvas from doc
        const canvas = document.getElementById('canvas');

        // new THREE.js scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x086788);

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, .1, 100);
        scene.add(camera);
        camera.position.z = 60;


        /**
         * Lights
         */
         const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
         scene.add(ambientLight);
 
         const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
         directionalLight.position.set(2, 2, 2);
         scene.add(directionalLight);
 
         /**
          * Renderer
          */
         const renderer = new THREE.WebGLRenderer({
             canvas: canvas,
             antialias: true
         });
 
         renderer.setSize(window.innerWidth, window.innerHeight);
         renderer.physicallyCorrectLights = true;
         renderer.outputEncoding = THREE.sRGBEncoding;
         renderer.toneMapping = THREE.ACESFilmicToneMapping;

        //handle resize
        window.addEventListener('resize', () => {

            //update camera
            camera.aspect = window.innerWidth/ window.innerHeight;
            camera.updateProjectionMatrix();

            //update renderer 
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
        })

        //add laptop to scene
        // using var so that I can access it later outside
        // scope of load function
        var laptop;
        // model loader 
        const laptopLoader = new GLTFLoader();
        laptopLoader.load(
            '/models/laptop.glb',
            (gltf) => {
                laptop = gltf.scene;
                laptop.position.x = 12;
                laptop.position.y = -5;
                scene.add(laptop);
                
            }
        )

        /**
         * Animate
         */
         const clock = new THREE.Clock()

         const tick = () => {
         
             const elapsedTime = clock.getElapsedTime()
 
            // update laptop 
             if(laptop) {
                 laptop.rotation.y = elapsedTime / 2;
             }
 
             // Render
             renderer.render(scene, camera)
 
             // Call tick again on the next frame
             window.requestAnimationFrame(tick)
         }
 
         tick()

    }, []);

    return (
        <section className='scene-container'>
            <nav className='nav'>
                <li><a href='#'>Help!</a></li>
                <li><a href='#'>About!</a></li>
                <li><a href='#'>Contact!</a></li>
            </nav>
            <div className='greeting'>
                <h1>Own a Small Business and Need a Website?</h1>
            </div>
            <canvas id='canvas' />
        </section>
    )

}