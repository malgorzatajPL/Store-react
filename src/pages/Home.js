import React from "react";
import { Banner } from "../components/Banner";
import CategorySlider from "../components/CategorySlider";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { PopularProducts } from "../components/PopularProducts";
import { Sale } from "../components/Sale";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Banner />
      <Sale />
      {/* <CategorySlider />
      <PopularProducts/>  */}
    </div>
  );
};

export default Home;
