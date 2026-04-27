import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ThreeColumnUSP from "@/components/home/ThreeColumnUSP";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import FeaturedServices from "@/components/home/FeaturedServices";
import FAQAccordion from "@/components/home/FAQAccordion";
import HowToGetTeaser from "@/components/home/HowToGetTeaser";
import ContactsRow from "@/components/home/ContactsRow";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ThreeColumnUSP />
        <FeaturedRooms />
        <FeaturedServices />
        <FAQAccordion />
        <HowToGetTeaser />
        <ContactsRow />
      </main>
      <Footer />
    </>
  );
}
