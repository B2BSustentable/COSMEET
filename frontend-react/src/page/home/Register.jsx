import React, { useState, useEffect } from "react";
import styles from "./Register.module.css";
import "../../styles.css";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/home/logo.png";
import Voltar from "../../assets/home/close_button_img.svg";



export default function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState("");
    const Navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleAuth = (e) => {
        setAuth(e.target.value);
    }

    const register = async () => {
        if (password !== auth) {
            alert("Senhas não conferem");
            return;
        }

        sessionStorage.setItem("email_user", email);
        sessionStorage.setItem("name_user", name);
        sessionStorage.setItem("password_user", password);

        Navigate("/register/business");
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>

                    <div className={styles.info}>
                        <div className={styles.loginbox}>
                            <div className={styles.top}>
                                <Link to="/">
                                    <img src={Voltar} alt="Logotipo da Doameer" />
                                </Link>
                                <img className={styles.logo} src={Logo} alt="Imagem de um escritório moderno com pessoas trabalhando." />
                            </div>

                            <div className={styles.text}>
                                <p>Criar Conta</p>
                            </div>

                            <div className={styles.form}>
                                <div className={styles.input}>
                                    <label htmlFor="">Nome Completo:</label>
                                    <input onChange={handleName} type="name" name="name" placeholder="Digite seu nome" required />
                                    <label htmlFor="">Email Pessoal:</label>
                                    <input onChange={handleEmail} type="email" name="email" placeholder="Digite seu e-mail" required />
                                    <label htmlFor="">Senha:</label>
                                    <input onChange={handlePassword} type="password" name="password" placeholder="Digite sua senha" required />
                                    <label htmlFor="">Confirmar Senha:</label>
                                    <input onChange={handleAuth} type="password" name="password" placeholder="Digite sua senha" required />
                                </div>

                                <div className={styles.button}>
                                    <button onClick={register} type="submit" className={styles.btn_login}>
                                        Próximo
                                    </button>
                                </div>
                            </div>

                            <div className={styles.footer}>
                                <p>Já tem conta?
                                    <Link to="/login">
                                        Clique Aqui
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className={styles.img}>

                    </div>

                </div>
            </div>
        </>
    );
}