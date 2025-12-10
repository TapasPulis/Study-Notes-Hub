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
          <a href="#">Ämne</a>
          <a href="#">Title</a>
          <a href="#">Text</a>
          <a href="#">Svårigheter</a>
        </div>
      </div>

      <div className="content">
        <h1>Information</h1>
      </div>
    </>
  );
};

export default Sidebar;
