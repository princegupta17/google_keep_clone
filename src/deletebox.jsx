import React from "react";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { setarray } from "./Main";


function Deletebox(props){
    function clickdelete(){
        setarray((prevarray) => {
            return prevarray.filter((notesitem, index) => {
              return index !== props.id;
            });
          });
    }
    return (
        <div className='save'>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <DeleteForeverOutlinedIcon className='property1' onClick={clickdelete}/>
        </div>
    );
}

export default Deletebox;