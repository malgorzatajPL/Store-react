import axios from "axios";
import React from "react";

const baseURL = "https://fakestoreapi.com/products";

export default function App() {
    const [image, setImage] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setImage(response.data);
      });
    }, []);
    console.log(image);
    if (!image) return null;
  
    return (
      <div>
        <h1>{image.title}</h1>
        <p>{image.body}</p>
      </div>
    );
  }
  