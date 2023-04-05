
import React, { useState } from 'react';


import { Header,MainSlider, InteriorSlider, ClientSlider, StorySlider, TestimonialSlider,Data,NewArrival,FurnitureData,OurstoryData,Footer } from '.';
import Category from './Category';






function Home() {

  return (
    
    <>
    <Header/>
    <MainSlider/>
    <Data />
    <NewArrival />
    <Category/>
    <InteriorSlider />
    <FurnitureData />
    <OurstoryData />
    <ClientSlider/>
    <TestimonialSlider/>
    <StorySlider />
    <Footer /> 
   
    </>
  );
}

export default Home;
  