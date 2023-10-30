import localforage from "localforage";
import { useState, useEffect } from "react";
import styles from "./loader.module.css";

async function getCartItems() {
  let cart = await localforage.getItem("cart");
  if (!cart) cart = [];
  return cart;
}
async function addToCart(item) {
  item.quantity++;
  let cart = await localforage.getItem("cart");
  let alreadyInCart = false;
  cart.map((cartItem) => {
    if (cartItem.id === item.id) {
      alreadyInCart = true;
      cartItem.quantity++;
    }
  });
  if (!cart) cart = [];
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
  useEffect(() => {
    getCartItems().then((cart) => setCart(cart));
  }, []);
  function cartDelete(product) {
    const tempCart = cart.filter((item) => item.id !== product.id);
    setCart(tempCart);
    localforage.setItem("cart", tempCart);
  }
  return (
    <div>
      {cart.map((item) => {
        console.log(item.quantity);
        return (
          <div key={item.id}>
            <div className={styles.container}>
              <img src={item.image} className={styles.image} alt="image" />
              <div>{item.title}</div>
              <input
                type="number"
                onChange={(e) => updateCart(e.target.value, item)}
                defaultValue={item.quantity}
              ></input>

              <button onClick={() => cartDelete(item)}>Remove from Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export { Cart, addToCart };
