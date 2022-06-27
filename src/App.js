import './App.css';
import Nav from './Components/Nav/Nav';
import Home from "./Sections/Home/Home.js";
import Experience from './Sections/Experience/Experience';
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Experience />
    </div>
  );
}

export default App;
