import axios from "axios";
import { useState } from "react";

export default function ApiPut() {
  const [responseData, setResponseData] = useState(null);

  const client = axios.create({
    baseURL: "https://fakestoreapi.com/products"
  });

  const payload = {
    "id": 1,
    "title": "Hello World",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  };

  const addUpdate = () => {
    client.put('/1', payload)
      .then((res) => {
        console.log(res.data);
        setResponseData(res.data);
      })
      .catch((error) => {
        console.error("There was an error updating the product!", error);
      });
  };

  return (
    <>
      <h1>Update</h1>
      <button onClick={addUpdate}>Hit me!</button>
      <p>{responseData?.title}</p>
    </>
  );
}