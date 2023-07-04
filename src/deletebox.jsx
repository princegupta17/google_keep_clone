import React from "react";



function Deletebox(props){
    
    return (
        <div className='save'>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    );
}

export default Deletebox;