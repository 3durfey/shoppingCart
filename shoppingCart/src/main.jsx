import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Products } from "./components/Products";
import { ErrorPage } from "./components/errorPage";
import { Cart } from "./components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/products/:id",
            element: <Products />,
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
