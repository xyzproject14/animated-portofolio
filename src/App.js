import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden lg:px-24'>
      <Header />
      <Banner />
      <Navbar />
      <About />
      <Services />
      <Projects />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
}

export default App;
