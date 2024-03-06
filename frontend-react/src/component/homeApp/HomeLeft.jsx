import * as React from 'react';
import styles from "../homeApp/HomeLeft.module.css"
import nivea from "../../assets/nivea.svg";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";

import SearchCategory from "../../component/SearchCategory";
import Navigation from "../Navigation"
import SearchBar from '../SearchBar';

export default function HomeLeft() {
    return (
        <>
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
                    <Navigation />
                </div>
                <div className={styles.search}>
                    <span>Pesquisa:</span>
                    <br />
                    <SearchBar />
                </div>
                <div className={styles.category}>
                    <SearchCategory key={0} />
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
        </>
    )
}