import "./index.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main.layout";
import HomePage from "./pages/home.page";
import MathsPage from "./pages/maths.page";
import EnglishPage from "./pages/english.page";
import HistoryPage from "./pages/history.page";
import SciencePage from "./pages/science.page";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/maths" element={<MathsPage />} />
          <Route path="/english" element={<EnglishPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/science" element={<SciencePage />} />
        </Route>
      </Routes>
    </>
  );
}
