import React from "react";
import Tabs from "./Components/Tabs";
import Sidebar from "./Components/Sidebar";
import './index.css';


function App() {

  return (
    <div className="app-container">

      <Sidebar />

      <div className="main-content">

        <h1> Tabs from categories </h1>
        <Tabs />

      </div>
    </div>
  );

}

export default App;