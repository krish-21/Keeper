import { useState } from "react";

const NoteForm = props => {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setNewNote(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    props.onSubmit(newNote);
    setNewNote({ title: "", content: "" });
    event.preventDefault();
  };

  return (
    <form className="create-note" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={newNote.title}
      />
      <textarea
        name="content"
        placeholder="Take a Note"
        rows="3"
        onChange={handleChange}
        value={newNote.content}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NoteForm;
