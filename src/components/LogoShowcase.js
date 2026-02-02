import React from 'react';
import Logo, { LogoIcon, LogoText, AnimatedLogo } from './Logo';

const LogoShowcase = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">LOKESH Sports Arena - Logo Variations</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Default Logo */}
        <div className="text-center p-6 bg-white/5 rounded-2xl">
          <h4 className="text-lg font-semibold text-white mb-4">Default Logo</h4>
          <Logo size="large" variant="default" />
        </div>
        
        {/* Fire Variant */}
        <div className="text-center p-6 bg-white/5 rounded-2xl">
          <h4 className="text-lg font-semibold text-white mb-4">Fire Variant</h4>
          <Logo size="large" variant="fire" />
        </div>
        
        {/* Ocean Variant */}
        <div className="text-center p-6 bg-white/5 rounded-2xl">
          <h4 className="text-lg font-semibold text-white mb-4">Ocean Variant</h4>
          <Logo size="large" variant="ocean" />
        </div>
        
        {/* Forest Variant */}
        <div className="text-center p-6 bg-white/5 rounded-2xl">
          <h4 className="text-lg font-semibold text-white mb-4">Forest Variant</h4>
          <Logo size="large" variant="forest" />
        </div>
        
        {/* Icon Only */}
        <div className="text-center p-6 bg-white/5 rounded-2xl">
          <h4 className="text-lg font-semibold text-white mb-4">Icon Only</h4>
          <LogoIcon size="large" variant="default" />
        </div>
        
        {/* Text Only */}
        <div className="text-center p-6 bg-white/5 rounded-2xl">
          <h4 className="text-lg font-semibold text-white mb-4">Text Only</h4>
          <LogoText size="large" variant="default" />
        </div>
      </div>
      
      {/* Animated Logo Showcase */}
      <div className="mt-12 text-center">
        <h4 className="text-xl font-semibold text-white mb-8">Animated Hero Logo</h4>
        <div className="flex justify-center">
          <AnimatedLogo size="xl" />
        </div>
      </div>
      
      {/* Size Variations */}
      <div className="mt-12">
        <h4 className="text-xl font-semibold text-white mb-6 text-center">Size Variations</h4>
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <p className="text-sm text-gray-300 mb-2">Small</p>
            <Logo size="small" variant="default" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-300 mb-2">Medium</p>
            <Logo size="medium" variant="default" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-300 mb-2">Large</p>
            <Logo size="large" variant="default" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-300 mb-2">XL</p>
            <Logo size="xl" variant="default" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;