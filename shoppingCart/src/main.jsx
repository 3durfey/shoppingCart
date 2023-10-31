import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Products,
  productsLoader as loaderAllProducts,
  loadProduct,
} from "./components/Products";
import { ErrorPage } from "./components/errorPage";
import { Cart } from "./components/Cart";
import { App } from "./components/App.jsx";
import { Home } from "./components/Home.jsx";
import { Product } from "./components/Product.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/products/",
            element: <Products />,
            loader: loaderAllProducts,
          },
          {
            path: "/products/:id",
            element: <Product />,
            loader: loadProduct,
          },
          {
            path: "/cart/:id",
            element: <Products />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
