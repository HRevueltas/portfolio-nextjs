'use client';

import { motion, Variants } from "motion/react";
import { useState, useEffect } from "react";

export default function AnimatedGreeting() {
  const [animationPhase, setAnimationPhase] = useState<'waving' | 'exiting' | 'dot'>('waving');

  useEffect(() => {
    // Secuencia de animaciones
    const waveTimer = setTimeout(() => {
      setAnimationPhase('exiting');
    }, 2500); // Duración de la animación de saludo

    const exitTimer = setTimeout(() => {
      setAnimationPhase('dot');
    }, 3200); // Tiempo para que complete el saludo + fade out más largo

    return () => {
      clearTimeout(waveTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  const handVariants: Variants = {
    initial: { 
      opacity: 1, 
      scale: 1, 
      rotateZ: 0,
      translateX: 0,
      translateY: 0,
    },
    wave: {
      rotateZ: [0, 15, -15, 15, -10, 10, -5, 0],
      translateX: [0, 8, -8, 8, -6, 6, -3, 0],
      filter: 'blur(0.46px)',
      transition: {
        duration: 2.5,
        times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
        repeat: 1
      }
    },
    exit: {
      filter: 'blur(8px)',
      opacity: 0,
      scale: 0.1,
      rotateZ: 0,
      translateX: -10, // Mover hacia el centro donde aparecerá el punto
      translateY: 10, // Ajustar verticalmente hacia el centro del punto
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants: Variants = {
    initial: { 
      opacity: 0, 
      scale: 0 
    },
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 15,
        duration: 0.6
      }
    },
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  return (
    <span className="relative inline-flex items-center justify-center ml-3 w-7 h-7">
      {/* Contenedor absoluto para evitar saltos en el texto */}
      <div className="absolute inset-0 flex items-center justify-center">
        {animationPhase !== 'dot' && (
          <motion.div
            variants={handVariants}
            initial="initial"
            animate={animationPhase === 'waving' ? 'wave' : 'exit'}
            style={{ 
              originX: 0.5, 
              originY: 0.5,
              transformOrigin: "center"
            }}
            className="transform -translate-x-2 translate-y-1 "
          >
            <HandWaveSvg />
          </motion.div>
        )}

        {animationPhase === 'dot' && (
          <motion.div
            variants={dotVariants}
            initial="initial"
            animate={["enter"]}
            className=" transform -translate-x-4 translate-y-2.5"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--color-high-contrast)]" />
          </motion.div>
        )}
      </div>
    </span>
  );
}

// Componente SVG de la mano optimizado
function HandWaveSvg() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 1080 1078"
      className="text-[var(--color-high-contrast)]"
    >
      <g
        transform="translate(0.000000,1078.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path d="M6381 9525 c-52 -14 -121 -40 -153 -57 -65 -35 -188 -136 -236 -193 -35 -43 -98 -160 -135 -252 -48 -119 -138 -506 -262 -1133 -26 -129 -57 -273 -70 -320 -27 -97 -69 -286 -85 -375 -10 -58 -23 -85 -36 -72 -4 4 -15 60 -25 126 -10 66 -27 155 -38 198 -20 82 -44 211 -111 603 -61 358 -119 655 -147 755 -80 286 -258 522 -460 611 -275 122 -654 24 -857 -222 -170 -207 -221 -465 -162 -829 33 -201 99 -515 181 -850 35 -143 73 -303 85 -355 12 -52 53 -221 91 -375 114 -467 120 -495 101 -495 -5 0 -48 14 -98 30 -359 122 -682 82 -950 -118 -287 -214 -462 -551 -541 -1047 -26 -160 -25 -629 0 -805 59 -399 210 -783 433 -1098 107 -153 291 -341 446 -457 59 -44 110 -87 113 -96 3 -9 -3 -39 -14 -67 -26 -66 -51 -210 -51 -294 0 -67 20 -187 41 -243 18 -47 70 -148 91 -175 52 -68 193 -198 273 -252 281 -189 764 -353 1215 -415 184 -25 553 -24 690 1 495 91 765 304 874 691 14 50 28 112 32 138 8 56 20 67 120 101 170 57 379 195 549 362 308 302 529 657 764 1227 77 186 164 452 206 627 80 335 90 408 90 670 -1 180 -4 231 -22 310 -65 299 -227 496 -458 555 -32 8 -80 15 -105 15 -51 0 -70 13 -70 46 0 87 -98 281 -183 361 -158 149 -311 219 -532 243 -55 6 -108 13 -117 16 -30 9 -28 19 87 434 83 300 155 572 155 585 0 8 24 104 54 212 173 636 212 888 172 1095 -35 175 -91 282 -209 395 -141 135 -306 201 -522 209 -106 4 -131 1 -214 -21z m324 -165 c158 -35 254 -99 349 -232 84 -119 115 -331 82 -557 -17 -113 -90 -416 -205 -841 -133 -497 -231 -871 -257 -975 -15 -60 -31 -115 -36 -122 -5 -7 -35 -19 -66 -28 -32 -9 -98 -36 -148 -60 -406 -196 -754 -700 -866 -1256 -32 -158 -32 -396 0 -514 57 -211 176 -367 350 -458 99 -52 183 -70 317 -65 108 4 157 18 301 84 5 2 18 -21 28 -53 45 -144 130 -261 246 -338 108 -72 164 -88 300 -88 197 0 336 53 470 179 153 145 261 356 304 595 22 123 30 226 17 214 -5 -6 -43 -82 -84 -170 -123 -269 -248 -454 -352 -520 -109 -70 -300 -115 -405 -95 -155 29 -268 146 -311 320 -20 82 -16 231 9 316 63 219 195 479 338 665 139 181 346 337 508 384 68 20 210 16 281 -6 50 -17 140 -105 182 -179 43 -75 89 -217 104 -319 13 -94 7 -342 -11 -451 -66 -397 -262 -977 -454 -1346 -284 -544 -584 -872 -968 -1054 -154 -73 -462 -174 -603 -197 -27 -5 -50 -13 -50 -18 0 -16 181 -64 266 -71 44 -4 79 -11 79 -16 0 -30 -76 -234 -107 -287 -60 -100 -175 -202 -297 -261 -188 -91 -361 -125 -641 -124 -429 0 -863 105 -1270 305 -163 80 -291 172 -374 268 -94 110 -131 212 -131 361 1 96 16 230 28 242 4 4 45 -8 91 -27 219 -93 489 -137 646 -106 l40 8 -27 11 c-15 6 -52 18 -82 27 -102 30 -256 94 -405 170 -693 351 -1108 924 -1228 1695 -26 166 -26 609 0 765 37 219 79 364 152 521 161 348 452 544 806 544 102 0 157 -11 329 -67 289 -94 649 -298 829 -469 156 -148 211 -261 219 -449 5 -128 -10 -203 -61 -305 -62 -125 -174 -207 -357 -265 -284 -89 -744 60 -1085 350 -42 36 -81 65 -86 65 -12 0 -11 -82 2 -134 19 -75 189 -233 356 -330 34 -20 112 -57 174 -81 275 -111 460 -126 693 -56 l99 30 34 -27 c92 -69 244 -274 299 -403 66 -151 79 -228 76 -459 -1 -113 -3 -225 -4 -250 -4 -55 15 -63 61 -24 70 59 101 168 101 360 0 332 -103 580 -333 796 l-82 78 68 61 c170 153 251 338 251 569 -1 220 -79 402 -248 579 -127 132 -338 276 -553 377 -69 32 -113 59 -117 71 -3 10 -21 88 -40 173 -19 85 -81 346 -136 580 -56 234 -125 526 -155 650 -75 316 -154 696 -171 820 -29 218 -12 371 55 515 51 107 107 174 196 234 107 71 170 93 291 99 124 6 173 -8 271 -77 155 -110 264 -281 314 -496 55 -235 294 -1563 389 -2155 42 -267 77 -421 97 -427 18 -6 26 29 132 562 55 275 125 617 155 760 30 143 69 328 86 410 95 454 228 1006 264 1094 87 216 256 367 451 405 95 19 116 19 220 -4z m335 -2950 c154 -44 318 -153 393 -262 35 -50 87 -171 87 -201 0 -7 -37 -31 -83 -54 -320 -164 -575 -444 -772 -848 -85 -174 -119 -271 -135 -387 -7 -46 -13 -92 -16 -104 -7 -39 -205 -114 -301 -114 -233 0 -427 183 -463 436 -19 132 -8 344 24 467 100 389 308 725 571 921 81 61 228 132 322 156 100 26 262 21 373 -10z" />
      </g>
    </svg>
  );
}
