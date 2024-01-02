import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const togglebutton = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Has Been Enabled !!", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled !!", "success");
    }
  }

  return (
    <Router>
      <>
        <Navbar title='TextUtils' home="Home" about="About" mode={mode} toggle={togglebutton} />
        <Alerts alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode = {mode}/>} />
          <Route exact path="/" element={<TextForm name="Enter the text below" showAlert={showAlert} mode={mode} uName="Convert Into UpperCase" lName="Convert Into LowerCase" tName="Convert to Title" iName="Convert To Inverse" />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
