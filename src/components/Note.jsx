import React  from "react";

// Generic Note creation module

function Note(props) {

    function handleClick(e) {
        props.onDelete(props.id);
        e.preventDefault();
    }

    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>Delete</button>
    </div>;
}

export default Note;