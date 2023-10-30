import localforage from "localforage";
import { useState, useEffect } from "react";

async function getCartItems() {
  let cart = await localforage.getItem("cart");
  if (!cart) cart = [];
  return cart;
}
async function addToCart(item) {
  let cart = await localforage.getItem("cart");
  if (!cart) cart = [];
  console.log(cart);
  cart.push(item);
  localforage.setItem("cart", cart);
}

function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getCartItems().then((cart) => setCart(cart));
  }, []);

  return (
    <div>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="item" />
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <h4>{item.description}</h4>
          </div>
        );
      })}
    </div>
  );
}
export { Cart, addToCart };
