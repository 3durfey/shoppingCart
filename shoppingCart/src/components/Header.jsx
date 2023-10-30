import styles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className={styles.title}>Shop</h1>
      <Link to={"products"} className={styles.button}>
        Shop
      </Link>
      <Link to={"cart"} className={styles.button}>
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </header>
  );
}
export { Header };
