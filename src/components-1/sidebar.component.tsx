import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="app">
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          MENU
        </button>

        <div className={`sidebar ${open ? "open" : ""}`}>
          <a href="#">Maths</a>
          <a href="#">English</a>
          <a href="#">History</a>
          <a href="#">Science</a>
        </div>
      </div>

      <div className="content">
        <h1>Information</h1>
      </div>
    </>
  );
};

export default Sidebar;
