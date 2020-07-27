import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Groups from './Components/Groups/Groups';
import MultiMedia from './Components/MultiMedia/MultiMedia';
import GuestAppearances from './Components/GuestAppearances/GuestAppearances';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
    </div>
  );
}

export default App;