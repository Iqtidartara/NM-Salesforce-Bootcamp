import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import Pakages from "@/components/Pakages";
import Acadmey from "@/components/Acadmey";

import Navbar from "@/components/Navbar";


import Contact from "@/components/Contact";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // b B
    <main>
      <Navbar />
      <HomeSection />
      <About />
      <Pakages />
      <Acadmey />
      <Demo />  
      <Contact />
      <Footer />
    </main>
  );
}
