import AddNotes from "../components/add.notes.component";
import DifficultyFilter from "../components/difficulty.filter.component";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Study Notes Hub!</h1>
      <DifficultyFilter />
      <AddNotes />
    </div>
  );
};

export default HomePage;
