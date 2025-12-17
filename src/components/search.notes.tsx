import { useState } from "react";
import EnglishPage from "../pages/english.page";
import HistoryPage from "../pages/history.page";
import MathsPage from "../pages/maths.page";
import SciencePage from "../pages/science.page";

type Subject = {
  name: string;
  Component: React.FC;
};

const subjects: Subject[] = [
  { name: "English", Component: EnglishPage },
  { name: "History", Component: HistoryPage },
  { name: "Maths", Component: MathsPage },
  { name: "Science", Component: SciencePage },
];

const SubjectSearch = () => {
  const [search, setSearch] = useState("");

  const match = subjects.find(
    (subject) => subject.name.toLowerCase() === search.toLowerCase()
  );

  const SelectedComponent = match?.Component ?? null;

  return (
    <div id="searchNotesContainer">
      <h2>Search for the subject:</h2>
      <input
        type="text"
        placeholder="Search subjects..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      {search && (
        <ul>
          {subjects
            .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
            .map((subject) => (
              <li
                key={subject.name}
                style={{ cursor: "pointer" }}
                onClick={() => setSearch(subject.name)}
              >
                {subject.name}
              </li>
            ))}
        </ul>
      )}

      <div style={{ marginTop: "1rem" }}>
        {SelectedComponent ? (
          <SelectedComponent />
        ) : (
          <p>No subject selected.</p>
        )}
      </div>
    </div>
  );
};

export default SubjectSearch;
