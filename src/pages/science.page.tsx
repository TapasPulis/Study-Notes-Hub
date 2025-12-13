import { notes } from "../components-1/data";

const SciencePage = () => {
  const scienceNotes = notes.filter((note) => note.subject === "Science");
  return (
    <div>
      <h3>Science Notes:</h3>
      <br />
      {scienceNotes.map((note) => (
        <div key={note.title}>{note.content}</div>
      ))}
    </div>
  );
};

export default SciencePage;
