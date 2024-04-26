
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Collaboration from "./components/Collaboration";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:[5.25] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
