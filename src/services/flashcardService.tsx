// src/services/flashcardService.ts
export const getAllFlashcards = async (deckId: string) => {
  const response = await fetch(
    `http://localhost:4000/api/decks/${deckId}/flashcards`,
    {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    },
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to fetch flashcards");
  }
  return response.json(); // { data: [...], meta: {...} } if paginated
};

export const getFlashcardById = async (deckId: string, flashcardId: string) => {
  const response = await fetch(
    `http://localhost:4000/api/decks/${deckId}/flashcards/${flashcardId}`,
    {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    },
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to fetch flashcard");
  }
  return response.json();
};

export const createFlashcard = async (
  deckId: string,
  flashcardData: { question: string; answer: string },
) => {
  const response = await fetch(
    `http://localhost:4000/api/decks/${deckId}/flashcards`,
    {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(flashcardData),
    },
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create flashcard");
  }
  return response.json();
};

export const updateFlashcard = async (
  deckId: string,
  flashcardId: string,
  updateData: { question?: string; answer?: string },
) => {
  const response = await fetch(
    `http://localhost:4000/api/decks/${deckId}/flashcards/${flashcardId}`,
    {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    },
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to update flashcard");
  }
  return response.json();
};

export const deleteFlashcard = async (deckId: string, flashcardId: string) => {
  const response = await fetch(
    `http://localhost:4000/api/decks/${deckId}/flashcards/${flashcardId}`,
    {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    },
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to delete flashcard");
  }
  return response.json();
};
