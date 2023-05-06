import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import About from "./components/About";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <FAQ />
    </>
  );
}

export default App;
