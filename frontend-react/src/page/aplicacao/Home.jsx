import styles from "./Home.module.css";
import "../../styles.css";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";

import nivea from "../../assets/nivea.svg";
import logo from "../../assets/logo.png";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.icon}>
              <img src={nivea} />
              <span>
                Olá <b>NIVEA</b>
              </span>
            </div>
            <img src={logo} className={styles.logo} alt="logo" />
          </div>
          <div className={styles.navigation}>
            <span>Home</span>
            <span>Perfil</span>
            <span>Dashboard</span>
          </div>
          <div className={styles.search}>
            <span>Pesquisa:</span>
            <div className={styles.search_bar}>
              <span>test</span>
            </div>
          </div>
          <div className={styles.category}>
            <span>Categorias</span>
            <div className={styles.box_category}>
              <span>test</span>
            </div>
          </div>
          <div className={styles.end}>
            <b>PREMIUM</b>
            <button>Trocar de Plano</button>
          </div>
          <div className={styles.term}>
            <p>
              Ao se logar, você concorda com a Cosmeet Terms and Conditions &
              Privacy Policy
            </p>
          </div>
        </div>

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
            {/*  */}
            <Grid container spacing={4}>
              {[...Array(20)].map((_, index) => (
                <Grid item xs={4} key={index}>
                  {" "}
                  {/* Definindo cada imagem para ocupar 1/3 da largura */}
                  <ImageList sx={{ width: 400, height: 100 }}>
                    <ImageListItem key={nivea}>
                      <img
                        srcSet={`${nivea}`}
                        src={`${nivea}`}
                        alt={nivea}
                        style={{ width: "100%", height: 100 }} // Definindo largura e altura
                      />
                      <ImageListItemBar
                        title={"asdsada"}
                        subtitle={"asdsada"}
                        actionIcon={
                          <IconButton
                            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                            aria-label={`info about ${nivea}`}
                          >
                            {" "}
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  </ImageList>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
