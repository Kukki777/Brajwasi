import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layered Background */}
      <div className="absolute inset-0">
        {/* Primary Gradient Background */}
        <div className="absolute inset-0" style={{backgroundColor:"#FEF8EE"}}></div>
        
        {/* Secondary Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-stone-100/40"></div>
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f59e0b\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Large Background Food Elements - Indian Foods */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Massive Chole Chawal */}
        <div 
          className="absolute -top-10 md:-top-32 -right-10 md:-right-32 text-[120px] md:text-[400px] opacity-15 md:opacity-15 select-none"
          style={{
            transform: 'rotate(15deg)',
            filter: 'blur(2px)',
            textShadow: '0 0 100px rgba(255,165,0,0.2)'
          }}
        >
          🍛
        </div>
        
        {/* Giant Rajma Chawal */}
        <div 
          className="absolute -bottom-15 md:-bottom-40 -left-15 md:-left-40 text-[100px] md:text-[350px] opacity-12 md:opacity-12 select-none"
          style={{
            transform: 'rotate(-20deg)',
            filter: 'blur(1px)',
            textShadow: '0 0 80px rgba(139,69,19,0.3)'
          }}
        >
          🥘
        </div>
        
        {/* Large Dal Roti */}
        <div 
          className="absolute top-5 md:top-20 -left-8 md:-left-20 text-[80px] md:text-[250px] opacity-12 md:opacity-10 select-none"
          style={{
            transform: 'rotate(45deg)',
            filter: 'blur(3px)'
          }}
        >
          🫓
        </div>
        
        {/* Large Biryani */}
        <div 
          className="absolute top-1/3 right-5 md:right-20 text-[60px] md:text-[180px] opacity-18 md:opacity-18 select-none"
          style={{
            animation: 'float 8s ease-in-out infinite',
            filter: 'blur(1px)'
          }}
        >
          🍚
        </div>

        {/* Additional - Paratha */}
        <div 
          className="absolute bottom-1/3 left-1/4 text-[50px] md:text-[150px] opacity-15 md:opacity-20 select-none"
          style={{
            transform: 'rotate(-10deg)',
            animation: 'floatSlow 10s ease-in-out infinite',
            filter: 'blur(2px)'
          }}
        >
          🥞
        </div>
      </div>

      {/* More Floating Animated Indian Food Items */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Row */}
        <div 
          className="absolute top-1/4 left-1/6 text-4xl md:text-6xl opacity-25 md:opacity-30"
          style={{
            animation: 'floatSlow 12s ease-in-out infinite',
            animationDelay: '0s'
          }}
        >
          🍜
        </div>
        <div 
          className="absolute top-1/5 right-1/5 text-3xl md:text-5xl opacity-20 md:opacity-25"
          style={{
            animation: 'floatMedium 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        >
          🍲
        </div>
        
        {/* Middle Row */}
        <div 
          className="absolute top-1/2 left-1/5 text-5xl md:text-7xl opacity-18 md:opacity-20"
          style={{
            animation: 'floatFast 8s ease-in-out infinite',
            animationDelay: '1s'
          }}
        >
          🥗
        </div>
        <div 
          className="absolute top-2/3 right-1/4 text-4xl md:text-6xl opacity-22 md:opacity-23"
          style={{
            animation: 'floatSlow 14s ease-in-out infinite',
            animationDelay: '3s'
          }}
        >
          🍝
        </div>
        
        {/* Bottom Row */}
        <div 
          className="absolute bottom-1/4 left-1/2 text-3xl md:text-5xl opacity-25 md:opacity-27"
          style={{
            animation: 'floatMedium 11s ease-in-out infinite',
            animationDelay: '1.5s'
          }}
        >
          🥙
        </div>
        <div 
          className="absolute bottom-1/5 right-1/6 text-2xl md:text-4xl opacity-28 md:opacity-30"
          style={{
            animation: 'floatFast 9s ease-in-out infinite',
            animationDelay: '4s'
          }}
        >
          🍤
        </div>

        {/* Additional Indian foods for mobile richness */}
        <div 
          className="absolute top-2/5 left-2/3 text-3xl md:text-5xl opacity-20 md:opacity-25"
          style={{
            animation: 'floatMedium 13s ease-in-out infinite',
            animationDelay: '5s'
          }}
        >
          🍛
        </div>
        <div 
          className="absolute bottom-2/5 right-2/3 text-4xl md:text-6xl opacity-15 md:opacity-20"
          style={{
            animation: 'floatSlow 15s ease-in-out infinite',
            animationDelay: '6s'
          }}
        >
          🥘
        </div>

        {/* Sweet items - Rasgulla and traditional sweets */}
        <div 
          className="absolute top-3/5 left-1/8 text-3xl md:text-5xl opacity-22 md:opacity-28"
          style={{
            animation: 'floatFast 12s ease-in-out infinite',
            animationDelay: '7s'
          }}
        >
          🟡
        </div>
        <div 
          className="absolute bottom-1/6 left-3/4 text-2xl md:text-4xl opacity-20 md:opacity-25"
          style={{
            animation: 'floatSlow 16s ease-in-out infinite',
            animationDelay: '8s'
          }}
        >
          🍮
        </div>
      </div>

      {/* Enhanced Glowing Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full opacity-20 md:opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content - Logo Integration */}
      <div className="relative z-20 text-center px-4 md:px-6 max-w-6xl mx-auto py-8 md:py-0">
        <div className="mb-4 md:mb-16">
          {/* Logo Container with Mobile Optimization */}
          <div 
            className="flex justify-center items-center mb-6 md:mb-8"
            style={{
              animation: 'logoGlow 4s ease-in-out infinite alternate',
              transform: 'perspective(800px) rotateX(2deg)'
            }}
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
              <img 
                src="/assets/images/brajwasi brothers (1).png"
                alt="Brajwasi Brothers Logo"
                className="w-full h-auto object-contain filter drop-shadow-2xl"
                style={{
                  maxHeight: '50vh',
                  minHeight: '150px'
                }}
              />
            </div>
          </div>

          {/* Subtitle for better mobile experience */}
          <div className="mt-6 md:mt-8">
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-orange-800/80 font-semibold tracking-wide">
              Sweet Delights & Culinary Wonders
            </p>
            <p className="text-xs sm:text-sm md:text-lg text-orange-600/70 mt-1 md:mt-2 font-medium">
              Authentic Flavors, Crafted with Love
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Mobile Optimized */}
      <div 
        className="absolute bottom-4 md:bottom-12 left-1/2 transform -translate-x-1/2 z-30"
        style={{ animation: 'bounce 3s ease-in-out infinite' }}
      >
        <div 
          className="w-9 h-14 md:w-10 md:h-16 border-2 md:border-3 border-orange-300/80 rounded-full flex justify-center backdrop-blur-lg bg-gradient-to-b from-white/30 to-white/15"
          style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.25)' }}
        >
          <div 
            className="w-2.5 h-5 md:w-3 md:h-6 bg-gradient-to-b from-orange-400 to-yellow-500 rounded-full mt-2 md:mt-3"
            style={{ 
              animation: 'scrollPulse 2s ease-in-out infinite',
              boxShadow: '0 0 20px rgba(255,165,0,0.5)'
            }}
          ></div>
        </div>
      </div>

      <style>{`
        @keyframes logoGlow {
          0% { 
            filter: drop-shadow(0 10px 30px rgba(0,0,0,0.2)) drop-shadow(0 0 60px rgba(255,100,0,0.2));
            transform: perspective(800px) rotateX(2deg) scale(1);
          }
          100% { 
            filter: drop-shadow(0 15px 40px rgba(0,0,0,0.3)) drop-shadow(0 0 80px rgba(255,100,0,0.3));
            transform: perspective(800px) rotateX(2deg) scale(1.02);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(8deg); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-25px) rotate(12deg) scale(1.08); }
        }
        
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-10deg); }
        }
        
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-28px) rotate(18deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-12px); }
        }
        
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: translateY(0px); }
          50% { opacity: 0.6; transform: translateY(8px); }
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          html, body {
            overflow-x: hidden;
            height: 100%;
          }
          
          .h-screen {
            height: 100vh;
            height: 100dvh; /* Dynamic viewport height for mobile browsers */
            max-height: 100vh;
            max-height: 100dvh;
          }
          
          @keyframes logoGlow {
            0% { 
              filter: drop-shadow(0 8px 20px rgba(0,0,0,0.15)) drop-shadow(0 0 40px rgba(255,100,0,0.15));
              transform: perspective(800px) rotateX(2deg) scale(1);
            }
            100% { 
              filter: drop-shadow(0 12px 30px rgba(0,0,0,0.25)) drop-shadow(0 0 60px rgba(255,100,0,0.25));
              transform: perspective(800px) rotateX(2deg) scale(1.01);
            }
          }
          
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
            50% { transform: translateY(-10px) rotate(6deg) scale(1.03); }
          }
          
          @keyframes floatMedium {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(-4deg); }
          }
          
          @keyframes floatFast {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(8deg); }
          }
        }
        
        /* Prevent horizontal scroll on mobile */
        @media (max-width: 640px) {
          body {
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;