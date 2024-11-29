import React from "react";
import Tabs from "./Components/Tabs";
import Sidebar from "./Components/Sidebar";
import './index.css';
import SearchBar from "./Components/Searchbar";


function App() {

  const handleSearch = (search) => {
    console.log("Searching done : ", search) // Searching is done there
  }

  return (
    <div className="app-container">
      
      <Sidebar />


      <div className="main-content">

        <header className="header">
          <SearchBar onSearch={handleSearch} />
        </header>
        
        <h1> Tabs from categories </h1>
        <Tabs />

      </div>
    </div>
  );

}

export default App;