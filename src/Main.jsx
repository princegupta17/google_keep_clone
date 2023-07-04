import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Save from "./Save";
import { ClickAwayListener } from "@mui/material";

let notesarray=[];
let setnotes=()=>{};
let deletearray=[];
let setarray=()=>{};
let archivearray=[];
let setarchivearray=()=>{};
function Main(){
    [archivearray, setarchivearray] = useState([]);
    [deletearray, setarray] = useState([]);
    [notesarray, setnotes] = useState([]);
    const [notes, setTitle] = useState({
        title: "",
        content: ""
    });
    function inserting(events){
        const {name, value} = events.target;
        setTitle(prevValue => {
            return {
                ...prevValue,
                [name] : value
            }
        });
    }
    
    function submit(){
        setnotes(prevNotes => {
            return [notes, ...prevNotes];
        });
        setTitle({
            title: "",
            content: ""
        });
    }
    const[shownote, setnote]=useState(false);
    function Showthis(){
        setnote(true);
    }
    function showaway(){
        setnote(false);
    }
    return (
        <div>
            <ClickAwayListener onClickAway={showaway}>
            <div>
                <form className="create-note">
                    {shownote && <input name="title" placeholder="Title" value={notes.title} onChange = {inserting}/>}
                    <textarea id="my-content" name="content" placeholder="Take a note..." value={notes.content} onChange={inserting} onClick = {Showthis}/>
                    <AddIcon onClick={submit} className="add"/>
                </form>
            </div>
            </ClickAwayListener>
            <div className="grid">
                {notesarray.map((notearray, index) => {
                    return (
                        <Save
                            key={index}
                            id={index}
                            title={notearray.title}
                            content={notearray.content}
                        />
                    );
                })}
            </div>
        </div>
    );
    
}

export default Main;
export {notesarray, setnotes, deletearray, setarray, archivearray, setarchivearray};