import React, { useState } from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Main from "./Main";
import Deleted from "./deleted";
import Archive from "./Archive";
let open = 1;
let show = () => {};
function Without(){
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
        <div className="content">
          <div className="list">
            <ul>
              <li>
                <LightbulbOutlinedIcon onClick={opennotes}/>
              </li>
              <li>
                <ArchiveOutlinedIcon onClick={openarchive}/>
              </li>
              <li>
                <DeleteOutlinedIcon onClick={opendelete} />
              </li>
            </ul>
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

export default Without;