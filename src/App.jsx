import React, { useState } from "react";
import Tabs from "./Components/Tabs";
import Sidebar from "./Components/Sidebar";
import './index.css';
import SearchBar from "./Components/Searchbar";
import BurgerMenu from "./Components/BurgerMenu";


function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSearch = (search) => {
    console.log("Searching done : ", search) // Searching is done there
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="app-container">

      {isSidebarOpen && <Sidebar />}

      <div className="main-content">

        <header className="header">
            <BurgerMenu toggleSidebar={toggleSidebar} />
            <SearchBar onSearch={handleSearch} />         
        </header>
        
        <h1> Tabs from categories </h1>
        <Tabs />

      </div>
    </div>
  );

}

export default App;