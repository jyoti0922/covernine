import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import About from "./components/About";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import FAQ from "./components/FAQ";
import Whatcheerfriend from "./components/Whatcheerfriend";
import Cheergym from "./components/Cheergym";
// import Slider1 from "./components/Slider1";

function App() {
  return (
    <>
      <Hero />
      <Cheergym />
      {/* <Whatcheerfriend /> */}
      {/* <Slider1 /> */}
      <About />
      <Mission />
      <FAQ />
    </>
  );
}

export default App;
