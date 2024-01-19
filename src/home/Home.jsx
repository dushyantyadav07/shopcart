import React, { useState } from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryShoeCase from "./CategoryShoeCase";
import Register from "./Register";
import LocationSprade from "./LocationSprade";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Sponsor from "./Sponsor";

function Home() {
  return (
    <>
      <Banner />
      <HomeCategory />
      <CategoryShoeCase />
      <Register />
      <LocationSprade />
      <AboutUs />
      <AppSection />
      <Sponsor />
    </>
  );
}

export default Home;
