import { ContactSupport } from "./features/Contact-Support/ContactSupport";
import Header from "./layouts/Header";

export default function App() {
  return (
    <>
    <ContactSupport />
      <Header />
      {/* // <main>
      //   <HeroSlider />
      //   <AboutSection />
      //   <BusinessRegistration />
      //   <NgoRegistration />
      //   <Trademark />
      //   <AuditTax />
      // </main>
      // <Footer /> */}
    </>
  )
}



// <motion.div 
//   initial={{ opacity: 0, y: 20 }} 
//   animate={{ opacity: 1, y: 0 }}
//   className="p-10"
// >
//   <div className="bg-primary text-primary-foreground p-4 rounded-lg">
//     Motion is Working
//   </div>
// </motion.div>
