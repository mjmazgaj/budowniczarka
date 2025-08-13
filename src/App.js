import "./App.css";
import Intro from "./Components/Home/Intro/Intro";
import Info from "./Components/Home/Info/Info";
import Portfolio from "./Components/Home/Portfolio/Portfolio";
import Contact from "./Components/Home/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="body">
        <Intro />
        <Info />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
