
  import './App.css';
  import { Route,Routes } from "react-router-dom";
  import React, { useState } from 'react';
  import { AboutUs, Home,ContactUs, InteriorService, Category } from './components'
import SeatingFurniture from './components/SeatingFurniture';
import PageNotFound from './components/PageNotFound';
import SignInPage from './components/SignInPage';
import LoginPage from './components/LoginPage';
  
  export default function App(){
    return(
      <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:loginUser" element={<Home/>}/>
        <Route path="category" element={<Category/>}/>
        <Route path="seatingFurniture" element={<SeatingFurniture/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>    
        <Route path="contactus" element={<ContactUs/>}/>
        <Route path="signin" element={<SignInPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="signup" element={<SignInPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        {/* <Route path="category" element={<Category/>}/> */}

        <Route path="interiorservice" element={<InteriorService/>}/>
      </Routes>
      </>
    )
  }