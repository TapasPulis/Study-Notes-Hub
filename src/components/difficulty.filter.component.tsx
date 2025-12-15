import { useState } from "react";
import { notes } from "./data";

const DifficultyFilter = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDifficulty(event.target.value);
  };

  const filterNotes =
    selectedDifficulty === ""
      ? []
      : notes.filter(
          (note) => note.difficulty === selectedDifficulty
        ); /* If no difficulty is selected then filterNotes becomes an empty array if a 
        difficulty is selected the notes array will be filtered through
        and return only the subjects where the difficulty matches with the selected difficulty. 
        If the difficulties don't match it just returns an empty array.*/

  return (
    <div>
      <label>Filter by difficulty:</label>
      <br />
      <select
        name="difficulty"
        onChange={handleChange}
        defaultValue="placeholder"
      >
        <option value="placeholder" disabled>
          Choose a difficulty
        </option>
        <option value="easy">Easy</option>
        <option value="normal">Normal</option>
        <option value="hard">Hard</option>
      </select>

      {selectedDifficulty &&
        (filterNotes.length === 0 ? (
          <>
            <p>
              Showing {filterNotes.length} of {notes.length} notes
            </p>
            <h3>Notes for {selectedDifficulty} level:</h3>
            <p>Sorry. There are no notes that match this difficulty</p>
          </>
        ) : (
          filterNotes.map((note) => (
            <>
              <p>
                Showing {filterNotes.length} of {notes.length} notes
              </p>
              <h3>Notes for {selectedDifficulty} level:</h3>
              <div key={note.title}>{note.content}</div>
            </>
          )) /* If a difficulty is selected we check if the filterNotes array is empty
      if it is then that means that there were no difficulty matches. If the array isn't empty 
      then there were difficulty matches so map through the filterNotes array to render them*/
        ))}
    </div>
  );
};

export default DifficultyFilter;
