"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Particles
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const color1 = new THREE.Color(0x00d4ff);
    const color2 = new THREE.Color(0x7c3aed);
    const color3 = new THREE.Color(0x06b6d4);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const colorChoice = Math.random();
      const c = colorChoice < 0.5 ? color1 : colorChoice < 0.8 ? color2 : color3;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * 2 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: `
        attribute float size;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uTime;
        uniform vec2 uMouse;

        void main() {
          vColor = aColor;
          vec3 pos = position;
          pos.x += sin(uTime * 0.2 + pos.y * 0.05) * 1.5;
          pos.y += cos(uTime * 0.15 + pos.x * 0.05) * 1.0;
          pos.z += sin(uTime * 0.1 + pos.x * 0.03) * 0.8;

          // Mouse parallax
          pos.x += uMouse.x * 3.0;
          pos.y += uMouse.y * 2.0;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;

        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
          gl_FragColor = vec4(vColor, alpha * 0.85);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Grid lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00d4ff,
      opacity: 0.04,
      transparent: true,
    });

    const gridSize = 60;
    const gridDivisions = 15;
    const step = gridSize / gridDivisions;

    for (let i = 0; i <= gridDivisions; i++) {
      const x = -gridSize / 2 + i * step;
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, -gridSize / 2, -20),
        new THREE.Vector3(x, gridSize / 2, -20),
      ]);
      scene.add(new THREE.Line(lineGeo, lineMaterial));

      const lineGeoH = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-gridSize / 2, x, -20),
        new THREE.Vector3(gridSize / 2, x, -20),
      ]);
      scene.add(new THREE.Line(lineGeoH, lineMaterial));
    }

    // Mouse tracking
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 0.5;
      targetMouse.y = -(e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    let animFrame: number;
    const startTime = performance.now();

    const animate = () => {
      animFrame = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) / 1000;

      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      material.uniforms.uTime.value = elapsed;
      material.uniforms.uMouse.value.set(mouse.x, mouse.y);

      particles.rotation.y = elapsed * 0.02;
      particles.rotation.x = Math.sin(elapsed * 0.01) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0"
      style={{ background: "radial-gradient(ellipse at center, #050d1a 0%, #020510 100%)" }}
    />
  );
}
