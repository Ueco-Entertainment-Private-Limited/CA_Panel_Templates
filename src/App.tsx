import "./App.css";
import ContactSupport from "./components/ContactSupport";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AboutSection from "./features/about/AboutSection";
import AuditTax from "./features/audit-tax/AuditTax";
import BusinessRegistration from "./features/business-reg/BusinessReg";
import HeroSlider from "./features/hero-slider/HeroSlider";
import NgoRegistration from "./features/ngo-reg/NgoReg";
import Trademark from "./features/trademark/Trademark";

function App() {
  return (
    <>
      <ContactSupport />
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <BusinessRegistration />
        <NgoRegistration />
        <Trademark />
        <AuditTax />
      </main>
      <Footer />
    </>
  );
}
export default App;
