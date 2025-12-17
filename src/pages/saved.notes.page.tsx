import { useContext } from "react";
import { SavedNotesContext } from "../components/saved.notes.context";

const SavedNotesPage = () => {
  const context = useContext(SavedNotesContext);
  if (!context) return null;

  const { state, dispatch } = context;

  if (state.savedNotes.length === 0) {
    return <p>No saved notes yet.</p>;
  }

  return (
    <div id="savedNotesPageContainer">
      <h2>Saved Notes</h2>

      <p>Showing {state.savedNotes.length} saved notes</p>

      {state.savedNotes.map((note) => (
        <div id="savedNote" key={note.id}>
          <h4>{note.title}</h4>
          {note.content}

          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_NOTE",
                payload: note.id,
              })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default SavedNotesPage;
