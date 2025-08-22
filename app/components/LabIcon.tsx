import { motion } from "motion/react";
import React from "react";

const UpBall1 = ({ isHovered }: { isHovered: boolean }) => (
  <motion.path
    id="up-ball-1"
    d="M3193 4855 c-88 -38 -87 -160 2 -202 29 -14 41 -14 75 -4 97 29 108 161 16 205 -41 19 -51 19 -93 1z"
    initial={{ y: 0, x: 0, opacity: 0 }}
    animate={
      isHovered
        ? {
            y: [120, 100, 80, 60, 40, 20, 0, -20, -40, -60, -80, -100],
            x: [0, -1, 2, -2, 3, -1, 2, -3, 1, 0, -1, 2],
            opacity: [0, 0.2, 0.4, 0.6, 0.8, 1, 1, 0.8, 0.6, 0.3, 0.1, 0],
            scale: [0.2, 0.4, 0.6, 0.8, 1, 1.1, 1.2, 1, 0.8, 0.5, 0.3, 0.1],
          }
        : { y: 0, x: 0, opacity: 0, transition: { duration: 0.2 } }
    }
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeOut",
      times: [0, 0.08, 0.17, 0.25, 0.33, 0.42, 0.5, 0.58, 0.67, 0.75, 0.83, 1],
      repeatDelay: 0.3,
    }}
  />
);

const UpBall2 = ({ isHovered }: { isHovered: boolean }) => (
  <motion.path
    id="up-ball-2"
    d="M2823 4640 c-68 -41 -91 -121 -53 -187 29 -52 66 -73 129 -73 42 0 56 5 85 30 101 90 44 250 -89 250 -22 0 -54 -9 -72 -20z"
    initial={{ y: 0, x: 0, opacity: 0 }}
    animate={
      isHovered
        ? {
            y: [130, 110, 90, 70, 50, 30, 10, -10, -30, -50, -70, -90],
            x: [0, 3, -2, 4, -3, 2, -4, 1, 3, -1, 2, -2],
            opacity: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1, 0.8, 0.5, 0.3, 0.1, 0],
            scale: [0.1, 0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.1, 0.9, 0.6, 0.3, 0.1],
          }
        : { y: 0, x: 0, opacity: 0, transition: { duration: 0.2 } }
    }
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "easeOut",
      delay: 1.8,
      times: [0, 0.08, 0.17, 0.25, 0.33, 0.42, 0.5, 0.58, 0.67, 0.75, 0.83, 1],
      repeatDelay: 0.6,
    }}
  />
);

const Flask = ({ isHovered }: { isHovered: boolean }) => (
  <motion.path
    id="flask"
    d="M2530 4243 c-29 -11 -50 -36 -50 -61 0 -14 25 -72 55 -128 l55 -103 0 -368 c0 -598 -1 -600 -529 -1381 -158 -235 -295 -441 -304 -457 -8 -17 -20 -59 -27 -93 -29 -161 55 -319 208 -390 l57 -27 1005 0 1005 0 56 26 c77 36 130 87 169 161 29 54 35 75 38 151 4 68 0 98 -13 135 -10 26 -164 263 -341 528 -237 354 -338 513 -382 605 -117 240 -122 270 -122 740 l0 370 55 103 c60 112 66 143 34 172 -20 18 -44 19 -488 21 -256 1 -473 -1 -481 -4z m780 -193 l-30 -59 0 -411 c0 -449 4 -487 60 -640 67 -182 129 -286 499 -833 155 -229 286 -428 291 -442 6 -15 10 -46 10 -69 0 -88 -41 -158 -118 -203 l-47 -28 -975 0 -975 0 -40 22 c-83 44 -125 114 -125 205 0 29 8 69 18 89 9 20 146 227 303 460 373 552 438 666 506 884 l27 90 4 438 3 438 -30 55 c-17 29 -31 56 -31 59 0 3 153 5 340 5 l340 0 -30 -60z"
    initial={{ scale: 1 }}
    // whileHover={{
    //   scale: 1.02,
    //   transition: { duration: 0.3 },
    // }}
    animate={
      isHovered
        ? {
            scale: [1, 1.002, 0.999, 1.001, 1],
          }
        : { scale: 1, transition: { duration: 0.2 } }
    }
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const MidBall1 = ({ isHovered }: { isHovered: boolean }) => (
  <motion.path
    id="mid-ball-1"
    d="M2993 3010 c-45 -27 -63 -87 -40 -135 35 -73 123 -92 178 -40 99 96 -20 247 -138 175z"
    initial={{ y: 0, x: 0, opacity: 0 }}
    animate={
      isHovered
        ? {
            y: [
              150, 130, 110, 90, 70, 50, 30, 10, -10, -30, -50, -70, -90, -110,
            ],
            x: [0, -2, 3, -3, 4, -2, 3, -4, 2, -1, 3, -2, 1, 0],
            opacity: [
              0, 0.1, 0.2, 0.4, 0.6, 0.8, 1, 1, 0.8, 0.6, 0.4, 0.2, 0.1, 0,
            ],
            scale: [
              0.1, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.2, 1, 0.8, 0.5, 0.3, 0.1,
            ],
          }
        : { y: 0, x: 0, opacity: 0, scale: 1, transition: { duration: 0.2 } }
    }
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeOut",
      delay: 3,
      times: [
        0, 0.07, 0.14, 0.21, 0.28, 0.35, 0.42, 0.5, 0.57, 0.64, 0.71, 0.78,
        0.85, 1,
      ],
      repeatDelay: 1.2,
    }}
  />
);

