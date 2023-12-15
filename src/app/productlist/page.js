// "use client"; //for client side api call

import ProductEvent from "./productevent";

// import { useEffect, useState } from "react";
export default async function ProductList() {
  //for client side api call
  //   const [product, setProduct] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         let response = await fetch("https://dummyjson.com/products");
  //         let data = await response.json();
  //         setProduct(data.products);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);
  //for server side
  let products = await product();
  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <div key={item.id}>
          {" "}
          <h3>{item.title}</h3>
         <ProductEvent price={item.price}/>
        </div>
      ))}
    </div>
  );
}
async function product() {
  try {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
