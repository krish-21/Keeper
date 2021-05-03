import { useState } from "react";

import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = newNote => {
    if (newNote.content === "") return;
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  const deleteNote = id => {
    setNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
  };

  return (
    <>
      <Header />
      <NoteForm onSubmit={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
