import React from 'react';

const Hero = () => {
  return (
    <div className="grid grid-cols-4 container mx-auto py-8">
      {/* Hero Text */}
      <div className="col-span-2 text-left self-center">
        <h1 className="text-5xl font-bold">
          Launch your Own online yellow-shapelearning Platform
        </h1>
        <h3 className="font-semibold text-lg">
          Unlimited access to all 60+ instructors.
        </h3>
        <p>2 passes (with access to all classes) for $240</p>
        <input
          type="text"
          placeholder="What do you want to learn?"
          className="mt-6 py-2 w-1/2 px-2"
        />
      </div>
      {/* Hero Image */}
      <div className="col-start-4 relative">
        <img src="/images/hero.png" alt="hero" className="h-full" />
      </div>
    </div>
  );
};

export default Hero;
