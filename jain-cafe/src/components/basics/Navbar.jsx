import React from 'react';

const Navbar = ({ filterItem }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black p-4">
        <div className="btngrp flex justify-center space-x-4">
          <button className="px-4 py-2 text-white font-bold hover:bg-gray-800 rounded focus:outline-none focus:bg-gray-800 relative" onClick={() => filterItem("Snack")}>
            Snack
          </button>
          <button className="px-4 py-2 text-white font-bold hover:bg-gray-800 rounded focus:outline-none focus:bg-gray-800 relative" onClick={() => filterItem("Dessert")}>
            Dessert
          </button>
          <button className="px-4 py-2 text-white font-bold hover:bg-gray-800 rounded focus:outline-none focus:bg-gray-800 relative" onClick={() => filterItem("Lunch")}>
            Lunch
          </button>
          <button className="px-4 py-2 text-white font-bold hover:bg-gray-800 rounded focus:outline-none focus:bg-gray-800 relative" onClick={() => filterItem("Dinner")}>
            Dinner
          </button>
          <button className="px-4 py-2 text-white font-bold hover:bg-gray-800 rounded focus:outline-none focus:bg-gray-800 relative" onClick={() => filterItem("All")}>
            All
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
