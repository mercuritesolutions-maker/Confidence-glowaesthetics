import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Treatments from "./components/Treatments";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import LocationHours from "./components/LocationHours";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F5F0E8] overflow-x-hidden selection:bg-[#4A7C7C] selection:text-[#F5F0E8]">
      {/* Editorial Decorative Background Highlights */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#6B7152]/3 blur-[120px]" />
        <div className="absolute bottom-[30%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#D4A5A5]/4 blur-[130px]" />
        <div className="absolute bottom-[5%] left-[5%] w-[30rem] h-[30rem] rounded-full bg-[#4A7C7C]/2 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Home Hero Introduction */}
        <Hero />

        {/* Aggregated Reviews & Trust Rating stats */}
        <TrustBar />

        {/* Dynamic Interactive Treatments / Spa Menu */}
        <Treatments />

        {/* NHS Practitioner Bio and Clinical standards */}
        <About />

        {/* Responsive Testimonials / Mobile Carousel */}
        <Testimonials />

        {/* Before and After / Glow Results Showcase */}
        <Gallery />

        {/* Location map, Directions, opening hours table and Call CTA */}
        <LocationHours />

        {/* Bottom Booking Call to Action */}
        <FinalCTA />

        {/* Detailed Address list and Floating WhatsApp bubble */}
        <Footer />
      </div>
    </div>
  );
}

