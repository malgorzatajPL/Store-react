import {
  CategoryElectronics,
  CategoryJawelery,
  CategoryMensClothing,
  CategoryWomensClothing,
} from "../components/CategoryComponent";
import styled from "styled-components";

const CategorySliderStyle = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const CategorySlider = () => {
  return (
    <CategorySliderStyle>
      <CategoryJawelery />
      <CategoryElectronics />
      <CategoryMensClothing />
      <CategoryWomensClothing />
    </CategorySliderStyle>
  );
};

export default CategorySlider;
