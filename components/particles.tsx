"use client";

import { useEffect } from "react";
import * as THREE from "three";

const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("particleCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    const maxParticles = 150;

    // Define box boundaries (inside dark grey area)
    const box = {
      left: 0,
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight - 50
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 50;

    const mouse = { x: 0, y: 0 };
    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    const colors = ["#ffffff", "#ff2b2b"]; // red & white

    class Particle {
      pos: THREE.Vector3;
      vel: THREE.Vector3;
      size: number;
      color: string;

      constructor(x: number, y: number) {
        this.pos = new THREE.Vector3(x, y, 0);
        this.vel = new THREE.Vector3(
          (Math.random() - 0.5) * 1,  // x speed
          (Math.random() - 0.5) * 1,  // y speed
          Math.random() * 2 + 1       // z speed (flying outward)
        );
        this.size = Math.random() * 3 + 3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.pos.add(this.vel);

        // Mouse repulsion (subtle)
        const mouseVec = new THREE.Vector3(mouse.x, mouse.y, 0);
        const distance = this.pos.clone().sub(mouseVec).length();
        if (distance < 100) {
          const force = mouseVec
            .clone()
            .sub(this.pos)
            .normalize()
            .multiplyScalar((100 - distance) / 100 * 0.5);
          this.pos.add(force);
        }

        // Bounce off box boundaries (x and y)
        if (this.pos.x - this.size < box.left) {
          this.pos.x = box.left + this.size;
          this.vel.x *= -1;
        }
        if (this.pos.x + this.size > box.right) {
          this.pos.x = box.right - this.size;
          this.vel.x *= -1;
        }
        if (this.pos.y - this.size < box.top) {
          this.pos.y = box.top + this.size;
          this.vel.y *= -1;
        }
        if (this.pos.y + this.size > box.bottom) {
          this.pos.y = box.bottom - this.size;
          this.vel.y *= -1;
        }

        // Shrink naturally
        if (this.size > 0.1) this.size -= 0.02;

        this.draw(ctx);
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Perspective scaling: farther z = smaller
        const perspective = 500 / (500 + this.pos.z); // z increases -> smaller
        const screenX = canvas.width / 2 + (this.pos.x - canvas.width / 2) * perspective;
        const screenY = canvas.height / 2 + (this.pos.y - canvas.height / 2) * perspective;
        const screenSize = this.size * perspective;

        ctx.beginPath();
        ctx.arc(screenX, screenY, screenSize, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function animateParticles() {
      ctx.fillStyle = "#1a1a1b"; // dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        // Remove particle if too small or too far in z
        if (particles[i].size <= 0.1 || particles[i].pos.z > 500) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animateParticles);
    }

    function createParticles() {
      particles.push(new Particle(mouse.x, mouse.y));
      if (particles.length > maxParticles) particles.shift();
    }

    window.addEventListener("mousemove", createParticles);
    animateParticles();

    return () => {
      window.removeEventListener("mousemove", createParticles);
    };
  }, []);

  return <canvas id="particleCanvas" className="absolute inset-0 -z-10"></canvas>;
};

export default ParticleBackground;
