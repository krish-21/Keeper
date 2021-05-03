import { useState } from "react";

import { Add } from "@material-ui/icons";
import { Zoom, Fab } from "@material-ui/core";

const NoteForm = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const exapnd = () => {
    setExpanded(true);
  };

  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    props.onSubmit(newNote);
    setNewNote({ title: "", content: "" });
    event.preventDefault();
  };

  return (
    <form className="create-note" onSubmit={handleSubmit}>
      {isExpanded && (
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={newNote.title}
        />
      )}
      <textarea
        name="content"
        placeholder="Take a Note"
        rows={isExpanded ? 3 : 1}
        onClick={exapnd}
        onChange={handleChange}
        value={newNote.content}
      />
      <Zoom in={isExpanded}>
        <Fab onClick={handleSubmit}>
          <Add />
        </Fab>
      </Zoom>
    </form>
  );
};

export default NoteForm;
