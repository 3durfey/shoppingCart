import { useLoaderData } from "react-router-dom";
import styles from "./loader.module.css";
import { addToCart } from "./Cart";
import Button from "react-bootstrap/Button";

function Product() {
  const product = useLoaderData();
  return (
    <div className={styles.container}>
      <img src={product.image} className={styles.image} alt="image" />
      <div className={styles.information}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.starRank}>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <div className={styles.details}>
          <ul>
            <li>Fabric Type: 100% Cotton; Sport Grey: 90% Cotton, 10%</li>
            <li>Care Instructions: Machine Wash</li>
            <li>Closure Type: Pull On</li>
            <li>Country of Origin: Honduras</li>
          </ul>
        </div>
      </div>
      <div className={styles.buttons}>
        <div>${product.price}</div>
        <div>Free Shipping</div>
        <span className="fa-solid fa-truck-fast"></span>

        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </div>
    </div>
  );
}
export { Product };
