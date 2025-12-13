import { notes } from "../components-1/data";
const MathsPage = () => {
  const mathNotes = notes.filter((note) => note.subject === "Maths");
  return (
    <div>
      <h3>Maths Notes:</h3>
      <br />
      {mathNotes.map((note) => (
        <div key={note.title}>{note.content}</div>
      ))}
    </div>
  );
};

export default MathsPage;
