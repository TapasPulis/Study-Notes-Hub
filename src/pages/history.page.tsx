import { notes } from "../components/data";

const HistoryPage = () => {
  const historyNotes = notes.filter((note) => note.subject === "History");
  return (
    <div>
      <h3>History Notes:</h3>
      <br />
      {historyNotes.map((note) => (
        <div key={note.title}>{note.content}</div>
      ))}
    </div>
  );
};

export default HistoryPage;
