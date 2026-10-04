/* 4. calcola il preventivo moltiplicando ore e tariffa oraria,
aggiungendo automaticamente un extra al totale se viene superata
una certa soglia lavorativa*/

import { useState } from "react";

const hourlyRate = 25;
const maxHours = 8;
const extraHourlyRate = 10;

export default function HourlyRateSection() {
  const [hoursWorked, setHoursWorked] = useState("");

  function handleSetHoursWorked(e) {
    setHoursWorked(Number(e.target.value));
  }

  const baseHourlyRate = hoursWorked * hourlyRate;

  return (
    <section className="bg-warning p-4">
      <h2>Calculate Hourly Rate</h2>
      {/* Ora */}
      <label htmlFor="hours" className="form-label">
        Ore lavorate
      </label>
      <input
        id="hours"
        type="text"
        className="form-control mb-1"
        value={hoursWorked}
        onChange={handleSetHoursWorked}
      />

      {hoursWorked > maxHours ? (
        <p className="mt-2">
          La tariffa totale è: {baseHourlyRate + extraHourlyRate} €
        </p>
      ) : (
        <p className="mt-2">La tariffa base è: {baseHourlyRate} €</p>
      )}
    </section>
  );
}
