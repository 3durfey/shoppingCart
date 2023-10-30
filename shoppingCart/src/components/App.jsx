import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import styles from "./app.module.css";
import { v4 as uuid } from "uuid";

async function productLoader() {
  let id = 0;
  let products = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) =>
      json.map((product) => ({ ...product, id: id++, quantity: 0 }))
    );
  return products;
}
function App() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <Outlet />
      </div>
    </>
  );
}

export { App, productLoader };
