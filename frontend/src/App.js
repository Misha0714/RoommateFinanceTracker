import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginForm from './components/LoginForm';
import Footer from './components/footer'
import NavBar from "./components/header";
import BudgetSummary from "./components/budgetSummary";
import ActivityLog from "./components/activityLog";
import RegistrationForm  from "./components/registrationForm"
import ModalForm from "./components/addExpenseForm";
import DuoLoginForm from "./components/DuoLoginForm";
import DashBoard from "./components/dashBoard"
import LandingPage from "./LandingPage/LandingPage"
import ArticlePage from "./ArticlePage/ArticlePage"
import { Duo } from "@mui/icons-material";

import SigninPage from "./signin/signinPage";
import SignupPage from "./signup/signupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<LandingPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="blog" element={<ArticlePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
