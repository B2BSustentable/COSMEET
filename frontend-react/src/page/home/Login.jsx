import styles from "./Login.module.css";
import "../../styles.css";

import Logo from "../../assets/home/logo.png";
import Voltar from "../../assets/home/close_button_img.svg";

export default function Login() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>

                    <div className={styles.info}>

                        <div className={styles.loginbox}>
                            <img src={Voltar} alt="Logotipo da Doameer" />
                            <img src={Logo} alt="Imagem de um escritório moderno com pessoas trabalhando." />
                            <h1>Seja Bem-Vindo de Volta</h1>
                            <p>Entre em seu perfil da empresa!</p>
                            <form action="#">
                                <input type="email" name="email" placeholder="E-mail" required />
                                <input type="password" name="password" placeholder="Senha" required />
                                <label for="remember-me">
                                    <input type="checkbox" name="remember-me" id="remember-me" /> Lembre de mim
                                </label>
                                <a href="#">Esqueci a Senha</a>
                                <button type="submit">Logar</button>
                            </form>
                            <p>Ao se logar, você concorda com a <a href="#">Política de Privacidade</a> e <a href="#">Termos de Serviço</a>.</p>
                        </div>

                    </div>

                    <div className={styles.img}>

                    </div>

                </div>
            </div>
        </>
    );
}