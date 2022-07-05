import './App.css';
import { useState } from 'react';
import Nav from './Components/Nav/Nav';
import Home from "./Sections/Home/Home.js";
import Experience from './Sections/Experience/Experience';
import Projects from './Sections/Projects/Projects';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';
import ResumeBuilder from './Sections/ResumeBuilder/ResumeBuilder';
import resume from "./resume.pdf";
function App() {
  const [downloadResume, setDownloadResume] = useState(false);
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);
  const handleResumeClick = () => {
    setShowDownloadPrompt(true);
  }
  const handleDownloadDone = () => {
    setDownloadResume(false);
  }
  const downloadPrompt = () => {
    const promptResult = window.confirm("You are about to download the Resume.pdf file.\r\nSelect 'Cancel' to view the resume in a new tab instead.");
    if (promptResult) {
      setDownloadResume(true);
    } else {
      window.open(resume, "_blank");
    }
    setShowDownloadPrompt(false);
  }
  return (
    <div className="App">
      <Nav handleResumeClick={handleResumeClick} />
      <Home />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      {showDownloadPrompt ? downloadPrompt() : null}
      {downloadResume ? <ResumeBuilder handleDownloadDone={handleDownloadDone} /> : null}
    </div>
  );
}

export default App;
