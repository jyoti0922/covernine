import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import About from "./components/About";
import Mission from "./components/Mission";

function App() {
  return (
    <>
      <Header />
      <About />
      <Mission />
    </>
  );
}

export default App;
