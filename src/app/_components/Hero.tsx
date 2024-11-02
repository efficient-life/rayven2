"use client";
import { useEffect, useRef } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";

interface ParticleSystemOptions {
  particleCount: number;
  color: string;
  size: number;
  speed: number;
}

class ParticleSystem {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Array<{
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
  }>;
  private options: ParticleSystemOptions;

  constructor(
    canvas: HTMLCanvasElement,
    options: Partial<ParticleSystemOptions> = {}
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.particles = [];
    this.options = {
      particleCount: 80,
      color: "#7d7d7d",
      size: 3,
      speed: 1,
      ...options,
    };
    this.init();
  }

  private init() {
    for (let i = 0; i < this.options.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * this.options.size + 1,
        speedX: (Math.random() - 0.5) * this.options.speed,
        speedY: (Math.random() - 0.5) * this.options.speed,
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > this.canvas.width)
        particle.speedX *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height)
        particle.speedY *= -1;

      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = this.options.color;
      this.ctx.fill();
    });

    requestAnimationFrame(this.animate.bind(this));
  }
}

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particleSystem = new ParticleSystem(canvas, {
      particleCount: 100,
      color: "#4a90e2",
      size: 2,
      speed: 0.5,
    });

    particleSystem.animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-black text-white">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in-up">
          テクノロジーで
          <br className="sm:hidden" />
          未来を切り拓く
        </h1>
        <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
          RAYVENは、革新的なシステム開発、戦略的なSNS運用、そして専門的なコンサルティングを通じて、企業の可能性を最大限に引き出し、より良い社会の実現に貢献します。
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-600">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            詳しく見る
            <FaArrowCircleRight className="ml-2 -mr-1 w-5 h-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
          >
            <BsFillRecordCircleFill className="mr-2 w-5 h-5" />
            動画を見る
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaAnglesDown className="w-8 h-8 text-white opacity-75" />
      </div>
    </section>
  );
};

// アニメーション用のカスタムクラス
const styles = `
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}
`;

// スタイルをヘッドに追加
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}
