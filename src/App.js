import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import About from "./components/About";
import Mission from "./components/Mission";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <Header />
      <About />
      <Mission />
      <FAQ />
    </>
  );
}

export default App;
