import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-lg font-bold ">My Logo</div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#" className="text-gray-300 hover:text-white">Services</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </div>
          <button onClick={toggleSidebar} className="md:hidden text-white">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed right-0 top-0 h-full bg-gray-900 w-64 p-4 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center">
            <div className="text-white text-lg font-bold border-b-2 border-green-300">Menu</div>
            <button onClick={toggleSidebar} className="text-white">
              Close
            </button>
          </div>
          <div className="mt-4">
            <a href="#" className="block text-gray-300 hover:text-white py-2">Home</a>
            <a href="#" className="block text-gray-300 hover:text-white py-2">About</a>
            <a href="#" className="block text-gray-300 hover:text-white py-2">Services</a>
            <a href="#" className="block text-gray-300 hover:text-white py-2">Contact</a>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Navbar;
