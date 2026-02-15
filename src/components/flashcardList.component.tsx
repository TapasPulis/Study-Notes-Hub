// src/components/FlashcardList.tsx
import { useEffect, useState } from "react";
import {
  getAllFlashcards,
  deleteFlashcard,
  updateFlashcard,
} from "../services/flashcardService";

interface Flashcard {
  _id: string;
  question: string;
  answer: string;
}

interface FlashcardListProps {
  deckId: string;
}

export default function FlashcardList({ deckId }: FlashcardListProps) {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  const fetchFlashcards = () => {
    getAllFlashcards(deckId)
      .then((res) => setFlashcards(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchFlashcards();
  }, [deckId]);

  const handleDelete = (id: string) => {
    deleteFlashcard(deckId, id)
      .then(() => fetchFlashcards())
      .catch(console.error);
  };

  const handleUpdate = (id: string, update: Partial<Flashcard>) => {
    updateFlashcard(deckId, id, update)
      .then(() => fetchFlashcards())
      .catch(console.error);
  };

  return (
    <div>
      <h2>Flashcards</h2>
      <ul>
        {flashcards.map((card) => (
          <li key={card._id}>
            <strong>Q:</strong> {card.question} <br />
            <strong>A:</strong> {card.answer} <br />
            <button onClick={() => handleDelete(card._id)}>Delete</button>
            <button
              onClick={() => handleUpdate(card._id, { question: "Updated?" })}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
