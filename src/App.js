import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
function App() {
  return (
    <div >
    <Navbar/>
    <Routes>
    <Route path="/Home" element={<Home/>} />
  

  </Routes>
    </div>
  );
}

export default App;
