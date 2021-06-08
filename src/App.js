import CrescendoEatsApi from './api/api';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/Routes';
import NavBar from "./components/NavBar";


function App() {
    return (
      <div className="App">
          <BrowserRouter>
            <NavBar/>
            <Routes/>
          </BrowserRouter>
      </div>
    );
}

export default App;
