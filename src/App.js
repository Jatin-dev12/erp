import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './/Layout'
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Dashbord from './Components/Dashboard' ;
import User from './Components/User';


function App() {

 
  return (

    <BrowserRouter >

      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Login/>} />
          <Route path="Home" element={<Home />} />
          <Route path="Dashboard" element={<Dashbord />} />
          <Route path="Login" element={<Login />} />
          <Route path="User" element={<User />} />


          

          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
 };
 
 

export default App;