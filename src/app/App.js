import React from 'react';
import './App.css';
//component/feature imports
import { Scene } from '../features/Scene/Scene.js';
import { Pitch } from '../features/Pitch/Pitch.js';
import { About } from '../features/About/About.js';
import { Contact } from '../features/Contact/Contact.js';

function App() {
  return (
    <div className="App">
      <Scene />
      <Pitch />
      <About />
      <Contact />
    </div>
  );
}

export default App;
