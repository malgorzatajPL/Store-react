import React from "react";
import { Banner } from "../components/Banner";
import CategorySlider from "../components/CategorySlider";
import Header from "../components/Header";
import { PopularProducts } from "../components/PopularProducts";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Banner/>
      <CategorySlider />
      <PopularProducts/> 
    </div>
  );
};

export default Home;