const MidBall2 = ({ isHovered }: { isHovered: boolean }) => (
  <motion.path
    id="mid-ball-2"
    d="M2824 2680 c-31 -12 -72 -66 -80 -105 -12 -68 59 -155 128 -155 46 0 96 26 118 62 23 37 26 101 7 138 -28 55 -112 85 -173 60z"
    initial={{ y: 0, x: 0, opacity: 0 }}
    animate={
      isHovered
        ? {
            y: [
              160, 140, 120, 100, 80, 60, 40, 20, 0, -20, -40, -60, -80, -100,
              -120,
            ],
            x: [0, 4, -3, 5, -4, 3, -5, 2, 4, -2, 3, -3, 2, -1, 0],
            opacity: [
              0, 0.1, 0.2, 0.3, 0.5, 0.7, 0.9, 1, 1, 0.8, 0.6, 0.4, 0.2, 0.1, 0,
            ],
            scale: [
              0.1, 0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.4, 1.2, 0.9, 0.6, 0.4,
              0.2, 0.1,
            ],
          }
        : { y: 0, x: 0, opacity: 0, scale: 1, transition: { duration: 0.2 } }
    }
    transition={{
      duration: 4.5,
      repeat: Infinity,
      ease: "easeOut",
      delay: 1.1,
      times: [
        0, 0.07, 0.13, 0.2, 0.27, 0.33, 0.4, 0.47, 0.53, 0.6, 0.67, 0.73, 0.8,
        0.87, 1,
      ],
      repeatDelay: 0.9,
    }}
  />
);

// Partículas adicionales para flujo continuo
const Bubble1 = ({ isHovered }: { isHovered: boolean }) => (
  <motion.path
    id="bubble-1"
    d="M3100 4200 c-30 -30 -30 -90 0 -120 30 -30 90 -30 120 0 30 30 30 90 0 120 -30 30 -90 30 -120 0z"
    initial={{ y: 0, x: 0, opacity: 0 }}
    animate={
      isHovered
        ? {
            y: [140, 120, 100, 80, 60, 40, 20, 0, -20, -40, -60, -80],
            x: [0, -1, 2, -2, 1, -3, 2, -1, 3, -2, 1, 0],
            opacity: [0, 0.2, 0.4, 0.6, 0.8, 1, 0.9, 0.7, 0.5, 0.3, 0.1, 0],
            scale: [0.2, 0.4, 0.6, 0.8, 1, 0.9, 0.8, 0.6, 0.4, 0.3, 0.2, 0.1],
          }
        : { y: 0, x: 0, opacity: 0, scale: 1, transition: { duration: 0.2 } }
    }
    transition={{
      duration: 3.5,
      repeat: Infinity,
      ease: "easeOut",
      delay: 0.3,
      times: [0, 0.08, 0.17, 0.25, 0.33, 0.42, 0.5, 0.58, 0.67, 0.75, 0.83, 1],
      repeatDelay: 0.5,
    }}
  />
);

const Bubble2 = ({ isHovered }: { isHovered: boolean }) => (
  <motion.path
    id="bubble-2"
    d="M2900 3800 c-25 -25 -25 -75 0 -100 25 -25 75 -25 100 0 25 25 25 75 0 100 -25 25 -75 25 -100 0z"
    initial={{ y: 0, x: 0, opacity: 0 }}
    animate={
      isHovered
        ? {
            y: [160, 140, 120, 100, 80, 60, 40, 20, 0, -20, -40, -60, -80],
            x: [0, 2, -1, 3, -2, 1, -3, 2, -1, 2, -2, 1, 0],
            opacity: [
              0, 0.1, 0.3, 0.5, 0.7, 0.9, 1, 0.8, 0.6, 0.4, 0.2, 0.1, 0,
            ],
            scale: [
              0.1, 0.3, 0.5, 0.7, 0.9, 1.1, 1, 0.8, 0.6, 0.4, 0.3, 0.2, 0.1,
            ],
          }
        : { y: 0, x: 0, opacity: 0, transition: { duration: 0.2 } }
    }
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeOut",
      delay: 1.5,
      times: [
        0, 0.08, 0.15, 0.23, 0.31, 0.38, 0.46, 0.54, 0.62, 0.69, 0.77, 0.85, 1,
      ],
      repeatDelay: 0.7,
    }}
  />
);

