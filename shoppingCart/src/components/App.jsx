import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import styles from "./app.module.css";
import { v4 as uuid } from "uuid";

function App() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <Outlet />
      </div>
      <footer className={styles.footer}> </footer>
    </>
  );
}

export { App };
