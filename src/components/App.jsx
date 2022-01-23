import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// Main app components integration

function App() {
    const [notes, setNotes] = useState([]);

        // New note implementation
    function createNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }

        // Deletion of give note with button "delete"
    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
        <Header />
        <CreateArea onAdd={createNote} />
        {notes.map((noteItem, index) => {
            return <Note 
            key={index}
            id={index}
            title={noteItem.title} 
            content={noteItem.content}
            onDelete={deleteNote} />; })}
        <Footer />
        </div>
    );
}

export default App;
