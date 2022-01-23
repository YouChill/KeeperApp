import React, {useState} from "react";

// 'Create note' div with its functionality

function CreateArea(props) {
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

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
