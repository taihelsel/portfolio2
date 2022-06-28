import './App.css';
import Nav from './Components/Nav/Nav';
import Home from "./Sections/Home/Home.js";
import Experience from './Sections/Experience/Experience';
import Projects from './Sections/Projects/Projects';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home />
      <Experience /> */}
      <Projects />
      {/*       
      
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
