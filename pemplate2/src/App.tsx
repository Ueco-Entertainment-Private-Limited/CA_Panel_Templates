import About from "./features/About/About";
import AuditTax from "./features/Audit-Tax/AuditTax";
import BusinessRegistration from "./features/Business-Reg/BusinessRegistration";
import { ContactSupport } from "./features/Contact-Support/ContactSupport";
import HeroSlide from "./features/Hero-Section/HeroSlide";
import NGO_Registration from "./features/NGO_REG/NGO_Registration";
import Trademark_Registration from "./features/Trademark/Trademark_Registration";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

export default function App() {
  return (
    <>
      <ContactSupport />
      <Header />
      <main>
        <HeroSlide />
        <About />
        <BusinessRegistration />
        <NGO_Registration />
        <Trademark_Registration />
        <AuditTax />
      </main>
      <Footer />
    </>
  );
}
