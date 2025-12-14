import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/GalleryWrapper";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
}
