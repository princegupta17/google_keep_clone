import React from "react";
import { archivearray } from "./Main";
import Archivebox from "./archivebox";
function Archive(){
    return (
        <div className="grid">
            {archivearray.map((deleteitem, index) => {
                return (
                    <Archivebox 
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

export default Archive;

