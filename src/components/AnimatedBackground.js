import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Primary Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 animate-gradient-shift"></div>
      
      {/* Secondary Moving Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-800/50 via-purple-800/30 to-cyan-800/50 animate-gradient-flow"></div>
      
      {/* Floating Particles */}
      <div className="particles-container">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
      </div>
      
      {/* Glow Orbs */}
      <div className="glow-orbs">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
    </div>
  );
};

export default AnimatedBackground;