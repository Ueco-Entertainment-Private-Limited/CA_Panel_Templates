// import Contact from "@/features/Contact/ContactBar";
import Navigation from "@/features/Navigation/Navigation";
import MainNavigation from "@/features/MainNavigation/MainNavigation";

export default function Header() {
  return (
    <header
      className="relative w-full min-h-[70vh] flex flex-col text-white 
                 /* Premium Black & Gold Gradient Background */
                 bg-[#000000] bg-[radial-gradient(circle_at_top_right,#1a1a1a,#0a0a0a)] overflow-hidden"
    >
      {/* 
        Gold 'Ambient Light' Glow Effects for depth
      */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-Right Gold Glow (Matches your logo's accent color #D4AF37) */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] translate-x-[20%] -translate-y-[20%] bg-[#D4AF37]/8 blur-[150px] rounded-full" />

        {/* Bottom-Left Subtle White Glow */}
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] -translate-x-[20%] translate-y-[20%] bg-white/3 blur-[100px] rounded-full" />
      </div>

      {/* Main Content Container: Added centering classes below */}
      <div className="relative z-10 w-full flex flex-col h-full">
        {/* <Contact /> */}

        {/* Navigation Wrapper with subtle glass border-bottom and blur */}
        <div className="w-full border-b border-white/5 backdrop-blur-sm">
          <Navigation />
        </div>

        {/*
          This container now centers all remaining components (MainNavigation and anything else you add)
          vertically and horizontally within the remaining space.
        */}
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <MainNavigation />
        </div>
      </div>
    </header>
  );
}
