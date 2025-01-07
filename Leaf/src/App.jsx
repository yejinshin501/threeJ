
import './App.css'
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import Notice from './pages/Notice';
import {Routes, Route} from "react-router-dom";


function App() {
  

  return (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/notice" element={<Notice />}/>
  </Routes>
  );
}


export default App
