/* 3. raccogli il feedback dell'utente tramite un voto numerico (radio button)
e un commento testuale fornendo una risposta personalizzata in base al punteggio ottenuto*/

import { useState } from "react";

import { votes } from "../../lib/vars";

export default function UserFeedbackSection() {
  const [selectedVote, setSelectedVote] = useState(null);
  const [comment, setComment] = useState("");

  function handleSetComment(e) {
    setComment(e.target.value);
  }

  function handleSetSelectedVote(e) {
    setSelectedVote(Number(e.target.value));
  }

  const commentFeedback = votes.find((item) => item.id === selectedVote);

  return (
    <section className="bg-success-subtle p-4">
      <h2>User Feedback</h2>

      <div className="d-flex flex-column">
        {votes.map((vote) => (
          <div key={vote.id} className="d-flex gap-1">
            {/* Voto numerico */}
            <input
              id={vote.label}
              type="radio"
              name="vote"
              className="form-check-input mb-3"
              value={vote.id}
              checked={selectedVote === vote.id}
              onChange={handleSetSelectedVote}
            />
            {/* Stelle */}
            <label htmlFor={vote.label} className="form-check-label">
              {vote.stars}
            </label>
          </div>
        ))}
        {/* Comment */}
        <textarea
          className="form-control"
          name="feedback"
          id="feedback"
          value={comment}
          onChange={handleSetComment}
        ></textarea>
        {selectedVote && (
          <p className="mt-2 text-success fw-bold">
            Grazie! Hai valutato il servizio come: {commentFeedback?.label}.
          </p>
        )}
      </div>
    </section>
  );
}
