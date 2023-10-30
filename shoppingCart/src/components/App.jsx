import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import styles from "./app.module.css";

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

export default App;
