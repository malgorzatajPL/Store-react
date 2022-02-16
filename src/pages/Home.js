 
import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { CategoryElectronics, CategoryJawelery, CategoryMensClothing, CategoryWomensClothing } from "../components/CategoryComponent";
import Header from "../components/Header";
import Slider from "../components/Slider";

const Home = () => {
 
  return (
    <div>
      <Header />
      <Slider /> 
      <CategoryJawelery/>
      <CategoryElectronics />
      <CategoryMensClothing/> 
      <CategoryWomensClothing/>
    </div>
  );
};

export default Home;
