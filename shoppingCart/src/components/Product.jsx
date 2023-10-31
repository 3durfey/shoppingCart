import { useLoaderData } from "react-router-dom";
import styles from "./loader.module.css";
import { addToCart } from "./Cart";
import Button from "react-bootstrap/Button";

function Product() {
  const product = useLoaderData();
  return (
    <div className={styles.container}>
      <img src={product.image} className={styles.image} alt="image" />
      <div>{product.title}</div>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      <Button>Test</Button>
    </div>
  );
}
export { Product };
