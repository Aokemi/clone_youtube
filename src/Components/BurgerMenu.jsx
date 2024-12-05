import React  from "react";

const BurgerMenu = ({ toggleSidebar }) => {
    
  return (
    <button className="burger-menu" onClick={toggleSidebar}>
      ☰
    </button>
  );
};

export default BurgerMenu;