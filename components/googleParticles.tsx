"use client";

import { useEffect } from "react";

const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("particleCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const particles: any[] = [];
    const maxParticles = 100;

    // Adjust canvas size, reduce height from the bottom by 50px
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 50; // Reduced height from bottom by 50px

    const mouse = {
      x: 0,
      y: 0
    };

    // Track mouse movement to spawn particles at the cursor
    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect(); // Get canvas position relative to viewport
      mouse.x = e.clientX - rect.left;  // Get x position relative to canvas
      mouse.y = e.clientY - rect.top;   // Get y position relative to canvas
    });

    const googleColors = [
      "#4285F4", // Google Blue
      "#EA4335", // Google Red
      "#FBBC05", // Google Yellow
      "#34A853"  // Google Green
    ];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 3; // Slightly bigger particles
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.color = googleColors[Math.floor(Math.random() * googleColors.length)]; // Google color
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 100;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * 2; // Reduced force for smoother interaction
        const directionY = forceDirectionY * force * 2;

        this.x += directionX;
 
        // Bounce off the top
        if (this.y - this.size < 0) {
          this.y = this.size;
          this.speedY *= -1;
        }

        // Bounce off the bottom
        if (this.y + this.size > canvas.height) {
          this.y = canvas.height - this.size;
          this.speedY *= -1;
        }

        if (this.size > 0.1) this.size -= 0.05; // Slow down size decrease

        if (ctx) {
          this.draw(ctx);
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function animateParticles() {
      if (ctx) {
        ctx.fillStyle = "#1a1a1b";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          if (particles[i].size <= 0.1) {
            particles.splice(i, 1);
            i--;
          }
        }
      }
      requestAnimationFrame(animateParticles);
    }    

    // Ensure particles start at mouse position
    function createParticles(e: MouseEvent) {
      const xPos = mouse.x;  // Using mouse coordinates relative to the canvas
      const yPos = mouse.y;  // Using mouse coordinates relative to the canvas
      particles.push(new Particle(xPos, yPos)); // Start exactly at mouse position
      if (particles.length > maxParticles) {
        particles.shift();
      }
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
