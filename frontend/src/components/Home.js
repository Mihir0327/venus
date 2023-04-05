// import React, { useState } from 'react';

import {
  Header,
  MainSlider,
  InteriorSlider,
  ClientSlider,
  StorySlider,
  TestimonialSlider,
  Data,
  NewArrival,
  FurnitureData,
  OurstoryData,
  Footer,
  Category,
} from ".";
import Layout from "./layout/Layout";

function Home() {
  return (
    <>
      <Layout>

      <MainSlider />
      <Data />
      <NewArrival />
      <Category />
      <InteriorSlider />
      <FurnitureData />
      <OurstoryData />
      <ClientSlider />
      <TestimonialSlider />
      <StorySlider />
      </Layout>
     
    </>
  );
}

export default Home;
