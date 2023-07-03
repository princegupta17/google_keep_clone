import React from "react";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { setarchivearray } from "./Main";

function Archivebox(props){
    function clickbutton(){
        setarchivearray((prevNotes) => {
            return prevNotes.filter((notesitem, index) => {
              return index !== props.id;
            });
          });
    }
    return (
        <div className='save'>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <DeleteForeverOutlinedIcon className='property1'onClick={clickbutton}/>
        </div>
    );
}

export default Archivebox;