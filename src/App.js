import React, { useState } from "react";
import logo from "./logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Menudetail from "./Menudetail";
import Without from "./Without";

function App() {
  const [menu, setcount] = useState(false);
  function give() {
    setcount((menu) => !menu);
  }
  return (
    <div>
      <div className="nav">
        <MenuIcon className="menu" onClick={give}/>
        <img src={logo} alt="logo"></img>
        <span className="name">Keep</span>
      </div>
      <div>{menu === true ? <Menudetail /> : <Without />}</div>
    </div>
  );
}

export default App;
