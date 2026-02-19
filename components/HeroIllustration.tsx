'use client';

import { motion } from 'motion/react';

export function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto flex items-center justify-center">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        <defs>
          <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e6f2f1" />
            <stop offset="100%" stopColor="#ffe4e6" />
          </linearGradient>
          <linearGradient id="teal-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f4a47" />
            <stop offset="100%" stopColor="#135c58" />
          </linearGradient>
          <filter id="blur-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="24" />
          </filter>
        </defs>

        {/* Soft background aura */}
        <motion.circle 
          cx="250" cy="250" r="180" 
          fill="url(#bg-grad)" 
          filter="url(#blur-filter)" 
          opacity="0.8"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Abstract "Holding Space" element - two enclosing shapes */}
        <motion.path 
          d="M 120 250 C 120 150, 200 100, 250 100 C 200 150, 180 200, 180 250 C 180 300, 200 350, 250 400 C 200 400, 120 350, 120 250 Z" 
          fill="#be185d" 
          opacity="0.15"
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path 
          d="M 380 250 C 380 150, 300 100, 250 100 C 300 150, 320 200, 320 250 C 320 300, 300 350, 250 400 C 300 400, 380 350, 380 250 Z" 
          fill="#135c58" 
          opacity="0.15"
          animate={{ x: [5, -5, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Central Growth / Mind Motif */}
        <g transform="translate(250, 250)">
          {/* Mind / Radiance circles */}
          <motion.circle 
            cx="0" cy="-30" r="90" 
            stroke="#be185d" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.4"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="0" cy="-30" r="130" 
            stroke="#135c58" strokeWidth="1" strokeDasharray="2 8" opacity="0.3"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Abstract Head/Vase shape */}
          <path d="M -65 -30 C -65 -100, 65 -100, 65 -30 C 65 30, 25 70, 25 130 L -25 130 C -25 70, -65 30, -65 -30 Z" fill="url(#teal-grad)" opacity="0.95" />
          
          {/* Inner Growth (Leaves) */}
          <motion.path 
            d="M 0 110 C -45 60, -45 -10, 0 -30 C 0 -10, -20 40, 0 110 Z" 
            fill="#e6f2f1" opacity="0.9"
            style={{ transformOrigin: "0px 110px" }}
            animate={{ scaleY: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path 
            d="M 0 80 C 35 40, 35 -10, 0 -20 C 0 0, 15 30, 0 80 Z" 
            fill="#ffe4e6" opacity="0.9"
            style={{ transformOrigin: "0px 80px" }}
            animate={{ scaleY: [0.95, 1.05, 0.95] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Core / Seed */}
          <motion.circle 
            cx="0" cy="-30" r="14" fill="#be185d" 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="0" cy="-30" r="5" fill="#fcfcfc" />
        </g>

        {/* Floating elements (insight, thoughts) */}
        <motion.circle cx="130" cy="140" r="8" fill="#135c58" opacity="0.6" animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle cx="390" cy="170" r="12" fill="#be185d" opacity="0.4" animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle cx="350" cy="370" r="6" fill="#135c58" opacity="0.8" animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle cx="150" cy="390" r="10" fill="#be185d" opacity="0.5" animate={{ y: [8, -8, 8] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} />
        
        <motion.path d="M 120 90 L 125 105 L 140 110 L 125 115 L 120 130 L 115 115 L 100 110 L 115 105 Z" fill="#135c58" opacity="0.4" style={{ transformOrigin: "120px 110px" }} animate={{ rotate: 180, scale: [0.8, 1.2, 0.8] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
        <motion.path d="M 380 90 L 383 99 L 392 102 L 383 105 L 380 114 L 377 105 L 368 102 L 377 99 Z" fill="#be185d" opacity="0.4" style={{ transformOrigin: "380px 102px" }} animate={{ rotate: -180, scale: [0.8, 1.2, 0.8] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} />
      </svg>
    </div>
  );
}
