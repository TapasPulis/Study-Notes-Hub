import { createContext, useReducer } from "react";
import { savedNotesReducer, initialState } from "./saved.notes.reducer";
import type { SavedNotesState, SavedNotesAction } from "./saved.notes.reducer";
import type { ReactNode } from "react";

type SavedNotesContextType = {
  state: SavedNotesState;
  dispatch: React.Dispatch<SavedNotesAction>;
};

export const SavedNotesContext = createContext<SavedNotesContextType | null>(
  null
);

export const SavedNotesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(savedNotesReducer, initialState);

  return (
    <SavedNotesContext.Provider value={{ state, dispatch }}>
      {children}
    </SavedNotesContext.Provider>
  );
};
