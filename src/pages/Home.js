 
import React from "react";
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
