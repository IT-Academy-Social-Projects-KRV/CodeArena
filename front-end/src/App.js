import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth_Header from './Components/Header/Auth_Header';
import Header from '../src/Components/Header/Header';
import { Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from "react-toastify";


import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";

{/* Auth_Header - use for registered users */ }
{/* Header - use for unregistered users */ }

function checker() {
  let res
  axios.get("http://127.0.0.1:8000/api/auth/users/me")
    .then(response => {
      res = response.status
      console.log(res)
      localStorage.setItem("validation", res.toString()) 
      
    })

    return localStorage.getItem("validation")
   

};

function App() {


  
  return( 
  <> 
    
    {checker() === "200" ? <Auth_Header /> : <Header />  }
    
    
    <ToastContainer hideProgressBar={true} newestOnTop={true} />
   
    <Footer />
  </>
  )

};


export default App;
