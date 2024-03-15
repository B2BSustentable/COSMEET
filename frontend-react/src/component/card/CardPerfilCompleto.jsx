import { useState, useEffect } from "react";
import "../../styles.css";
import styles from "./CardPerfilCompleto.module.css";
import nivea from "../../assets/nivea.svg";
import close from "../../assets/close.png";
import unfav from "../../assets/unfav.svg";
import fav from "../../assets/fav.svg";
import { Link } from "react-router-dom";
import { getEmpresa } from "../../../api/services/user"; 

export default function CardPerfilCompleto() {
  const [empresa, setEmpresa] = useState(null); 
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    async function fetchEmpresa() {
      try {
        const empresaData = await getEmpresa(); 
        setEmpresa(empresaData); 
      } catch (error) {
        console.error("Erro ao buscar dados da empresa:", error);
      }
    }

    fetchEmpresa();
  }, []);

  const handleFavoritedToggle = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className={styles.container}>
      {empresa ? (
        <>
          <div className={styles.topo}>
            <div className={styles.img_info}>
              <img src={nivea} alt="" />
              <div className={styles.info}>
                <b>{empresa.name}</b>
                <span>{empresa.occupation}</span>
                <span>Guarulhos, São Paulo, Brazil</span>
              </div>
            </div>
            <div className={styles.close_unfav}>
              <Link to="/home">
                <img src={close} className={styles.img_close} alt="X" />
              </Link>
              <img
                src={isFavorited ? fav : unfav}
                className={styles.img_close}
                alt=""
                onClick={handleFavoritedToggle}
              />
            </div>
          </div>

          <div className={styles.contato}>
            <h1>Contatos</h1>
            <div className={styles.tel}>
              <span>
                <b>tel</b>: {empresa.phone}
              </span>
            </div>
            <div className={styles.email}>
              <span>
                <b>e-mail</b>: {empresa.email}
              </span>
            </div>
          </div>

          <div className={styles.description}>
            <h1>Sobre</h1>
            <div className={styles.description_company}>
              <p>{empresa.about}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
