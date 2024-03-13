import styles from "./LoginAuth.module.css";
import "../../styles.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/home/logo.png";
import Voltar from "../../assets/home/close_button_img.svg";

export default function LoginAuth() {
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
                                        <input maxLength={1} type="auth" name="auth" required />
                                        <input maxLength={1} type="auth" name="auth" required />
                                        <input maxLength={1} type="auth" name="auth" required />
                                        <input maxLength={1} type="auth" name="auth" required />
                                        <input maxLength={1} type="auth" name="auth" required />
                                        <input maxLength={1} type="auth" name="auth" required />
                                    </div>
                                </div>

                                <div className={styles.button}>
                                    <button type="submit" className={styles.btn_login}>Confirmar</button>
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