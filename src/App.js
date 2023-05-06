import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import About from "./components/About";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Team from "./components/Team";

function App() {
  return (
    <>
      {/* <Hero /> */}
      <About />
      <Team />
      <Mission />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
