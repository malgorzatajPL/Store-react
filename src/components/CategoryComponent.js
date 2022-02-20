import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const CategoryItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 50%;
  justify-content: center;
  .rec-carousel-wrapper {
    width: 700px;
    height: 600px;
    .rec-carousel-item {
      display: flex;
    }
  }
  .singleItem {
    width: 520px;
    height: 420px;
    padding: 20px;
    position: relative;
    display: flex;
    img {
      height: inherit;
      position: absolute;
    }
    h3 {
      position: absolute;
      background-color: white;
      box-shadow: 3px 3px 3px #999;
      font-size: 26px;
      padding: 20px;
      left: 85px;
      text-align: center;
      top: 100px;
      right: 235px;
      text-transform: capitalize;
      letter-spacing: 1px;
    }
  }
`;

export function CategoryJawelery() {
  const carousel_ref = useRef(null);
  const autoplay_speed = 3000;
  const [jawelery, setJawelery] = useState("");
  const getJawelery = () => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        // console.log(response.data);
        setJawelery(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getJawelery();
  }, []);
  return (
    <CategoryItem>
      <Carousel
        ref={carousel_ref}
        itemsToShow={1}
        enableAutoPlay
        autoPlaySpeed={autoplay_speed}
        showArrows={false}
        pagination={false}
        onNextEnd={({ index }) => {
          if (index + 1 === jawelery.length) {
            setTimeout(() => {
              carousel_ref.current.goTo(0);
            }, autoplay_speed);
          }
        }}
      >
        {jawelery ? (
          jawelery.map((data) => {
            return (
              <div className="singleItem" key={jawelery.id}>
                <img
                  src={data.image}
                  alt="slider img"
                  style={{ width: "320px" }}
                />
                <h3>{data.category}</h3>
              </div>
            );
          })
        ) : (
          <h3>No data yet</h3>
        )}
      </Carousel>
    </CategoryItem>
  );
}

export function CategoryElectronics() {
  const carousel_ref = useRef(null);
  const autoplay_speed = 3000;
  const [electronics, setElectronics] = useState("");

  const getElectronics = () => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        // console.log(response.data);
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
    <CategoryItem>
      <Carousel
        ref={carousel_ref}
        itemsToShow={1}
        enableAutoPlay
        autoPlaySpeed={autoplay_speed}
        showArrows={false}
        pagination={false}
        onNextEnd={({ index }) => {
          if (index + 1 === electronics.length) {
            setTimeout(() => {
              carousel_ref.current.goTo(0);
            }, autoplay_speed);
          }
        }}
      >
        {electronics ? (
          electronics.map((data) => {
            return (
              <div className="singleItem" key={electronics.id}>
                <img
                  src={data.image}
                  alt="slider img"
                  style={{ width: "320px" }}
                />
                <h3>{data.category}</h3>
              </div>
            );
          })
        ) : (
          <h3>No data yet</h3>
        )}
      </Carousel>
    </CategoryItem>
  );
}

export function CategoryMensClothing() {
  const carousel_ref = useRef(null);
  const autoplay_speed = 3000;
  const [MClothing, setMClothing] = useState("");
  console.log(MClothing);
  const getMClothing = () => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => {
        // console.log(response.data);
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
    <CategoryItem>
      <Carousel
        ref={carousel_ref}
        itemsToShow={1}
        enableAutoPlay
        autoPlaySpeed={autoplay_speed}
        showArrows={false}
        pagination={false}
        onNextEnd={({ index }) => {
          if (index + 1 === MClothing.length) {
            setTimeout(() => {
              carousel_ref.current.goTo(0);
            }, autoplay_speed);
          }
        }}
      >
        {MClothing ? (
          MClothing.map((data) => {
            return (
              <div className="singleItem" key={MClothing.id}>
                <img
                  src={data.image}
                  alt="slider img"
                  style={{ width: "320px" }}
                />
                <h3>{data.category}</h3>
              </div>
            );
          })
        ) : (
          <h3>No data yet</h3>
        )}
      </Carousel>
    </CategoryItem>
  );
}

export function CategoryWomensClothing() {
  const carousel_ref = useRef(null);
  const autoplay_speed = 3000;
  const [WClothing, setWClothing] = useState("");

  const getWClothing = () => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => {
        // console.log(response.data);
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
    <CategoryItem>
      <Carousel
        ref={carousel_ref}
        itemsToShow={1}
        enableAutoPlay
        autoPlaySpeed={autoplay_speed}
        showArrows={false}
        pagination={false}
        onNextEnd={({ index }) => {
          if (index + 1 === WClothing.length) {
            setTimeout(() => {
              carousel_ref.current.goTo(0);
            }, autoplay_speed);
          }
        }}
      >
        {WClothing ? (
          WClothing.map((data) => {
            return (
              <div className="singleItem" key={WClothing.id}>
                <img
                  src={data.image}
                  alt="slider img"
                  style={{ width: "320px" }}
                />
                <h3>{data.category}</h3>
              </div>
            );
          })
        ) : (
          <h3>No data yet</h3>
        )}
      </Carousel>
    </CategoryItem>
  );
}
