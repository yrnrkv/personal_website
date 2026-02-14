"use client";

import { useRef, useEffect, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
  opacity: number;
}

interface ParticleSystemProps {
  isActive: boolean;
}

const cosmicColors = [
  "#9b59b6", // Purple
  "#8e44ad", // Dark purple
  "#3498db", // Blue
  "#2ecc71", // Teal/green
  "#f39c12", // Gold/orange
  "#e67e22", // Warm orange
  "#1abc9c", // Turquoise
  "#e74c3c", // Red/pink
];

export const ParticleSystem = ({ isActive }: ParticleSystemProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const createParticle = useCallback((x: number, y: number, burst = false): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = burst ? 2 + Math.random() * 3 : 0.5 + Math.random() * 1.5;
    
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 2 + Math.random() * 4,
      color: cosmicColors[Math.floor(Math.random() * cosmicColors.length)],
      life: 0,
      maxLife: 100 + Math.random() * 150,
      opacity: 0.6 + Math.random() * 0.4,
    };
  }, []);

  const initParticles = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const particleCount = 50;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    particlesRef.current = particles;
  }, [createParticle]);

  useEffect(() => {
    if (!isActive) {
      particlesRef.current = [];
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Click handler - spawn burst
    const handleClick = (e: MouseEvent) => {
      const burstCount = 15;
      for (let i = 0; i < burstCount; i++) {
        particlesRef.current.push(createParticle(e.clientX, e.clientY, true));
      }
    };
    window.addEventListener("click", handleClick);

    // Animation loop
    const animate = () => {
      if (!isActive || !ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Update life
        p.life++;

        // Remove dead particles
        if (p.life > p.maxLife) {
          particles.splice(i, 1);
          // Respawn a new particle at random position
          if (particles.length < 50) {
            particles.push(
              createParticle(
                Math.random() * canvas.width,
                Math.random() * canvas.height
              )
            );
          }
          continue;
        }

        // Physics: gravity
        p.vy += 0.02;

        // Physics: wind drift
        p.vx += (Math.random() - 0.5) * 0.05;

        // Mouse interaction - attraction/repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          // Attract towards mouse
          p.vx += (dx / distance) * force * 0.2;
          p.vy += (dy / distance) * force * 0.2;
        }

        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;

        // Friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Fade out near end of life
        const lifeFraction = p.life / p.maxLife;
        const fadeOpacity = lifeFraction < 0.8 ? p.opacity : p.opacity * (1 - (lifeFraction - 0.8) / 0.2);

        // Draw particle with glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = fadeOpacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Inner glow
        ctx.shadowBlur = 5;
        ctx.fillStyle = "white";
        ctx.globalAlpha = fadeOpacity * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, createParticle, initParticles]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};
