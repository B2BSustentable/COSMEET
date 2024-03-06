import styles from "./Home.module.css";
import "../../styles.css";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2;
import CardEmpresa from "../../component/card/Card";
import HomeLeft from "../../component/homeApp/HomeLeft";

import nivea from "../../assets/nivea.svg";
import logo from "../../assets/logo.png";
import SearchCategory from "../../component/SearchCategory";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <HomeLeft/>

        <div className={styles.right}>
          <div className={styles.filter}>
            <span>Filtros ativos:</span>
            <div className={styles.box_filter}>
              <span>test</span>
            </div>
          </div>
          <div
            className={styles.column}
            style={{ overflowY: "auto", overflowX: "hidden", height: "500px" }}
          >
            <Grid container spacing={4}>
              {[...Array(20)].map((_, index) => (
                <Grid item xs={4} key={index}>
                  <CardEmpresa />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
