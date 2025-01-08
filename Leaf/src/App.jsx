
import './App.css'
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import Notice from './pages/Notice';
import {Routes, Route} from "react-router-dom";
import Header from './layout/Header';


function App() {
  

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
  </div>
  );
}


export default App
