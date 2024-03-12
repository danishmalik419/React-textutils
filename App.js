import React, { useState } from 'react'; // Correct import statement for React
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Import BrowserRouter and Route
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textarea from './components/Textarea';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils-Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils-Light Mode";
    }
  };

  return (
    <>
     {/* <Router>  */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
       <div className="container">
      
     
       {/* <Routes> */}
          {/* <Route exact path="/">
            
          </Route> */}
          {/* <Route exact path="/about"element={<About />} /> */}
          {/* <Route exact path="/"element={} /> */}
          <Textarea showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Routes> */}


      </div>
      </>
      );
        }
    /* // </Router> */
  
/* } */

export default App;
