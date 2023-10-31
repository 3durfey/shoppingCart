import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import styles from "./app.module.css";
import { v4 as uuid } from "uuid";
import localforage from "localforage";

function App() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <Outlet />
      </div>
    </>
  );
}

export { App };
