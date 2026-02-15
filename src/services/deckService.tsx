// frontend/services/deckService.ts
export const createDeck = async (deckData: {
  title: string;
  description: string;
}) => {
  const response = await fetch("http://localhost:4000/api/decks", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(deckData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create deck");
  }

  return response.json();
};

export const getAllDecks = async () => {
  const response = await fetch("http://localhost:4000/api/decks", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch decks");
  }

  const data = await response.json();
  return data;
};

export const getDeckById = async (deckId: string) => {
  const response = await fetch(`http://localhost:4000/api/decks/${deckId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch deck");
  }

  const data = await response.json();
  return data;
};

export const updateDeck = async (
  deckId: string,
  updateData: { title?: string; description?: string },
) => {
  const response = await fetch(`http://localhost:4000/api/decks/${deckId}`, {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to update deck");
  }

  return response.json();
};

export const deleteDeck = async (deckId: string) => {
  const response = await fetch(`http://localhost:4000/api/decks/${deckId}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to delete deck");
  }

  return response.json();
};
