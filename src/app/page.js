import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Engineering from "./components/Engineering";
import Photography from "./components/Photography";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Engineering />
      {/* <Photography /> */}
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
