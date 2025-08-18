import { IconContext } from "react-icons/lib";
import Navbar from "./Navbar";
import Content from "./content";
import Skills from "./Skills";
import Footer from "./PortFoot";
function App() {
  document.title = "First Portfolio";
  return (
    <IconContext.Provider value={{ size: "1em" }}>
      <Navbar />
      <Content />
      <Skills />
      <Footer />
    </IconContext.Provider>
  );
}

export default App;
