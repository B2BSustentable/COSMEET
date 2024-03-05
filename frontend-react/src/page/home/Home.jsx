import styles from "./Home.module.css";
import "../../styles.css";
import { Navigate } from "react-router-dom";

import logo from "../../assets/home/logo_home.png";
import foto from "../../assets/home/img_home.png";


export default function Home() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.navbar}>
          <img style={{ cursor: "pointer" }} src={logo} alt="COSMEET" />
          <div className={styles.register}>
            <b>Entrar</b>
            <button>Cadastrar</button>
          </div>
        </div>
        <div className={styles.main}>
          <img src={foto} alt="" />
        </div>
        <div className={styles.footer}>
          <b>About</b>
          <p>
            A <b>COSMEET</b> é uma plataforma que ajuda pequenos e médios revendedores, <br />
            comerciantes, fornecedores e fabricantes a superarem desafios comuns, <br />
            como escassez de produtos e atrasos nas entregas. Seu foco principal <br />
            é <b>facilitar a conexão</b> entre esses participantes, criando <b>oportunidades</b> <br />
            de crescimento e <b>prosperidade mútua.</b>
          </p>
        </div>
      </div>
    </>
  );
}
