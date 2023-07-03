import React, { useState } from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Main from "./Main";
import Deleted from "./deleted";
import Archive from "./Archive";
let openit = false;
let showit = ()=>{};

let open = 1;
let show = () => {};
function Menudetail(props) {
  [openit, showit] = useState(false);
  [open, show] = useState(0);
  function opendelete(){
    show(3);
  }
  function openarchive(){
    show(2);
  }
  function opennotes(){
    show(1);
  }
    return (
        <div className="contentondetail">
            <div className="listdetail">
                <div className="button-detail" onClick={opennotes}><LightbulbOutlinedIcon /><span className="detail">Notes</span></div>
                <div className="button-detail" onClick={openarchive}><ArchiveOutlinedIcon /><span className="detail">Archive</span></div>
                <div className="button-detail" onClick={opendelete}><DeleteOutlinedIcon /><span className="detail">Trash</span></div>
            </div>
            <div className="notes">
              {
              {
                1: <Main />,
                2: <Archive />,
                3: <Deleted />
              }[open] || <Main />
              }
            </div>
          </div>
    );
}

export default Menudetail;
export {openit, showit};