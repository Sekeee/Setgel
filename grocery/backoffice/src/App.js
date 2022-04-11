import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import List from "./List";

const App = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/api/add/product", {
        name: name,
        quantity: quantity,
        price: price,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }

        if (res.status === 500 || 400) {
          console.error("failed to add product");
        }
      });
  };

  return (
    <>
      <h1> Add product</h1>
      <input
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        placeholder="quantity"
        onChange={(e) => setQuantity(e.target.value)}
      ></input>
      <input
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        Add fkin prod
      </button>
      <List></List>
    </>
  );
};

export default App;
