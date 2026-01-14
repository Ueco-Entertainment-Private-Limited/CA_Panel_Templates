// import Contact from "@/features/Contact/ContactBar";
import Navigation from "@/features/Navigation/Navigation";
import MainNavigation from "@/features/MainNavigation/MainNavigation";

export default function Header() {
  return (
    <header
      className="relative w-full min-h-[70vh] flex flex-col text-white 
                 /* 2026 Glassmorphism Background: Deep charcoal gradient */
                 bg-[#0a0a0a] bg-[radial-gradient(circle_at_top_right,#1a1a1a,#000000)]"
    >
      {/* Optional: Animated Glass Glow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full flex flex-col h-full backdrop-blur-[2px]">
        {/* <Contact /> */}

        {/* Navigation Wrapper with subtle glass border-bottom */}
        <div className="w-full border-b border-white/5">
          <Navigation />
        </div>

        <div className="flex-1 flex flex-col">
          <MainNavigation />
        </div>
      </div>
    </header>
  );
}
