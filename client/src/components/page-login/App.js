import React from 'react';
import './App.css';
import Tabbar from './Tabbar';
import Login_main from './Login_main';
import { BrowserRouter as Router } from 'react-router-dom';




function App() {
  return (
    <Router>
      <>
      <Tabbar/>
      <Login_main/>
      </>
    </Router>
    
  );
}

export default App;
