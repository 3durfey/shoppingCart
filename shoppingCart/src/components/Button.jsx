import { addToCart } from "./Cart";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect } from "react";
import styles from "./button.module.css";

function ItemButton({ product }) {
  const [show, setShow] = useState(false);
  function addToCartClicked(product) {
    addToCart(product);
    setShow(!show);
  }

  useEffect(() => {
    if (!show) return;
    const timeId = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => {
      clearTimeout(timeId);
    };
  }, [show]);

  return (
    <>
      <Button variant="danger" onClick={() => addToCartClicked(product)}>
        Add to Cart
      </Button>
      <div className={styles.alert}>
        <Alert show={show} key={"primary"} variant={"primary"}>
          Added to Cart!
        </Alert>
      </div>
    </>
  );
}
export { ItemButton };
