import localforage from "localforage";
import { useState, useEffect } from "react";
import styles from "./cart.module.css";
import Button from "react-bootstrap/Button";
async function getCartItems() {
  let cart = await localforage.getItem("cart");
  if (!cart) cart = [];
  return cart;
}
async function addToCart(item) {
  item.quantity++;
  let cart = await localforage.getItem("cart");
  let alreadyInCart = false;
  if (cart === null || cart === undefined) cart = [];
  cart.map((cartItem) => {
    if (cartItem.id === item.id) {
      alreadyInCart = true;
      cartItem.quantity++;
    }
  });
  if (!alreadyInCart) cart.push(item);
  localforage.setItem("cart", cart);
}
async function updateCart(quantity, item) {
  item.quantity = quantity;
  let cart = await localforage.getItem("cart");
  cart.map((cartItem) => {
    if (cartItem.id === item.id) {
      cartItem.quantity = quantity;
    }
  });
  localforage.setItem("cart", cart);
}
function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getCartItems().then((cart) => setCart(cart));
  }, []);
  function cartDelete(product) {
    const tempCart = cart.filter((item) => item.id !== product.id);
    setCart(tempCart);
    localforage.setItem("cart", tempCart);
  }
  useEffect(() => {
    let total = 0;
    cart.map((item) => {
      total += item.quantity * item.price;
    });
    setTotal(total);
  }, [cart]);
  async function cartNumChange(newNum, item) {
    await updateCart(newNum, item);
    getCartItems().then((cart) => setCart(cart));
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartHeader}>Cart</h1>

      <div className={styles.cart}>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <div className={styles.container}>
                <img src={item.image} className={styles.image} alt="image" />
                <div className={styles.title}>{item.title}</div>
                <div>${item.price}</div>
                <div className={styles.buttonAndDelete}>
                  <input
                    className={styles.cartNumber}
                    type="number"
                    min="1"
                    onChange={(e) => cartNumChange(e.target.value, item)}
                    defaultValue={item.quantity}
                  ></input>
                  <Button
                    className={styles.deleteButton}
                    variant="danger"
                    onClick={() => cartDelete(item)}
                  >
                    X
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.buttonAndDelete}>
        <Button variant="outline-secondary" className={styles.checkout}>
          Checkout
        </Button>
        <div className={styles.total}>${total.toFixed(2)}</div>
      </div>
    </div>
  );
}
export { Cart, addToCart };
