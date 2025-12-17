import { notes } from "../components/data";

const SciencePage = () => {
  const scienceNotes = notes.filter((note) => note.subject === "Science");
  return (
    <div id="sciencePageContainer">
      {scienceNotes.map((note) => (
        <div key={note.title}>{note.content}</div>
      ))}
    </div>
  );
};

export default SciencePage;
