import { Outlet } from "react-router-dom";
import Sidebar from "../components-1/sidebar.component";
import BackToTop from "../components-1/back.to.top.component";

const MainLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <BackToTop />
    </div>
  );
};

export default MainLayout;
