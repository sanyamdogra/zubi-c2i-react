import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarZubi from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
    <NavbarZubi/>
    <Home/>
    </div>
  );
}

export default App;
