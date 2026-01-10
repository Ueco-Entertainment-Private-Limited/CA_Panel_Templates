import "./App.css";
import ContactSupport from "./components/contactSupport";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/header";
import AboutSection from "./features/about/AboutSection";
import AuditTax from "./features/audit-tax/AuditTax";
import BusinessRegistration from "./features/business-reg/businessReg";
import HeroSlider from "./features/hero-slider/HeroSlider";
import NgoReg from "./features/ngo-reg/NgoReg";
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
        <NgoReg />
        <Trademark />
        <AuditTax />
      </main>
      <Footer />
    </>
  );
}
export default App;
