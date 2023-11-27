

import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./interfaces";
import { ProductsTableBodyItem } from "./ProductsTableBodyItem/ProductsTableBodyItem";
import "./styles.css"

export const ProductsTableBody = () => {

  const [products, setProducts] = useState<Product[]>();


  useEffect(() => {
    const URL = "http://localhost:8080/sensor/api/products/all";

    const config: any = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };
    axios
      .get(URL, config)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.data.error.message);
      });
  }, []);


  return (
    <tbody>
      {products?.map((prod) => (
        <ProductsTableBodyItem
          key={prod.id}
          id={prod.id}
          name={prod.name}
          description={prod.description}
          price={prod.price}
        />
      ))}
    </tbody>
  );
}
