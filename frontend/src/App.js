import React, { useState } from "react";
import './App.css';
import LoginForm from './components/LoginForm';
import Footer from './components/footer'
import NavBar from "./components/header";
import BudgetSummary from "./components/budgetSummary";
import ActivityLog from "./components/activityLog";
import RegistrationForm  from "./components/registrationForm"
import ModalForm from "./components/addExpenseForm";
import DuoLoginForm from "./components/DuoLoginForm";
import { Duo } from "@mui/icons-material";
function App() {
  return (
    <div className="App">
      <div> 
       <NavBar/>
      </div>
      <div>
        <RegistrationForm/>
        <LoginForm/>
      </div>
        <BudgetSummary/>
        <ActivityLog/>
        <ModalForm/>
      <div>
    
      </div>
        <DuoLoginForm/>
    </div>
  );
}

export default App;
