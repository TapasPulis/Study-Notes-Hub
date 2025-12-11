import type { JSX } from "react";

type Note = {
  subject: string;
  title: string;
  content: JSX.Element;
  difficulty: string;
};

export const mathNotes: Note = {
  subject: "Math",
  title: "Math Notes",
  content: (
    <>
      <h1>Mathematics Study Notes</h1>

      <h2>1. Numbers & Operations</h2>
      <ul>
        <li>Natural Numbers: 1, 2, 3, ...</li>
        <li>Whole Numbers: 0, 1, 2, 3, ...</li>
        <li>Integers: ... -3, -2, -1, 0, 1 ...</li>
        <li>Rational Numbers: can be written as a fraction</li>
        <li>Irrational Numbers: cannot be written as a fraction (π, √2)</li>
        <li>Real Numbers: rational + irrational numbers</li>
      </ul>

      <h2>2. Algebra</h2>
      <p>Algebraic Expressions</p>
      <ul>
        <li>Term: number, variable, or product (e.g., 3x)</li>
        <li>Coefficient: number multiplying a variable</li>
        <li>Constant: number with no variable</li>
      </ul>

      <h2>3. Trigonometry</h2>
      <ul>
        <li>sin θ = opposite / hypotenuse</li>
        <li>cos θ = adjacent / hypotenuse</li>
        <li>tan θ = opposite / adjacent</li>
      </ul>
    </>
  ),

  difficulty: "hard",
};

export const englishNotes: Note = {
  subject: "English",
  title: "English Notes",
  content: (
    <>
      <h1>English Study Notes</h1>

      <h2>1. Parts of Speech</h2>
      <ul>
        <li>Noun: a person, place, thing, or idea (e.g., teacher, city)</li>
        <li>Pronoun: replaces a noun (e.g., he, she, they)</li>
        <li>Verb: expresses action or state of being (e.g., run, is)</li>
        <li>Adjective: describes a noun (e.g., tall, blue)</li>
        <li>
          Adverb: modifies a verb, adjective, or another adverb (e.g., quickly)
        </li>
        <li>Preposition: shows relationship (e.g., on, under, beside)</li>
        <li>Conjunction: connects words or phrases (e.g., and, but, or)</li>
        <li>Interjection: expresses emotion (e.g., wow!, oh!)</li>
      </ul>

      <h2>2. Sentence Structure</h2>
      <ul>
        <li>Simple Sentence: one independent clause</li>
        <li>
          Compound Sentence: two independent clauses joined by conjunction
        </li>
        <li>Complex Sentence: independent + dependent clause</li>
        <li>Compound-Complex: two independent + one dependent clause</li>
      </ul>

      <h2>3. Figures of Speech</h2>
      <ul>
        <li>Simile: comparison using "like" or "as" (e.g., brave as a lion)</li>
        <li>Metaphor: direct comparison (e.g., time is money)</li>
        <li>Personification: giving human qualities to non-human things</li>
        <li>Hyperbole: exaggerated statements</li>
        <li>Alliteration: repeated consonant sounds</li>
        <li>Onomatopoeia: sound words (e.g., buzz, bang)</li>
      </ul>
    </>
  ),
  difficulty: "easy",
};
export const historyNotes: Note = {
  subject: "History",
  title: "History Notes",
  content: (
    <>
      <h1>History Study Notes</h1>

      <h2>1. What Is History?</h2>
      <ul>
        <li>History is the study of past events.</li>
        <li>
          Helps us understand how societies, cultures, and governments
          developed.
        </li>
        <li>Provides lessons to avoid repeating past mistakes.</li>
      </ul>

      <h2>2. Ancient Civilizations</h2>
      <ul>
        <li>Mesopotamia: First civilization; invented writing (cuneiform).</li>
        <li>Ancient Egypt: Known for pyramids, pharaohs, and hieroglyphics.</li>
        <li>Indus Valley: Advanced city planning (Harappa, Mohenjo-Daro).</li>
        <li>Ancient China: Dynasties, Great Wall, early inventions.</li>
        <li>Ancient Greece: Birthplace of democracy, philosophy, Olympics.</li>
        <li>Ancient Rome: Republic → Empire; law, architecture, roads.</li>
      </ul>

      <h2>3. Sources of History</h2>
      <h3>Primary Sources</h3>
      <ul>
        <li>First-hand accounts from the time period.</li>
        <li>Examples: letters, diaries, photographs, official documents.</li>
      </ul>

      <h3>Secondary Sources</h3>
      <ul>
        <li>Interpretations based on primary sources.</li>
        <li>Examples: textbooks, articles, documentaries.</li>
      </ul>
    </>
  ),
  difficulty: "normal",
};

export const scienceNotes: Note = {
  subject: "Science",
  title: "Science Notes",
  content: (
    <>
      <h1>Science Study Notes</h1>

      <h2>1. Branches of Science</h2>
      <ul>
        <li>Physics: study of matter, energy, motion, and forces.</li>
        <li>
          Chemistry: study of substances, their properties, and reactions.
        </li>
        <li>Biology: study of living organisms.</li>
        <li>Earth Science: study of Earth, its structure, and processes.</li>
        <li>Environmental Science: study of ecosystems and human impact.</li>
      </ul>

      <h2>2. Physics Basics</h2>
      <h3>Matter</h3>
      <ul>
        <li>Anything that has mass and occupies space.</li>
        <li>States of matter: solid, liquid, gas, plasma.</li>
      </ul>

      <h3>Force & Motion</h3>
      <ul>
        <li>Force: a push or pull.</li>
        <li>
          Newton's Laws:
          <ul>
            <li>1st: Objects stay at rest or in motion unless acted upon.</li>
            <li>2nd: F = ma (force = mass × acceleration).</li>
            <li>3rd: Every action has an equal and opposite reaction.</li>
          </ul>
        </li>
        <li>Speed = distance / time.</li>
        <li>Velocity: speed with direction.</li>
      </ul>

      <h3>Energy</h3>
      <ul>
        <li>Kinetic Energy: energy of motion.</li>
        <li>Potential Energy: stored energy.</li>
        <li>Energy cannot be created or destroyed—only transformed.</li>
      </ul>

      <h2>3. Chemistry Basics</h2>
      <h3>Atoms & Elements</h3>
      <ul>
        <li>Atom: smallest unit of matter.</li>
        <li>Parts: protons (+), neutrons (0), electrons (−).</li>
        <li>Element: substance made of one type of atom.</li>
        <li>Periodic Table: organizes elements by atomic number.</li>
      </ul>

      <h3>Compounds & Mixtures</h3>
      <ul>
        <li>Compound: two or more elements chemically bonded (H₂O).</li>
        <li>Mixture: substances physically combined (air, saltwater).</li>
      </ul>

      <h3>Chemical Reactions</h3>
      <ul>
        <li>Reactants → Products.</li>
        <li>Signs of reaction: gas, heat, color change, precipitate.</li>
        <li>
          Law of Conservation of Mass: matter is not created or destroyed.
        </li>
      </ul>

      <h2>4. Biology Basics</h2>
      <h3>Cell Theory</h3>
      <ul>
        <li>All living things are made of cells.</li>
        <li>Cells are the basic unit of life.</li>
        <li>Cells come from pre-existing cells.</li>
      </ul>
    </>
  ),
  difficulty: "hard",
};
