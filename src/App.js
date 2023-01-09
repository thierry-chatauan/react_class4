import React from 'react'
import Header from './Header'
import './App.css';

function App() {
  return (<Header name="Company" links={["about", "buy", "contact", "log in"]}></Header>)
}

export default App;
