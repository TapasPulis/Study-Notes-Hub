import { useState } from "react";

const DifficultyFilter = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  return (
    <div>
      <label>Filter by difficulty:</label>
      <br />
      <select
        name="difficulty"
        onChange={(event) => setSelectedDifficulty(event.target.value)}
        defaultValue="placeholder"
      >
        <option value="placeholder" disabled>
          Choose a difficulty
        </option>
        <option value="easy">Easy</option>
        <option value="normal">Normal</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default DifficultyFilter;
