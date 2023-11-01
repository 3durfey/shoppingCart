import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [shoppingBool, setShoppingBool] = useState("home");
  return (
    <header className={styles.header}>
      <Link
        to={"/"}
        className={styles.title}
        onClick={() => setShoppingBool("home")}
      >
        Shop
      </Link>
      <div className={styles.buttonContainer}>
        <Link
          to={"products"}
          className={
            shoppingBool === "products" ? styles.buttonSelected : styles.button
          }
          onClick={() => setShoppingBool("products")}
        >
          Shop
        </Link>
        <Link
          to={"cart"}
          className={
            shoppingBool === "cart" ? styles.buttonSelected : styles.button
          }
        >
          <i
            className="fa-solid fa-cart-shopping"
            onClick={() => setShoppingBool("cart")}
          ></i>
        </Link>
      </div>
    </header>
  );
}
export { Header };
