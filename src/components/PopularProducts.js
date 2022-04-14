import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const IconsStyle = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
  .icon-style {
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
  `;
  const PopularProductsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .single-item { 
    padding: 20px;
    position: relative;
    &:hover ${IconsStyle} {
      opacity: 1;
    }
  }
`;
export const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState("");
  const getPopularProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => {
        setPopularProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPopularProducts();
  }, []);
  return (
    <PopularProductsStyle>
      {popularProducts ? (
        popularProducts.map((data) => {
          return (
            <div className='single-item' key={popularProducts.id}>
              <img
                src={data.image}
                alt='slider img'
                style={{ height: "300px" }}
              />
              <IconsStyle>
                <SearchIcon
                  className='icon-style'
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    margin: "0 5px",
                    boxShadow: "0px 1px 4px #333",
                  }}
                />
                <FavoriteBorderIcon
                  className='icon-style'
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    margin: "0 5px",
                    boxShadow: "0px 1px 4px #333",
                  }}
                />
                <AddShoppingCartIcon
                  className='icon-style'
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    margin: "0 5px",
                    boxShadow: "0px 1px 4px #333",
                  }}
                />
              </IconsStyle>
            </div>
          );
        })
      ) : (
        <h3>No data yet</h3>
      )}
    </PopularProductsStyle>
  );
};

//   return (
//       <>

//       {popularProducts.map(item=>(
//           <PopularProductsStyle>
// <div className='product' key={item.id}>{item.id}</div>
// <div className='d'>{item.price}</div>

//     </PopularProductsStyle>
//     ))}
//       </>
//   )
// }
