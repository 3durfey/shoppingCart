import React, { useState, useEffect } from "react";
import styles from "./loader.module.css";
import localforage from "localforage";
import { addToCart } from "./Cart";

function Products() {
  const [products, setProducts] = useState([]);
  //load all the products from the api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  if (products.length === 0)
    return (
      <div className={styles.loader}>
        <i className="fas fa-spinner fa-4x fa-spin"></i>
      </div>
    );
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <div className={styles.container}>
              <img src={product.image} className={styles.image} alt="image" />
              <div>{product.title}</div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export { Products };

//      <i className="fas fa-spinner fa-4x fa-spin"></i>