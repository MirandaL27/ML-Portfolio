import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [currentSelectedLink, setCurrentSelectedLink] = useState("About");

  function RenderPage(){
    if(currentSelectedLink === "About"){
      return <About />;
    }
    else if(currentSelectedLink === "Contact"){
      return <Contact />;
    }
    else if(currentSelectedLink === "Portfolio"){
      return <Portfolio />;
    }
    else {
      return <Resume />;
    }
  }

  return (
    <div>
      <Nav currentSelectedLink={currentSelectedLink} setCurrentSelectedLink={setCurrentSelectedLink}/>
      <main>
         {RenderPage()} 
      </main>
    </div>
  );
}

export default App;
