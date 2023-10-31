import React, { useState, useEffect } from "react";
import styles from "./loader.module.css";
import localforage from "localforage";
import { addToCart } from "./Cart";
import { useLoaderData, useNavigation, NavLink } from "react-router-dom";
import { ItemButton } from "./Button.jsx";

async function loadProduct({ params }) {
  let products = await localforage.getItem("products");
  let item;
  products.filter((product) => {
    if (product.id == params.id) item = product;
  });
  return item;
}
async function productsLoader() {
  let id = 0;
  let products = await localforage.getItem("products");
  if (!products) {
    products = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>
        json.map((product) => ({ ...product, id: id++, quantity: 0 }))
      );
  }
  localforage.setItem("products", products);
  return products;
}
function Products() {
  //navigate function
  //load all the products from the api
  const products = useLoaderData();
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
          <div key={product.id} className={styles.container}>
            <NavLink to={`${product.id}`} className={styles.navLink}>
              <img src={product.image} className={styles.image} alt="image" />
              <div className={styles.description}>{product.title}</div>
              <div className={styles.price}>${product.price}</div>
            </NavLink>
            <ItemButton product={product}>Add to Cart</ItemButton>
          </div>
        );
      })}
    </>
  );
}
export { Products, loadProduct, productsLoader };

//      <i className="fas fa-spinner fa-4x fa-spin"></i>
