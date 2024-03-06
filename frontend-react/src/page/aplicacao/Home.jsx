import styles from "./Home.module.css";
import "../../styles.css";
import { useState } from 'react';
import CardEmpresa from "../../component/card/Card";
import HomeLeft from "../../component/homeApp/HomeLeft";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <HomeLeft />
        <div className={styles.right}>
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
