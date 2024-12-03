import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './PortfolioHeader.css';

const PortfolioHeader = () => {
  const headerRef = useRef();

  useEffect(() => {
    const header = headerRef.current;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;
    renderer.domElement.style.left = 0;
    header.appendChild(renderer.domElement);

    // Create particles
    const particles = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({ color: 0x61b1e6, size: 0.05 });
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      header.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="portfolio-header" ref={headerRef}>
      <div className="content">
        <h1>
          Hello, I'm <span className="highlight">William</span>.
        </h1>
        <p>I'm a full stack web developer.</p>
        <button
          className="view-work-button"
          onClick={() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="View my work⬇"
          tabIndex="0"
        >
          View my work ⬇
        </button>
      </div>
    </div>
  );
};

export default PortfolioHeader;