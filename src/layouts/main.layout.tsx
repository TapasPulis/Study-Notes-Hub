import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar.component";
import BackToTop from "../components/back.to.top.component";
import { useRef } from "react";
import SubjectSearch from "../components/search.notes";

const MainLayout = () => {
  const topRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="layout">
      <div ref={topRef}></div> {/* Ref is here to mark the top of the layout */}
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <BackToTop topRef={topRef} /> {/* Passing the ref as a prop*/}
      <SubjectSearch />
    </div>
  );
};

export default MainLayout;
