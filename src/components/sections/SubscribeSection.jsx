/* 1. gestisci l'iscrizione alla newsletter nascondendo
il form e mostrando un messaggio di ringraziamento dopo l'invio*/

import { FaceSlightlySmiling } from "lucide-react";
import { useState } from "react";

const FieldsValues = {
  name: " ",
  surname: " ",
  email: " ",
  feedback: " ",
};

export default function SubscribeSection() {
  const [fields, setFields] = useState(FieldsValues);

  function handleSetFields(e) {
    const { value, name } = e.target;

    setFields((activeValue) => ({ ...activeValue, [name]: value }));
  }

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);

    //Reset
    setFields(FieldsValues);
  }

  return (
    <section className="bg-primary p-4 text-white">
      <h2 className="mb-2">Subscribe to Newsletter</h2>

      {/* Feedback di iscrizione alla newsletter */}
      {isSubmitted ? (
        <div className="alert alert-warning">
          <h3 className="h6">
            Grazie di esserti iscritto alla nostra newsletter!{" "}
            <FaceSlightlySmiling size={18} />
          </h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="form-control mb-1"
            value={fields.name}
            name="name"
            onChange={handleSetFields}
          />
          {/* Surname */}
          <label htmlFor="surname" className="form-label">
            Surname
          </label>
          <input
            id="surname"
            type="text"
            className="form-control"
            value={fields.surname}
            name="surname"
            onChange={handleSetFields}
          />
          {/* Email */}
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={fields.email}
            name="email"
            onChange={handleSetFields}
          />
          <button className="btn btn-warning mt-2">Submit</button>
        </form>
      )}
    </section>
  );
}
