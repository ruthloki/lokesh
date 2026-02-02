import React from 'react';

const Logo = ({ size = 'medium', showText = true, animated = true, variant = 'default' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-3xl',
    xl: 'text-5xl'
  };

  const iconSizes = {
    small: 'w-5 h-5',
    medium: 'w-7 h-7',
    large: 'w-10 h-10',
    xl: 'w-16 h-16'
  };

  const variants = {
    default: {
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
      hoverGradient: 'group-hover:from-yellow-400 group-hover:via-orange-500 group-hover:to-red-500',
      textGradient: 'from-cyan-400 via-blue-500 to-purple-600'
    },
    fire: {
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      hoverGradient: 'group-hover:from-yellow-400 group-hover:via-orange-400 group-hover:to-red-500',
      textGradient: 'from-orange-400 via-red-500 to-pink-600'
    },
    ocean: {
      gradient: 'from-blue-400 via-cyan-500 to-teal-600',
      hoverGradient: 'group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-indigo-500',
      textGradient: 'from-blue-400 via-cyan-500 to-teal-600'
    },
    forest: {
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      hoverGradient: 'group-hover:from-lime-400 group-hover:via-green-500 group-hover:to-emerald-600',
      textGradient: 'from-green-400 via-emerald-500 to-teal-600'
    }
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <div className={`flex items-center space-x-3 ${animated ? 'group' : ''}`}>
      <div className={`relative ${sizeClasses[size]} ${animated ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}>
        {/* Main Logo Container */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentVariant.gradient} rounded-2xl shadow-lg ${animated ? 'group-hover:shadow-xl transition-shadow duration-300' : ''}`}>
          {/* Inner glow effect */}
          <div className="absolute inset-0.5 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
          
          {/* Logo Icon - Sports themed */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className={`${iconSizes[size]} text-white drop-shadow-lg`} viewBox="0 0 24 24" fill="currentColor">
              {/* Custom Sports Trophy Icon */}
              <path d="M6 2h12v2H6V2zm1 3h10l1 1v2l-1 1H7L6 8V6l1-1zm-1 5h2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2z"/>
              {/* Sports ball accent */}
              <circle cx="12" cy="14" r="2" fill="rgba(255,255,255,0.3)"/>
              <path d="M12 12c-.5 0-1 .2-1.4.6l2.8 2.8c.4-.4.6-.9.6-1.4s-.2-1-.6-1.4c-.4-.4-.9-.6-1.4-.6z" fill="rgba(255,255,255,0.5)"/>
            </svg>
          </div>
          
          {/* Animated ring */}
          <div className={`absolute inset-0 rounded-2xl border-2 border-white/30 ${animated ? 'group-hover:border-white/50 transition-colors duration-300' : ''}`}></div>
        </div>
        
        {/* Floating particles effect */}
        {animated && (
          <>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-300"></div>
          </>
        )}
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <h1 className={`${textSizes[size]} font-black bg-gradient-to-r ${currentVariant.textGradient} bg-clip-text text-transparent ${animated ? currentVariant.hoverGradient + ' transition-all duration-500' : ''}`}>
            LOKESH
          </h1>
          <span className={`text-xs font-medium text-gray-400 ${animated ? 'group-hover:text-gray-300 transition-colors duration-300' : ''} tracking-wider`}>
            SPORTS ARENA
          </span>
        </div>
      )}
    </div>
  );
};

// Alternative Logo Designs
export const LogoIcon = ({ size = 'medium', variant = 'default' }) => {
  return <Logo size={size} showText={false} variant={variant} />;
};

export const LogoText = ({ size = 'medium', variant = 'default' }) => {
  const textSizes = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-3xl',
    xl: 'text-5xl'
  };

  const variants = {
    default: 'from-cyan-400 via-blue-500 to-purple-600',
    fire: 'from-orange-400 via-red-500 to-pink-600',
    ocean: 'from-blue-400 via-cyan-500 to-teal-600',
    forest: 'from-green-400 via-emerald-500 to-teal-600'
  };

  return (
    <div className="flex flex-col">
      <h1 className={`${textSizes[size]} font-black bg-gradient-to-r ${variants[variant]} bg-clip-text text-transparent`}>
        LOKESH
      </h1>
      <span className="text-xs font-medium text-gray-400 tracking-wider">
        SPORTS ARENA
      </span>
    </div>
  );
};

// Animated Logo for special occasions
export const AnimatedLogo = ({ size = 'large' }) => {
  return (
    <div className="relative group logo-container">
      <div className={`relative ${size === 'xl' ? 'w-32 h-32' : 'w-24 h-24'} mx-auto`}>
        {/* Main Logo with enhanced effects */}
        <div className="logo-3d logo-float">
          <Logo size={size} variant="default" animated={true} />
        </div>
        
        {/* Additional animation effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Rotating ring */}
          <div className="absolute inset-0 border-2 border-transparent border-t-cyan-400 border-r-blue-500 rounded-full animate-spin opacity-30"></div>
          
          {/* Pulsing glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-full animate-pulse logo-glow"></div>
          
          {/* Orbiting particles */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-yellow-400 rounded-full particle-float transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-pink-400 rounded-full particle-float-delayed transform translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute left-0 top-1/2 w-2.5 h-2.5 bg-green-400 rounded-full particle-float transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute right-0 bottom-1/4 w-2 h-2 bg-purple-400 rounded-full particle-float-delayed transform translate-x-1/2"></div>
          </div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 rounded-full logo-shimmer opacity-20"></div>
        </div>
        
        {/* Neon text effect for large sizes */}
        {size === 'xl' && (
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="text-center">
              <h2 className="text-4xl font-black text-gradient-rainbow neon-glow">
                LOKESH
              </h2>
              <p className="text-sm font-medium text-cyan-300 tracking-widest mt-1 opacity-80">
                SPORTS ARENA
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;