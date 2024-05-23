import React, { useState } from 'react';
import Menu from './menuApi';
import Menucard from './Menucard';
import Navbar from './Navbar';

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
    } else {
      const updatedList = Menu.filter((currentElement) => {
        return currentElement.category === category;
      });
      setMenuData(updatedList);
    }
  };

  return (
    <div className='bg-black' style={{ height: '200vh', width: '100vw' }}>
      <Navbar filterItem={filterItem} />
      <Menucard menuData={menuData} />
    </div>
  );
};

export default Restaurant;
