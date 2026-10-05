import HourlyRateSection from "../sections/HourlyRateSection";
import PhonebookSection from "../sections/PhonebookSection";
import PromotionalCodeSection from "../sections/PromotionalCodeSection";
import SubscribeSection from "../sections/SubscribeSection";
import TableReservationSection from "../sections/TableReservationSection";
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
        <div className="col-md-6">
          <HourlyRateSection />
        </div>
        <div className="col-md-6">
          <TableReservationSection />
        </div>
        <div className="col-md-6">
          <PhonebookSection />
        </div>
      </div>
    </main>
  );
}
