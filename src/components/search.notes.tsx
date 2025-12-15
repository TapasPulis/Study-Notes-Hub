import EnglishPage from "../pages/english.page";
import HistoryPage from "../pages/history.page";
import MathsPage from "../pages/maths.page";
import SciencePage from "../pages/science.page";

type Subject = {
  name: string;
  Component: React.FC;
};

const subjects: Subject[] = [
  { name: "english", Component: EnglishPage },
  { name: "history", Component: HistoryPage },
  { name: "maths", Component: MathsPage },
  { name: "science", Component: SciencePage },
];

import { useState } from "react";

const SubjectSearch = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Subject | null>(null);

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search subjects..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setSelected(null);
        }}
      />

      {search && (
        <ul>
          {filteredSubjects.map((subject) => (
            <li
              key={subject.name}
              style={{ cursor: "pointer" }}
              onClick={() => setSelected(subject)}
            >
              {subject.name}
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "1rem" }}>
        {selected && <selected.Component />}
      </div>
    </div>
  );
};

export default SubjectSearch;
