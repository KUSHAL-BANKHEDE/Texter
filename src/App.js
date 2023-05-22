import { useState } from 'react';
import './App.css';
//import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
//import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const[mode ,setMode ]=useState('light');

  const toggleMode =() => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#111528';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar tital = "Texter"    mode ={mode} toggleMode = {toggleMode}/> 
    {/* <Alert alert="This is alert"/> */}
    
    <div className="container my-5" >
    <TextForm  heading = "Enter The text to analyze" mode ={mode}/>
     
    </div>
    </>
  );
}

export default App;
