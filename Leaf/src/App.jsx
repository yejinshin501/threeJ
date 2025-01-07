
import './App.css'
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import {Routes, Route} from "react-router-dom";


function App() {
  

  return (
  <Routes>
    <Route path="/" element={<LandingPage />} />
  </Routes>
  );
}


export default App
