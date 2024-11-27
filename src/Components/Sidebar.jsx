import React from 'react';
import { FaHome, FaCompass, FaYoutube, FaHistory } from 'react-icons/fa';

const Sidebar = () => {

  const menuItems = [
    { text: 'Home', icon: <FaHome /> },
    { text: 'Explore', icon: <FaCompass /> },
    { text: 'Subscribe', icon: <FaYoutube /> },
    { text: 'History', icon: <FaHistory /> },
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          {item.icon}
          <span className="menu-text">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;