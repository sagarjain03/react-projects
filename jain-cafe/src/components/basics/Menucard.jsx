import React from 'react';

const Menucard = ({ menuData }) => {
  return (
    <div className="flex flex-wrap justify-center ">
      {menuData.map((item) => (
        <div
          key={item.id}
          className="relative w-80 h-96 rounded overflow-hidden shadow-lg bg-white m-4 hover:opacity-50"
          style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative p-6 z-10">
            <div className="text-white font-bold text-2xl mb-2">{item.name}</div>
            <p className="text-white text-base">{item.description}</p>
          </div>
          <div className="flex justify-between items-center absolute bottom-0 left-0 right-0 p-4 z-20">
            <div className="text-white font-bold text-3xl">{item.category}</div>
            <div className="text-white font-bold text-3xl">₹{item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menucard;
