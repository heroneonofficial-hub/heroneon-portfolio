import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Videos from "@/components/Videos";
import Livestream from "@/components/Livestream";
import Character from "@/components/Character";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Videos />
        <Livestream />
        <Character />
        <About />
      </main>
      <Footer />
    </>
  );
}
