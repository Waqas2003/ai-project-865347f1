import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/2000/1000)' }}>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-4xl font-bold text-white">Explore the World</h1>
        <p className="text-2xl text-white">Discover new destinations and experiences with us</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;