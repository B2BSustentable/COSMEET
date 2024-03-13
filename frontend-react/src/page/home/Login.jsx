import styles from "./Login.module.css";
import "../../styles.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/home/logo.png";
import Voltar from "../../assets/home/close_button_img.svg";

export default function Login() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>

                    <div className={styles.info}>
                        <div className={styles.loginbox}>
                            <div className={styles.top}>
                                <Link to="/" className={styles.link}>
                                    <img src={Voltar} alt="Logotipo da Doameer" />
                                </Link>
                                <img className={styles.logo} src={Logo} alt="Imagem de um escritório moderno com pessoas trabalhando." />
                            </div>

                            <div className={styles.text}>
                                <p>Seja Bem-Vindo de Volta</p>
                                <p>Entre em seu perfil da empresa!</p>
                            </div>

                            <div className={styles.form}>
                                <div className={styles.input}>
                                    <label htmlFor="">Email:</label>
                                    <input type="email" name="email" placeholder="Digite seu e-mail" required />
                                    <label htmlFor="">Senha:</label>
                                    <input type="password" name="password" placeholder="Digite sua senha" required />
                                </div>
                                <div className={styles.remember}>
                                    <label for="remember-me">
                                        <input type="checkbox" name="remember-me" id="remember-me" /> Lembre de mim
                                    </label>
                                    <a href="#">Esqueci a Senha</a>
                                </div>
                                <div className={styles.button}>
                                    <button type="submit" className={styles.btn_login}>
                                        <Link to="/login/auth" style={{textDecoration:"none", color:"white"}}>
                                            Logar
                                        </Link>
                                    </button>
                                    <button type="submit" className={styles.btn_register}>
                                        <Link to="/register" style={{textDecoration:"none", color:"black"}}>
                                            Cadastrar
                                        </Link>
                                    </button>
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