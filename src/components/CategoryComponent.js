import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CategoryItem = styled.div`
 display:flex;
 flex-wrap:wrap;
.singleItem{
    width:250px;
    height:250px;
    padding:20px;
    img{
        width:100px!important;
    }
}
  
`;

export function CategoryJawelery() {
    const [jawelery, setJawelery] = useState("");
    console.log(jawelery);
    const getJawelery = () => {
        axios
        .get("https://fakestoreapi.com/products/category/jewelery")
        .then((response) => {
            console.log(response.data);
            setJawelery(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }; 
    
    useEffect(() => {
        getJawelery(); 
    }, []);
    return (
        <CategoryItem key={jawelery.id}>
      {jawelery ? (
        jawelery.map((data) => {
          return (
            <div className="singleItem">
              <img
                src={data.image}
                alt="slider img"
                style={{ width: "320px" }}
              />
              <h1>
                  {data.title}
              </h1>
            </div>
          );
        })
      ) : (
        <h3>No data yet</h3>
      )}
    </CategoryItem>
      );
}
      export function CategoryElectronics() {
        const [electronics, setElectronics] = useState("");

        const getElectronics = () => {
            axios
            .get("https://fakestoreapi.com/products/category/electronics")
            .then((response) => {
                console.log(response.data);
                setElectronics(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        };
        
        useEffect(() => { 
            getElectronics();
        }, []);
      return (
          <CategoryItem key={electronics.id}>
      {electronics ? (
        electronics.map((data) => {
          return (
            <div className="singleItem">
              <img
                src={data.image}
                alt="slider img"
                style={{ width: "320px" }}
              />
              <h1>
                  {data.title}
              </h1>
            </div>
          );
        })
      ) : (
        <h3>No data yet</h3>
      )}
    </CategoryItem>
  );
}
      export function CategoryMensClothing() {
        const [MClothing, setMClothing] = useState("");

        const getMClothing = () => {
            axios
            .get("https://fakestoreapi.com/products/category/men's clothing")
            .then((response) => {
                console.log(response.data);
                setMClothing(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        };
        
        useEffect(() => { 
            getMClothing();
        }, []);
      return (
          <CategoryItem key={MClothing.id}>
      {MClothing ? (
        MClothing.map((data) => {
          return (
            <div className="singleItem">
              <img
                src={data.image}
                alt="slider img"
                style={{ width: "320px" }}
              />
              <h1>
                  {data.title}
              </h1>
            </div>
          );
        })
      ) : (
        <h3>No data yet</h3>
      )}
    </CategoryItem>
  );
}
      export function CategoryWomensClothing() {
        const [WClothing, setWClothing] = useState("");

        const getWClothing = () => {
            axios
            .get("https://fakestoreapi.com/products/category/women's clothing")
            .then((response) => {
                console.log(response.data);
                setWClothing(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        };
        useEffect(() => { 
            getWClothing();
        }, []);
      return (
          <div className="Electronics" key={WClothing.id}>
      {WClothing ? (
        WClothing.map((data) => {
          return (
            <div className="singleItem">
              <img
                src={data.image}
                alt="slider img"
                style={{ width: "320px" }}
              />
              <h1>
                  {data.title}
              </h1>
            </div>
          );
        })
      ) : (
        <h3>No data yet</h3>
      )}
    </div>
  );
}
