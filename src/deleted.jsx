import React from "react";
import { deletearray } from "./Main";
import Deletebox from "./deletebox";
function Deleted(){
    return (
        <div className="grid">
            {deletearray.map((deleteitem, index) => {
                return (
                    <Deletebox 
                        key = {index}
                        id = {index}
                        title = {deleteitem[0].title}
                        content = {deleteitem[0].content}
                    />
                );
            })}
        </div>
    );
}

export default Deleted;