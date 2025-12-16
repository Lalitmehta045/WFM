import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MinimalistHeroProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export const MinimalistHero = ({
  imageSrc,
  imageAlt,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative h-[70vh] md:h-screen w-full overflow-hidden',
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight"
          >
            Facility Management
            <span className="block text-[#ffcccc]">Excellence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto"
          >
            Transform your workspace with comprehensive facility management solutions. 
            We deliver exceptional cleaning services, maintenance, and operational support 
            tailored to your business needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "#contact"}
              className="px-6 py-3 bg-gradient-to-r from-[#800020] via-[#8B0000] to-[#660000] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base md:px-6 md:py-3 md:text-base xs:px-6 xs:py-3 xs:text-base"
            >
              Get Started
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "#services"}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-300 text-base md:px-6 md:py-3 md:text-base xs:px-6 xs:py-3 xs:text-base"
            >
              Our Services
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
