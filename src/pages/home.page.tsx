import AddNotes from "../components/add.notes.component";
import DifficultyFilter from "../components/difficulty.filter.component";
import SubjectSearch from "../components/search.notes";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Study Notes Hub!</h1>
      <DifficultyFilter />
      <AddNotes />
      <br />
      <SubjectSearch />
    </div>
  );
};

export default HomePage;
