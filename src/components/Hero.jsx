import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/nafinia-putra-Kwdp-0pok-I-unsplash.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[var(--white)] mb-6 drop-shadow-lg">
          Welcome to Coffee Haven
        </h1>
        <p className="text-xl md:text-2xl text-[var(--cream)] mb-8 max-w-2xl mx-auto drop-shadow-md">
          Your daily sanctuary for exceptional coffee experiences. Crafted with passion, served with love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[var(--coffee-brown)] hover:bg-[var(--espresso)] text-[var(--white)] px-8 py-3 rounded-full transition-colors duration-300 shadow-lg">
            View Menu
          </button>
          <button className="bg-transparent border-2 border-[var(--white)] text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--coffee-brown)] px-8 py-3 rounded-full transition-colors duration-300 shadow-lg">
            Visit Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;