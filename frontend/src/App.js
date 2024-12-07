import logo from './logo.svg';
import './App.css';
import {sendEmail} from './Form.js'

import emailjs from '@emailjs/browser'; 

import React, {useRef} from 'react';

import Email from './Form.js'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Email></Email>
      </header>
    </div>
  );
}

export default App;
