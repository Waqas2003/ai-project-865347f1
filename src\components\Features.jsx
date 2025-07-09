import React from 'react';

const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h2 className="text-3xl font-bold">What We Offer</h2>
        <ul className="flex flex-wrap justify-center">
          <li className="w-full md:w-1/2 lg:w-1/3 p-4">
            <i className="fas fa-plane text-4xl text-orange-500"></i>
            <h3 className="text-2xl font-bold">Flights</h3>
            <p>Book your flights with us and get the best deals</p>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 p-4">
            <i className="fas fa-hotel text-4xl text-orange-500"></i>
            <h3 className="text-2xl font-bold">Hotels</h3>
            <p>Find the perfect hotel for your stay</p>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 p-4">
            <i className="fas fa-compass text-4xl text-orange-500"></i>
            <h3 className="text-2xl font-bold">Tours</h3>
            <p>Explore new destinations with our guided tours</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;