import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:[5.25] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
