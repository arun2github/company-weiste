"use client";

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

// --- Color Palette: Elegant Tech Minimalism ---
const BG_PRIMARY = '#F9F9F9'; // Very Light Gray
const TEXT_PRIMARY = '#222222'; // Rich Dark Gray
const TEXT_SECONDARY = '#555555'; // Medium-Dark Gray
const ACCENT_ELEGANT = '#004D40'; // Deep Teal
const ACCENT_HOVER = '#006A58'; // Slightly brighter teal for hover

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }, // Faster, more fluid stagger
  },
};

const textItemVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 60, damping: 15, mass: 0.7, delay }
  },
});

const lineDrawingVariants = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 5, // Increased duration for slower animation
      ease: [0.45, 0.05, 0.55, 0.95], // Kept existing ease
      delay,
      repeat: Infinity, // Loop indefinitely
      repeatType: "mirror", // No explicit cast needed if type is inferred correctly
      repeatDelay: 1 // Pause for 1s between cycles
    } as const, // Added as const here to satisfy prefer-as-const for the transition object
  },
});

const Hero = () => {
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0); // Normalized mouse X in SVG container (-0.5 to 0.5)
  const mouseY = useMotionValue(0); // Normalized mouse Y in SVG container (-0.5 to 0.5)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (svgContainerRef.current) {
        const { clientX, clientY } = event;
        const { left, top, width, height } = svgContainerRef.current.getBoundingClientRect();
        const x = (clientX - left - width / 2) / width; 
        const y = (clientY - top - height / 2) / height;
        mouseX.set(x);
        mouseY.set(y);
      }
    };
    // Attach to window for broader mouse tracking, or svgContainerRef.current for localized effect
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform mouse position to influence SVG curve points (subtle effect)
  // Q <control X> <control Y>, <end X> <end Y>
  // T <end X> <end Y> (smooth quadratic, control point is reflection of previous)
  const qControlX1 = useTransform(mouseX, [-0.5, 0.5], [70, 90]);
  const qControlY1 = useTransform(mouseY, [-0.5, 0.5], [10, 30]);
  const tEndX1 = useTransform(mouseX, [-0.5, 0.5], [270, 290]);
  const tEndY1 = useTransform(mouseY, [-0.5, 0.5], [10, 30]);

  const qControlX2 = useTransform(mouseX, [-0.5, 0.5], [110, 130]);
  const qControlY2 = useTransform(mouseY, [-0.5, 0.5], [190, 170]);
  const tEndX2 = useTransform(mouseX, [-0.5, 0.5], [270, 290]);
  const tEndY2 = useTransform(mouseY, [-0.5, 0.5], [190, 170]);

  // Path for the first line, dynamically constructed
  const dynamicPathD1 = useTransform(
    [qControlX1, qControlY1, tEndX1, tEndY1],
    ([qCX1, qCY1, tEX1, tEY1]) => `M 20 180 Q ${qCX1} ${qCY1}, 150 100 T ${tEX1} ${tEY1}`
  );
  // Path for the second line, dynamically constructed
  const dynamicPathD2 = useTransform(
    [qControlX2, qControlY2, tEndX2, tEndY2],
    ([qCX2, qCY2, tEX2, tEY2]) => `M 20 20 Q ${qCX2} ${qCY2}, 200 100 T ${tEX2} ${tEY2}`
  );

  return (
    <motion.section
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden isolate"
      style={{ backgroundColor: BG_PRIMARY }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Optional: Extremely Subtle Background Texture */}
      {/* <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'url("/noise.png")' }} /> */}

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Left/Top: Text Content (Takes more space) */}
          <motion.div 
            className="md:col-span-7 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-tight md:leading-snug"
              style={{ color: TEXT_PRIMARY }}
              variants={textItemVariants(0.1)} // Pass delay
            >
              Crafting Digital Excellence.
              <br />
              <motion.span 
                style={{ fontWeight: '600' }} 
                className="relative group"
              >
                <span className="relative z-10" style={{color: ACCENT_ELEGANT}}>Pixel by Pixel.</span>
                <motion.span 
                  className="absolute left-0 -bottom-1 w-0 h-0.5 z-0"
                  style={{backgroundColor: ACCENT_HOVER}}
                  initial={{width: "0%"}}
                  whileHover={{width: "100%"}}
                  transition={{duration: 0.3, ease: "easeOut"}}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl max-w-xl lg:max-w-2xl mx-auto md:mx-0 mt-8 mb-12 font-normal"
              style={{ color: TEXT_SECONDARY, lineHeight: '1.8' }} // Increased line height for readability
              variants={textItemVariants(0.25)} // Pass delay
            >
              We meticulously design and engineer intuitive web and mobile experiences that elevate your brand and engage your audience.
            </motion.p>

            <motion.div 
              variants={textItemVariants(0.4)} // Pass delay
              className="pt-4"
            >
              <Link href="#contact" passHref>
                <motion.button
                  className="inline-flex items-center px-8 py-3.5 rounded-lg text-lg font-medium transition-all duration-300 ease-out group focus:outline-none"
                  style={{
                    border: `2px solid ${ACCENT_ELEGANT}`,
                    color: ACCENT_ELEGANT,
                  }}
                  whileHover={{
                    backgroundColor: ACCENT_ELEGANT,
                    color: BG_PRIMARY,
                    scale: 1.03,
                    borderColor: ACCENT_HOVER // Ensure border matches on hover if needed
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let&apos;s Work Together
                  <motion.span 
                    className="ml-2 transform transition-transform duration-300"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }} // Matched with group-hover logic for arrow
                    // Group hover will handle this if using Tailwind group utilities
                  >&rarr;</motion.span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right/Bottom: Abstract Animated Line Art */}
          <motion.div 
            ref={svgContainerRef} // Ref for mouse position calculation
            className="md:col-span-5 flex items-center justify-center mt-16 md:mt-0 h-72 md:h-auto relative"
            variants={textItemVariants(0.3)} // Fade in the container
          >
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 300 200" 
              preserveAspectRatio="xMidYMid meet"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-visible"
            >
              <motion.path
                d={dynamicPathD1}
                fill="transparent"
                stroke={ACCENT_ELEGANT}
                strokeWidth="2.5"
                strokeLinecap="round"
                variants={lineDrawingVariants(0.5)} // Pass delay
              />
              <motion.path
                d={dynamicPathD2}
                fill="transparent"
                stroke={ACCENT_ELEGANT}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="5 5" // Adjusted dash array
                variants={lineDrawingVariants(0.7)} // Pass delay, slightly later
                style={{opacity: 0.7}}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero; 