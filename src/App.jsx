import React,{useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import VantaBackground from './assets/VantaBackground';

function App() {
   
    useEffect(() => {
    document.title = "Anjali Chauhan Portfolio";
  }, []);

  return (
    <div className="scroll-smooth">
        <VantaBackground />
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );

}

export default App;

