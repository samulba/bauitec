import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Services } from "@/components/Services";
import { Marquee } from "@/components/Marquee";
import { Numbers } from "@/components/Numbers";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Statement />
        <Services />
        <Marquee />
        <Numbers />
        <Testimonials />
        <Process />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
