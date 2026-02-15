// src/components/DeckList.tsx
import { useEffect, useState } from "react";
import { getAllDecks } from "../services/deckService";
import FlashcardList from "./flashcardList.component";
import AddFlashcardForm from "./add.flashcards.component";

interface Deck {
  _id: string;
  title: string;
  description: string;
  isPublic: boolean;
}

export default function DeckList() {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(null);

  useEffect(() => {
    getAllDecks()
      .then((res) => setDecks(res.data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <h2>My Decks</h2>
        <ul>
          {decks.map((deck) => (
            <li
              key={deck._id}
              style={{
                cursor: "pointer",
              }}
              onClick={() => setSelectedDeckId(deck._id)}
            >
              {deck.title} {deck.isPublic ? "(Public)" : "(Private)"}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {selectedDeckId && (
          <>
            <h2>Flashcards</h2>
            <AddFlashcardForm deckId={selectedDeckId} onCreated={() => {}} />
            <FlashcardList deckId={selectedDeckId} />
          </>
        )}
      </div>
    </div>
  );
}
