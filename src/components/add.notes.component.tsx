import React, { useState, useContext } from "react";
import type { Note } from "./data";
import { SavedNotesContext } from "./saved.notes.context";

const AddNotes = () => {
  const [notesList, setNotesList] = useState<Note[]>([]);
  const [title, setTitle] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const savedNotesContext = useContext(SavedNotesContext);

  if (!savedNotesContext) {
    return null;
  }
  const { dispatch } = savedNotesContext;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const note: Note = {
      id: notesList.length + 1,
      subject,
      title,
      content: <p>{content}</p>,
      difficulty,
    };
    setNotesList((prevNotes) => [...prevNotes, note]);
    dispatch({ type: "SAVE_NOTE", payload: note });
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };
  const handleDifficultyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDifficulty(event.target.value);
  };
  const filterNewNote = notesList.filter(
    (note) => note.subject === `${subject}` // filters through notesList to find the subject that matches the subject entered in the form
  );

  return (
    <div id="addNotesContainer">
      <h2>Add a New Note</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="subject">Subject: </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={subject}
          onChange={handleSubjectChange}
        />
        <br />
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <label htmlFor="content">Content: </label>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={handleContentChange}
        />
        <br />
        <label htmlFor="difficulty">Difficulty(easy, medium, hard): </label>
        <input
          type="text"
          name="difficulty"
          id="difficulty"
          value={difficulty}
          onChange={handleDifficultyChange}
        />
        <br />
        <button type="submit">Add Note</button>
      </form>
      {filterNewNote.length > 0 && <h3>Newly Added Notes:</h3>}
      <ul>
        {filterNewNote.map((note) => (
          <li key={note.id}>
            <h4>{note.title}</h4>
            <div>{note.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddNotes;
