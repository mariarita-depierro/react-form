/* 2. valida un codice promozionale inserito dall'utente mostrando
lo sconto applicato o segnalando l'invalidità del codice*/

import { TicketPercent } from "lucide-react";
import { FaceSlightlyFrowning } from "lucide-react";
import { useState } from "react";
import { discountCodes } from "../../lib/vars";
import { PartyPopper } from "lucide-react";

export default function PromotionalCodeSection() {
  const [promotionaleCode, setPromotionaleCode] = useState("");

  function handleSetPromotionaleCode(e) {
    setPromotionaleCode(e.target.value);
  }

  const foundCode = discountCodes.find(
    (item) =>
      item.code.toLowerCase().trim() === promotionaleCode.toLowerCase().trim(),
  );

  return (
    <section className="bg-danger p-4 text-white">
      <h2>Promotional Code</h2>
      <label htmlFor="code" className="form-label">
        Inserisci un Codice Sconto <TicketPercent />
      </label>
      <input
        id="code"
        type="text"
        className="form-control mb-3"
        value={promotionaleCode}
        onChange={handleSetPromotionaleCode}
      />

      {promotionaleCode === "" ? (
        "Inserisci un codice sconto!"
      ) : foundCode ? (
        <span>
          Sconto del ${foundCode.discount}% applicato! <PartyPopper size={18} />
        </span>
      ) : (
        <span className="d-flex gap-2">
          Sconto non valido!
          <FaceSlightlyFrowning size={22} />
        </span>
      )}
    </section>
  );
}
