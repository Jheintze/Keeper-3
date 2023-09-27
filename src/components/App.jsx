import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((singleNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={addNote} />
      {notes.map((singleNote, index) => {
        return (
          <Note
            title={singleNote.title}
            content={singleNote.content}
            id={index}
            key={index}
            onClick={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
