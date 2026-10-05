/* 5. registra i dati di prenotazione del tavolo confermando
all'utente i dettagli inseriti (nome, n. ospiti e data) in una scheda di riepilogo*/

import { FaceSlightlySmiling } from "lucide-react";
import { Utensils } from "lucide-react";
import { useState } from "react";

const fieldsTableReservation = {
  name: " ",
  surname: " ",
  numberGuests: "",
  reservationDate: "",
};

export default function TableReservationSection() {
  const [fields, setFields] = useState(fieldsTableReservation);

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSetFields(e) {
    const { value, name } = e.target;

    setFields((activeValue) => ({ ...activeValue, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section className="bg-info p-4 ">
      <h2>
        Your Table Reservation <Utensils />
      </h2>

      {isSubmitted ? (
        <div className="alert alert-primary">
          <h3 className="h6">
            Prenotazione avvenuta con successo!{" "}
            <FaceSlightlySmiling size={18} />
          </h3>
          <p className="h2">Dettagli Prenotazione:</p>
          <p>Nome: {fields.name}</p>
          <p>Cognome: {fields.surname}</p>
          <p>N. Ospiti: {fields.numberGuests}</p>
          <p>Data e Ora Prenotazione: {fields.reservationDate}</p>
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
          {/* N.Ospiti */}
          <label htmlFor="numberGuests" className="form-label">
            N.Ospiti
          </label>
          <input
            id="numberGuests"
            type="number"
            className="form-control"
            value={fields.numberGuests}
            name="numberGuests"
            onChange={handleSetFields}
          />
          {/* Data Prenotazione */}
          <label htmlFor="reservationDate" className="form-label mt-1">
            Data Prenotazione
          </label>
          <input
            id="reservationDate"
            type="datetime-local"
            className="form-control"
            value={fields.reservationDate}
            name="reservationDate"
            onChange={handleSetFields}
          />
          <button className="btn btn-primary mt-3">Submit</button>
        </form>
      )}
    </section>
  );
}
