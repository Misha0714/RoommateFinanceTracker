import React, { useState } from "react";
import './App.css';
import LoginForm from './components/LoginForm';
import Footer from './components/footer'
import NavBar from "./components/header";

function App() {
  return (
    <div className="App">
      <NavBar/>     
      <LoginForm />
      <Footer/>
    </div>
  );
}

export default App;
