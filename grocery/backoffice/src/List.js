import React, { useEffect, useState } from "react";
import axios from "axios";
import { fullurl } from "./config";

function List() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${fullurl}/get/products`);
      if (response.status === 200) {
        console.log(response.data);
        setList(response.data);
      }
      setLoading(false);
    })();
  });
  return loading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      {list.map((data) => {
        return (
          <ul>
            <li>{data.name}</li>
            <li>{data.id}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default List;
