import { notes } from "../components/data";

const EnglishPage = () => {
  const englishNotes = notes.filter((note) => note.subject === "English");
  return (
    <div>
      <h3>English notes:</h3>
      <br />
      {englishNotes.map((note) => (
        <div key={note.title}>{note.content}</div>
      ))}
    </div>
  );
};

export default EnglishPage;
