import type { Note } from "./data";

export type SavedNotesAction =
  | { type: "SAVE_NOTE"; payload: Note }
  | { type: "REMOVE_NOTE"; payload: number };

export type SavedNotesState = {
  savedNotes: Note[];
};

export const initialState: SavedNotesState = {
  savedNotes: [],
};

export const savedNotesReducer = (
  state: SavedNotesState,
  action: SavedNotesAction
): SavedNotesState => {
  switch (action.type) {
    case "SAVE_NOTE":
      return {
        savedNotes: [...state.savedNotes, action.payload],
      };
    case "REMOVE_NOTE":
      return {
        savedNotes: state.savedNotes.filter(
          (note) => note.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
