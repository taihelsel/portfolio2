import './App.css';
import Nav from './Components/Nav/Nav';
import Home from "./Sections/Home/Home.js";
import Experience from './Sections/Experience/Experience';
import Projects from './Sections/Projects/Projects';
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home /> */}
      {/* <Experience /> */}
      <Projects />
    </div>
  );
}

export default App;
