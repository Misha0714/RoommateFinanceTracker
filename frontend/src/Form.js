import logo from './logo.svg';
import './Form.css';
import emailjs from '@emailjs/browser'; 
import sendEmail from './EmailFunc.js';

import React, {useRef} from 'react';

/* service_ir6o99o */

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    {/* Set up sendForm here: https://www.emailjs.com */}
    emailjs.sendForm('service_ir6o99o', 'template_a7qrcdl', form.current, 'R8Suz9o57NTK5a2s9')
    .then((result) => {
        console.log(result.text);
        e.target.reset(); 
        alert('Email Sent!'); 
    }, (error) => {
        console.log(error.text);
        alert('Error - email me directly instead'); 
    });
  };
  
  return (
    <div id="contact">
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='from_name'></input>
            <input type="email" className="email" placeholder='Your Email' name='to_email'></input>
            <textarea className='msg' rows="8" placeholder='Your Message' name='message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
        </form>
    </div>

  );
}

export default App;