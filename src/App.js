
  import './App.css';
  import { Route,Routes } from "react-router-dom";
  import React, { useState } from 'react';
  import { AboutUs, Home,ContactUs, InteriorService } from './components'
import Category from './components/Category';
  
  export default function App(){
    return(
      <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="seatingFurniture" element={<Category/>}/>
        <Route path="contactus" element={<ContactUs/>}/>
        <Route path="interiorservice" element={<InteriorService/>}/>
      </Routes>
      </>
    )
  }