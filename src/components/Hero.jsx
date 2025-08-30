import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layered Background */}
      <div className="absolute inset-0">
        {/* Primary Gradient Background */}
        <div className="absolute inset-0 "style={{backgroundColor:"#FEF8EE"}}></div>
        
        {/* Secondary Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-stone-100/40"></div>
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f59e0b\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Large Background Food Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Massive Curry Bowl */}
        <div 
          className="absolute -top-32 -right-32 text-[400px] opacity-15 select-none"
          style={{
            transform: 'rotate(15deg)',
            filter: 'blur(2px)',
            textShadow: '0 0 100px rgba(255,165,0,0.2)'
          }}
        >
          🍛
        </div>
        
        {/* Giant Biryani */}
        <div 
          className="absolute -bottom-40 -left-40 text-[350px] opacity-12 select-none"
          style={{
            transform: 'rotate(-20deg)',
            filter: 'blur(1px)',
            textShadow: '0 0 80px rgba(255,140,0,0.3)'
          }}
        >
          🥘
        </div>
        
        {/* Large Naan */}
        <div 
          className="absolute top-20 -left-20 text-[250px] opacity-10 select-none"
          style={{
            transform: 'rotate(45deg)',
            filter: 'blur(3px)'
          }}
        >
          🫓
        </div>
        
        {/* Large Roti/Bread */}
        <div 
          className="absolute top-1/3 right-20 text-[180px] opacity-18 select-none"
          style={{
            animation: 'float 8s ease-in-out infinite',
            filter: 'blur(1px)'
          }}
        >
          🍞
        </div>
      </div>

      {/* Floating Animated Food Items */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Row */}
        <div 
          className="absolute top-1/4 left-1/6 text-6xl opacity-30"
          style={{
            animation: 'floatSlow 12s ease-in-out infinite',
            animationDelay: '0s'
          }}
        >
          🍜
        </div>
        <div 
          className="absolute top-1/3 right-1/5 text-5xl opacity-25"
          style={{
            animation: 'floatMedium 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        >
          🍝
        </div>
        
        {/* Middle Row */}
        <div 
          className="absolute top-1/2 left-1/4 text-7xl opacity-20"
          style={{
            animation: 'floatFast 8s ease-in-out infinite',
            animationDelay: '1s'
          }}
        >
          🥗
        </div>
        <div 
          className="absolute top-2/3 right-1/3 text-6xl opacity-23"
          style={{
            animation: 'floatSlow 14s ease-in-out infinite',
            animationDelay: '3s'
          }}
        >
          🍲
        </div>
        
        {/* Bottom Row */}
        <div 
          className="absolute bottom-1/4 left-1/3 text-5xl opacity-27"
          style={{
            animation: 'floatMedium 11s ease-in-out infinite',
            animationDelay: '1.5s'
          }}
        >
          🥙
        </div>
        <div 
          className="absolute bottom-1/3 right-1/6 text-4xl opacity-30"
          style={{
            animation: 'floatFast 9s ease-in-out infinite',
            animationDelay: '4s'
          }}
        >
          🍤
        </div>
      </div>

      {/* Glowing Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-none">
            <div 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 mb-4"
              style={{
                textShadow: '0 30px 60px rgba(0,0,0,0.2), 0 0 120px rgba(255,100,0,0.3)',
                filter: 'drop-shadow(0 35px 70px rgba(0,0,0,0.15))',
                transform: 'perspective(1000px) rotateX(10deg)',
                animation: 'glow 4s ease-in-out infinite alternate'
              }}
            >
              Brajvasi
            </div>
            <div 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-red-500 to-orange-600"
              style={{
                textShadow: '0 30px 60px rgba(0,0,0,0.2), 0 0 120px rgba(255,100,0,0.3)',
                filter: 'drop-shadow(0 35px 70px rgba(0,0,0,0.15))',
                transform: 'perspective(1000px) rotateX(-10deg)',
                animation: 'glow 4s ease-in-out infinite alternate 1s'
              }}
            >
              Brothers
            </div>
          </h1>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-12">
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30"
        style={{ animation: 'bounce 3s ease-in-out infinite' }}
      >
        <div 
          className="w-10 h-16 border-3 border-orange-300/80 rounded-full flex justify-center backdrop-blur-lg bg-gradient-to-b from-white/20 to-white/10"
          style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
        >
          <div 
            className="w-3 h-6 bg-gradient-to-b from-orange-300 to-yellow-400 rounded-full mt-3"
            style={{ 
              animation: 'scrollPulse 2s ease-in-out infinite',
              boxShadow: '0 0 20px rgba(255,165,0,0.6)'
            }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-30px) rotate(15deg) scale(1.1); }
        }
        
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-10deg); }
        }
        
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-35px) rotate(20deg); }
        }
        
        @keyframes glow {
          0% { 
            text-shadow: 0 30px 60px rgba(0,0,0,0.2), 0 0 120px rgba(255,100,0,0.3);
          }
          100% { 
            text-shadow: 0 35px 70px rgba(0,0,0,0.25), 0 0 150px rgba(255,100,0,0.4);
          }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-15px); }
        }
        
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: translateY(0px); }
          50% { opacity: 0.5; transform: translateY(8px); }
        }
        
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

export default Hero;