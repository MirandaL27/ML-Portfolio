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
      <footer>
        <p>Github: <a href='https://github.com/MirandaL27'>https://github.com/MirandaL27</a></p>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/miranda-lane-9428331ba/'>https://www.linkedin.com/in/miranda-lane-9428331ba/</a></p>
      </footer>
    </div>
  );
}

export default App;
