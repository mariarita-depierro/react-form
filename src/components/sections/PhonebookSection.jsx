/* 6. crea una rubrica telefonica consentendo
l'inserimento di nuovi nominativi e la loro eliminazione*/

import { BookUser } from "lucide-react";
import { useState } from "react";
import { fieldsPhonebook } from "../../lib/vars";
import { contacts } from "../../lib/vars";

export default function PhonebookSection() {
  const [fields, setFields] = useState(fieldsPhonebook);
  const [contact, setContact] = useState(contacts);

  function handleSetFields(e) {
    const { value, name } = e.target;

    setFields((activeValue) => ({ ...activeValue, [name]: value }));
  }

  function handleSetContact(e) {
    e.preventDefault();
    const newContact = { id: crypto.randomUUID(), ...fields };
    setContact((activeValue) => [...activeValue, newContact]);

    //Reset
    setFields(fieldsPhonebook);
  }

  function handleSetRemoveContact(idContactToRemove) {
    setContact((arrayPrecedente) =>
      arrayPrecedente.filter((item) => item.id !== idContactToRemove),
    );
  }

  return (
    <section className="container bg-secondary-subtle p-4 mb-2">
      <h2 className="mb-4">
        Your Phonebook
        <BookUser className="ms-2" size={30} />
      </h2>

      <form onSubmit={handleSetContact}>
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
        {/* Numero di telefono*/}
        <label htmlFor="number" className="form-label mt-1">
          Numero di telefono
        </label>
        <input
          id="number"
          type="number"
          className="form-control"
          value={fields.number}
          name="number"
          onChange={handleSetFields}
        />
        <button type="submit" className="btn btn-secondary mt-3">
          Add
        </button>
      </form>

      {contact.map((element, index) => (
        <div key={element.id} className="d-flex gap-2 row">
          <p className="h4 mt-3 col">Contatto N.{index + 1}:</p>
          <p>Nome: {element.name}</p>
          <p>Cognome: {element.surname}</p>
          <p>N. Cellulare: {element.number}</p>
          <button
            type="button"
            className="mt-2 btn btn-danger"
            onClick={() => handleSetRemoveContact(element.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </section>
  );
}
