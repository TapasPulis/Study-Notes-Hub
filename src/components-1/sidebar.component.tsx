import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./dark.light";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <header className="navbar">
        <button onClick={() => setOpen(!open)}>MENU</button>
        <nav className={`sidebar ${open ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/maths">Maths</Link>
          <Link to="/english">English</Link>
          <Link to="/history">History</Link>
          <Link to="/science">Science</Link>
          <ThemeToggle />
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
