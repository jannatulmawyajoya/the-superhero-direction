import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Home/Home';


function App() {
  
  return (
    <div className="App">
    <Header></Header>
    <Home></Home>
    </div>
  );
}

export default App;
