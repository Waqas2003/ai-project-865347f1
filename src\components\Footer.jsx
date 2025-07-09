import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-screen p-4 pt-6 md:p-6 lg:p-12">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-center">
          <li className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-2xl font-bold">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p>Phone: 123-456-7890</p>
            <p>Email: [info@travelagency.com](mailto:info@travelagency.com)</p>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-2xl font-bold">Social Media</h3>
            <ul className="flex justify-center">
              <li><i className="fab fa-facebook text-2xl text-blue-500"></i></li>
              <li><i className="fab fa-twitter text-2xl text-blue-500"></i></li>
              <li><i className="fab fa-instagram text-2xl text-blue-500"></i></li>
            </ul>
          </li>
        </ul>
        <p className="text-center text-gray-600">Copyright 2023 Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;