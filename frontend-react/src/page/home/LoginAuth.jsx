import React, { useState, useEffect } from "react";
import styles from "./LoginAuth.module.css";
import { Link, useNavigate } from "react-router-dom";
import "../../styles.css";

import Logo from "../../assets/home/logo.png";
import Voltar from "../../assets/home/close_button_img.svg";

export default function LoginAuth() {

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const Navigate = useNavigate();
    const [auth, setAuth] = useState("");
    const [valoresInputs, setValoresInputs] = useState(Array(6).fill(''));

    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email_user");
        if (storedEmail) {
            setEmail(storedEmail);
        }

        const storedCode = Math.floor(100000 + Math.random() * 900000);
        setCode(storedCode);

        if (storedEmail) {
            sendEmail(storedEmail, storedCode);
        }

    }, []);

    const baseUrl = "http://localhost:5000";

    const sendEmail = async (email, code) => {
        let dataSend = {
            email: email,
            subject: "Código de Autenticação, Cosmeet",
            message: "Seu código de autenticação é: " + code + ".",
        };

        const res = await fetch(`${baseUrl}/email/sendEmail`, {
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then((res) => {
            console.log(res);
            if (res.status > 199 && res.status < 300) {
                alert("Send Successfully !");
            }
        });
    };

    const handleChange = (index, event) => {
        const novosValores = [...valoresInputs];
        novosValores[index] = event.target.value;
        setValoresInputs(novosValores);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const codigo = valoresInputs.join('');
        if (codigo == code) {
            alert('Código correto');
            Navigate("/home");
        } else {
            alert('Código incorreto');
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>

                    <div className={styles.info}>
                        <div className={styles.loginbox}>
                            <div className={styles.top}>
                                <Link to="/login">
                                    <img src={Voltar} alt="Logotipo da Doameer" />
                                </Link>
                                <img className={styles.logo} src={Logo} alt="Imagem de um escritório moderno com pessoas trabalhando." />
                            </div>

                            <div className={styles.text}>
                                <p>Seu código de autenticação</p>
                                <p>Foi enviado para o email empresárial</p>
                            </div>

                            <div className={styles.form}>
                                <div className={styles.text}>
                                    <p>Confirme:</p>
                                </div>

                                <div className={styles.input}>
                                    <label htmlFor="">Insira o Código de Autenticação</label>
                                    <div className={styles.inputs}>
                                        {valoresInputs.map((valor, index) => (
                                            <input
                                                key={index}
                                                maxLength={1}
                                                type="auth"
                                                name="auth"
                                                value={valor}
                                                onChange={(event) => handleChange(index, event)}
                                                required
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.button}>
                                    <button onClick={handleSubmit} type="submit" className={styles.btn_login}>Confirmar</button>
                                </div>
                            </div>

                            <div className={styles.footer}>
                                <p>Ao se logar, você concorda com a Cosmeet</p>
                                <p><a href="#">Política de Privacidade</a> & <a href="#">Termos de Serviço</a>.</p>
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