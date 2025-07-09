import React from 'react';

const Card = ({ image, title, description, price }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t" />
      <div className="p-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-2xl font-bold">{price}</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
      </div>
    </div>
  );
};

export default Card;