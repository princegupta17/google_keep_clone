import React from "react";
import logo from "./logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Without from "./Without";

function App() {
  return (
    <div>
      <div className="nav">
        <MenuIcon className="menu" />
        <img src={logo} alt="logo"></img>
        <span className="name">Keep</span>
      </div>
      <div>
        <Without />
      </div>
    </div>
  );
}

export default App;
