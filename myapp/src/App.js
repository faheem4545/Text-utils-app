import './App.css';
 import About from './component/About';
import Navbar from './component/Navbar.js'
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
    setMode ('dark')
    document.body.style.backgroundColor ='#250c0c'
    showAlert("Dark mode has been enable", "Success")
    }
    else {
      setMode ('light')
      document.body.style.backgroundColor ='white'
      showAlert("Light mode has been enable", "Success")
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout (() =>{
          setAlert(null);
        }, 900);
  }
  return (
<>
<Router>
<Navbar title="Text Utils 2"
        homeText="home"
        aboutText="About" 
        mode = {mode} toggleMode = {toggleMode}/>
       <Alert alert={alert}/>
      
      <div className='container my-3'>
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode ={mode} showAlert ={showAlert}/>} />
        <Route exact path="About" element={<About  mode ={mode}  />} />
      </Routes>
      
      </div>
      </Router>
   
    
    
</>

  );
}

export default App;
