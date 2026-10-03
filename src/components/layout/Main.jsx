import PromotionalCodeSection from "../sections/PromotionalCodeSection";
import SubscribeSection from "../sections/SubscribeSection";
import UserFeedbackSection from "../sections/UserFeedbackSection";

export default function Main() {
  return (
    <main className="container">
      <div className="row g-3">
        {/* <!-- Prima riga --> */}
        <div className="col-md-4">
          <SubscribeSection />
        </div>
        <div className="col-md-4">
          <PromotionalCodeSection />
        </div>
        <div className="col-md-4">
          <UserFeedbackSection />
        </div>

        {/* <!-- Seconda riga --> */}
        <div className="col-md-6">Ex 4</div>
        <div className="col-md-6">Ex 5</div>
      </div>
    </main>
  );
}

/* 4. calcola il preventivo moltiplicando ore e tariffa oraria, aggiungendo automaticamente un extra al totale se viene superata una certa soglia lavorativa
 */
/* 5. registra i dati di prenotazione del tavolo confermando all'utente i dettagli inseriti (nome, n. ospiti e data) in una scheda di riepilogo
 */
/* 6. crea una rubrica telefonica consentendo l'inserimento di nuovi nominativi e la loro eliminazione */
