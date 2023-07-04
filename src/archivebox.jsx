import React from "react";

function Archivebox(props){
    return (
        <div className='save'>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    );
}

export default Archivebox;