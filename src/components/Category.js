import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export function Category() {
   const [category, setCategory] = useState("");
  const getCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        console.log(response.data);
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={category}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Category" />}
      />
    </>
  );
}
