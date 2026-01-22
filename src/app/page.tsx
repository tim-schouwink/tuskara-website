import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutHeader from "@/components/AboutHeader";
import Vision from "@/components/Vision";
import Creator from "@/components/Creator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-[72px]">
        <AboutHeader />
        <Hero />
        <Vision />
        <Creator />
        <Footer />
      </div>
    </main>
  );
}
