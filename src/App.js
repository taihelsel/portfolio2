import './App.css';
import { useState } from 'react';
import Nav from './Components/Nav/Nav';
import Home from "./Sections/Home/Home.js";
import Experience from './Sections/Experience/Experience';
import Projects from './Sections/Projects/Projects';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';
import ResumeBuilder from './Sections/ResumeBuilder/ResumeBuilder';
import { resumeType } from './portfolioInfo';
import resume from "./resume.pdf";
function App() {
  const [downloadResume, setDownloadResume] = useState(false);
  const handleResumeClick = () => {
    if (resumeType === "local") {
      //local resume
      window.open(resume, "_blank");
    } else {
      //dynamically built resume
      setDownloadResume(true);
    }
  }
  const handleDownloadDone = () => {
    setDownloadResume(false);
  }
  return (
    <div className="App">
      <Nav handleResumeClick={handleResumeClick} />
      <Home />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      {downloadResume ? <ResumeBuilder handleDownloadDone={handleDownloadDone} /> : null}
    </div>
  );
}

export default App;
