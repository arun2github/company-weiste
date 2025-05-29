'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

// Company name options:
// 1. NexaTech Solutions
// 2. InnovateX
// 3. QuantumLeap Digital
// 4. SynergyStack
// 5. ByteForge
// 6. PrismTech
// 7. ApexDigital
// 8. FusionLabs
// 9. ZenithTech
// 10. NovaCore

export const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  // Using "NexaTech" as the default company name
  return (
    <motion.div
      className={`relative flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Mark */}
      <div className={`relative ${sizes[size]}`}>
        {/* Outer hexagon */}
        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl transform rotate-45" />
        </motion.div>
        
        {/* Inner hexagon */}
        <div className="absolute inset-1 bg-white rounded-lg transform rotate-45">
          <div className="absolute inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg opacity-20" />
        </div>
        
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
        </div>
      </div>

      {/* Company Name */}
      <div className="ml-3 flex items-center">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Nexa
        </span>
        <span className="text-xl font-bold text-gray-900">Tech</span>
      </div>
    </motion.div>
  );
};

// Alternative logo designs for different company names
export const LogoAlternatives = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-8">
      {/* InnovateX */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl transform rotate-45">
          <div className="transform -rotate-45">X</div>
        </div>
        <span className="font-bold text-gray-800">InnovateX</span>
      </div>

      {/* ByteForge */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center overflow-hidden">
          <div className="w-8 h-8 border-4 border-white rounded-sm transform rotate-45" />
        </div>
        <span className="font-bold text-gray-800">ByteForge</span>
      </div>

      {/* PrismTech */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 transform rotate-45 rounded-lg" />
          <div className="absolute inset-2 bg-white transform rotate-45 rounded-md" />
          <div className="absolute inset-4 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 transform rotate-45 rounded-sm opacity-50" />
        </div>
        <span className="font-bold text-gray-800">PrismTech</span>
      </div>

      {/* ZenithTech */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          <div className="absolute inset-2 bg-white rounded-full" />
          <div className="absolute inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-75" />
          <div className="absolute inset-6 bg-white rounded-full" />
        </div>
        <span className="font-bold text-gray-800">ZenithTech</span>
      </div>

      {/* NovaCore */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-16 h-16 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg transform rotate-45"
            animate={{ rotate: [45, 225, 45] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-2 bg-white rounded-md transform rotate-45" />
          <div className="absolute inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-sm transform rotate-45" />
        </div>
        <span className="font-bold text-gray-800">NovaCore</span>
      </div>
    </div>
  );
};

export default Logo; 