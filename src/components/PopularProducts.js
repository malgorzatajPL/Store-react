import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const PopularProductsStyle = styled.div`
h2{
    
}
`;

export const PopularProducts = () => {
  

const [popularProducts, setPopularProducts] = useState("");
  const getPopularProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
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
      <h2>
          Popular items
      </h2>
  {popularProducts ? (
    popularProducts.map((data) => {
        return (
        <div className="singleItem" key={popularProducts.id}>
          <img
            src={data.image}
            alt="slider img"
            style={{ width: "320px" }}
          />
        </div>
      );
    })
  ) : (
    <h3>No data yet</h3>
  )}
  </PopularProductsStyle>
  );
}

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
