import { notes } from "../components/data";

const EnglishPage = () => {
  const englishNotes = notes.filter((note) => note.subject === "English");
  return (
    <div id="englishPageContainer">
      {englishNotes.map((note) => (
        <div key={note.title}>{note.content}</div>
      ))}
    </div>
  );
};

export default EnglishPage;
