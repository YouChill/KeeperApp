import React  from "react";
import DeleteIcon from "@material-ui/icons/Delete";

// Generic Note creation module

function Note(props) {

    function handleClick(e) {
        props.onDelete(props.id);
        e.preventDefault();
    }

    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}><DeleteIcon /></button>
    </div>;
}

export default Note;