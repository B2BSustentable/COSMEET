import styles from "./Home.module.css";
import "../../styles.css";

import CardEmpresa from "../../component/card/Card";
import HomeLeft from "../../component/homeApp/HomeLeft";

import nivea from "../../assets/nivea.svg";
import logo from "../../assets/logo.png";
import SearchCategory from "../../component/SearchCategory";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <HomeLeft />

        <div className={styles.right}>
          <div className={styles.filter}>
            <span>Filtros ativos:</span>
            <div className={styles.box_filter}>
              <span>test</span>
            </div>
          </div>
          <div className={styles.columnContainer}>
            {[...Array(30)].map((_, index) => (
              <div key={index} className={styles.cardWrapper}>
                <CardEmpresa />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
