import React from 'react';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {notesarray, setnotes, setarray, setarchivearray} from './Main';
// let deletearray = [];
function Save(props){

    function handleclick(){
        setarray((prevarray) => {
            return (
                [notesarray.filter((notesitem, index)=>{
                return index===props.id;}), ...prevarray]
            );
        })
        setnotes((prevNotes) => {
            return prevNotes.filter((notesitem, index) => {
              return index !== props.id;
            });
          });
    }
    function handlearchiveclick(){
        setarchivearray((prevarray) => {
            return (
                [notesarray.filter((notesitem, index)=>{
                return index===props.id;}), ...prevarray]
            );
        })
        setnotes((prevNotes) => {
            return prevNotes.filter((notesitem, index) => {
              return index !== props.id;
            });
          });
    }
    return (
        <div className='save'>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <ArchiveOutlinedIcon className='property1' onClick={handlearchiveclick}/>
            <DeleteOutlineOutlinedIcon onClick={handleclick}/>

        </div>
    );
}
export default Save;
// export {deletearray};