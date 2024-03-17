import React, { useState } from "react";
import styles from "../homeApp/HomeLeft.module.css";
import Navigation from "../Navigation";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function HomeLeft({ onSearchTermChange, empresaFoto, empresaNome }) {
  const handleSearchTermChange = (term) => {
    onSearchTermChange(term);
  };

  return (
    <>
      <div className={styles.left}>
        <div className={styles.top}>
          <div className={styles.icon}>
            <img className={styles.logo} src={empresaFoto} alt="Company Logo" />
            <span>
              Olá <b>{empresaNome} !</b>
            </span>
          </div>
          <img src={logo} className={styles.logo} alt="Logo" />
        </div>
        <div className={styles.navigation}>
          <Navigation />
        </div>
        <div className={styles.search}>
          <span>Pesquisa:</span>
          <br />
          <SearchBar onSearchTermChange={handleSearchTermChange} />
        </div>
        <div className={styles.category}>
          {/* <SearchCategory key={0} /> */}
        </div>
        <div className={styles.end}>
          <b>PREMIUM</b>
          <Link to="/plans">
            <button className={styles.botao}>Trocar de Plano</button>
          </Link>
        </div>
        <div className={styles.term}>
          <p>
            Ao se logar, você concorda com a Cosmeet Terms and Conditions &
            Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
}
