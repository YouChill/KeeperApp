import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

// 'Create note' div with its functionality

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  
    // State handler for the textbox and textarea
  function handleChange(e) {
    const {value, name} = e.target;

    setNote((prevState) => {
        return {
                ...prevState,
                [name]: value
            }
        });
  }

    // Pushing the new note to the keep
  function submitNote(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input name="title" placeholder="Title" onChange={handleChange} value={note.title} />)}
        <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onClick={expand} onChange={handleChange} value={note.content} />
        <Zoom in={isExpanded && true}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
