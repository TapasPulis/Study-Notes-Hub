import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import { SavedNotesProvider } from "./components/saved.notes.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SavedNotesProvider>
        <App />
      </SavedNotesProvider>
    </BrowserRouter>
  </StrictMode>
);
