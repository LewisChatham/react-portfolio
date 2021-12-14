import { useState, useEffect } from 'react';

// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState("about")

  useEffect(() => {
    document.title = `Lewis Chatham - ${currentPage}`
  }, [currentPage]);
  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === "about" ? <About /> : ""}
      {currentPage === "portfolio" ? <Portfolio /> : ""}
      {currentPage === "contact" ? <Contact /> : ""}
      {currentPage === "resume" ? <Resume /> : ""}
      <Footer />
    </div>
  );
}

export default App;