const Bubble3 = ({ isHovered }: { isHovered: boolean }) => (
  <motion.path
    id="bubble-3"
    d="M2700 3500 c-20 -20 -20 -60 0 -80 20 -20 60 -20 80 0 20 20 20 60 0 80 -20 20 -60 20 -80 0z"
    initial={{ y: 0, x: 0, opacity: 0 }}
    animate={
      isHovered
        ? {
            y: [
              170, 150, 130, 110, 90, 70, 50, 30, 10, -10, -30, -50, -70, -90,
            ],
            x: [0, -2, 3, -3, 2, -1, 3, -2, 1, -3, 2, -1, 2, 0],
            opacity: [
              0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1, 0.85, 0.7, 0.5, 0.3, 0.15,
              0,
            ],
            scale: [
              0.15, 0.25, 0.4, 0.55, 0.7, 0.85, 1, 0.9, 0.75, 0.6, 0.45, 0.3,
              0.2, 0.1,
            ],
          }
        : { y: 0, x: 0, opacity: 0, transition: { duration: 0.2 } }
    }
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "easeOut",
      delay: 2.5,
      times: [
        0, 0.07, 0.14, 0.21, 0.28, 0.35, 0.42, 0.5, 0.57, 0.64, 0.71, 0.78,
        0.85, 1,
      ],
      repeatDelay: 1.1,
    }}
  />
);

const Liquid = ({ isHovered }: { isHovered: boolean }) => (
  <motion.path
    id="liquid"
    d="M3357 2380 c-60 -15 -114 -47 -237 -138 -154 -114 -258 -164 -354 -170 -101 -6 -134 7 -225 93 -85 79 -106 90 -154 81 -29 -6 -53 -38 -235 -309 -189 -282 -202 -305 -202 -347 0 -57 30 -107 75 -126 29 -12 179 -14 977 -14 895 0 945 1 977 18 42 22 71 74 71 124 0 32 -24 73 -161 275 -89 131 -199 295 -247 365 -74 111 -90 129 -121 138 -55 16 -122 20 -164 10z"
    initial={{
      scaleX: 1,
      scaleY: 1,
      y: 0,
      skewX: 0,
      opacity: 0.8,
    }}
    animate={
      isHovered
        ? {
            scaleX: [1, 1.02, 0.98, 1.03, 0.97, 1.01, 0.99, 1],
            scaleY: [1, 0.98, 1.02, 0.97, 1.03, 0.99, 1.01, 1],
            y: [0, -1, 2, -1.5, 1, -0.5, 0.8, 0],
            skewX: [0, -0.5, 1, -1.2, 0.8, -0.3, 0.2, 0],
            opacity: [0.8, 0.9, 0.85, 0.95, 0.82, 0.88, 0.92, 0.8],
              fill: "var(--color-green-10)", transition: { duration: 0.5 } ,

          }
        : {
            scaleX: 1,
            scaleY: 1,
            y: 0,
            skewX: 0,
            opacity: 0.8,
            fill: "var(--color-high-contrast)", transition: { duration: 0.1 } ,

          }
    }
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: [0.4, 0.0, 0.2, 1],
      times: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1],
    }}
  />
);

export default function LabIcon({
  isHovered,
  setIsHovered,
}: {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
}) {
  return (
    <motion.div
      className="opacity-80 hover:opacity-100 transition-opacity "
      // whileHover={{ scale: 1.05 }}
      // transition={{ duration: 0.2 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 600.000000 600.000000"
        preserveAspectRatio="xMidYMid meet"
        className="text-[var(--color-high-contrast)]"
      >
        <g
          transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
          fill="currentColor"
          stroke="none"
        >
          <Flask isHovered={isHovered} />
          <Liquid isHovered={isHovered} />
          <UpBall1 isHovered={isHovered} />
          <UpBall2 isHovered={isHovered} />
          <MidBall1 isHovered={isHovered} />
          <MidBall2 isHovered={isHovered} />
          <Bubble1 isHovered={isHovered} />
          <Bubble2 isHovered={isHovered} />
          <Bubble3 isHovered={isHovered} />
        </g>
      </svg>
    </motion.div>
  );
}
