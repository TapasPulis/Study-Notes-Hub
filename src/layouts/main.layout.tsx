import { Outlet } from "react-router-dom";
import Sidebar from "../components-1/sidebar.component";
const MainLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
