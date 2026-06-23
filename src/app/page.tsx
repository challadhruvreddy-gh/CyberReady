import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import Webinars from "@/components/Webinars";
import Stats from "@/components/Stats";
import Tools from "@/components/Tools";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Programs />
        <Webinars />
        <Stats />
        <Tools />
        <Join />
      </main>
      <Footer />
    </>
  );
}
