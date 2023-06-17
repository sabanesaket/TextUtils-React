// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); //whether dark mode is enabled
  const [alert,setAlert] = useState(null); //alerts on webpage, alert is made an object here

  // function to show alert
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    //function to auto-dismiss alert after timeout
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{  //toggleMode function to change light/dark mode
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#262b28';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
      {/* Setting Navbar Mode (dark/light) according to mode state */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path='/' element={<TextForm heading="TextAnalyzer" showAlert={showAlert} mode={mode}/>}/> 
          <Route exact path='/about' element={<About mode={mode}/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
