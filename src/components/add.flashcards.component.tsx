// src/components/AddFlashcardForm.tsx
import { useState } from "react";
import { createFlashcard } from "../services/flashcardService";

interface Props {
  deckId: string;
  onCreated?: () => void;
}

export default function AddFlashcardForm({ deckId, onCreated }: Props) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createFlashcard(deckId, { question, answer })
      .then(() => {
        setQuestion("");
        setAnswer("");
        onCreated?.();
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
}
