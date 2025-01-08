
import './App.css'
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import BoardList from './pages/BoardList';
import BoardCreate from './pages/BoardCreate';
import {Routes, Route} from "react-router-dom";
import Header from './layout/Header';


function App() {
  

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/boardList" element={<BoardList />} />
        <Route path="/boardCreate" element={<BoardCreate />} />
      </Routes>
  </div>
  );
}


export default App
