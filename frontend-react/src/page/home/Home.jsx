import styles from "./Home.module.css";
import "../../styles.css";

import Navbar from "../../component/Navbar"

export default function Home() {
  return (
    <>
      <div className={styles.background}>
        <Navbar></Navbar>


        <div className={styles.navbar}>
            <img src="" alt="COSMEET" />
            <div className={styles.register}>
                <b>Login</b>
                <button>Registrar</button>
            </div>
        </div>
        <div className={styles.main}>

        </div>
      </div>
    </>
  );
}
