/* eslint-disable @next/next/no-sync-scripts */
"use client";
import { useEffect } from "react";
import Script from "next/script";
import { FaAnglesDown, FaCircleExclamation } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { BsFillRecordCircleFill } from "react-icons/bs";

export const Hero = () => {
  useEffect(() => {
    // particles.jsが読み込まれた後でのみparticlesJSを呼び出す
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS("particles-js", particleSettings);
    }
  }, []);

  return (
    <section className="light:bg-white/30 h-[80vh] grid justify-center items-center min-h-[650px]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div
          id="particles-js"
          className="fixed top-0 z-40"
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            zIndex: -1,
          }}
        ></div>

        {/* CDNスクリプトをnext/scriptで読み込み */}
        <Script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window !== "undefined" && window.particlesJS) {
              window.particlesJS("particles-js", particleSettings);
            }
          }}
        />

        {/* 以下はボタンやリンクなどのUI */}
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium">AI導入支援の実施</span>
          <FaCircleExclamation className="ml-2 w-5 h-5" />
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          テクノロジーで未来を切り拓く
        </h1>
        <p className="mb-8 text-base md:text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          RAYVENは、革新的なシステム開発、戦略的なSNS運用、そして専門的なコンサルティングを通じて、企業のの可能性を最大限に引き出し、より良い社会の実現に貢献します
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <FaArrowCircleRight className="w-5 h-5 ml-2 -mr-1" />
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <BsFillRecordCircleFill className="w-5 h-5 mr-2" />
            Watch video
          </a>
        </div>
        <div className="mt-10 justify-center text-center flex items-center text-gray-400 hover:translate-y-4 duration-500">
          <span className="text-xl font-semibold uppercase">SCROLL</span>
          <FaAnglesDown className="size-7 ml-2" />
        </div>
      </div>
    </section>
  );
};

const particleSettings = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#7d7d7d",
    },
    shape: {
      type: "star",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#7d7d7d",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
