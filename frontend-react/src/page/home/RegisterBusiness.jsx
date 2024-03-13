import styles from "./RegisterBusiness.module.css";
import "../../styles.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/home/logo.png";
import Voltar from "../../assets/home/close_button_img.svg";

export default function RegisterBusiness() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>

                    <div className={styles.info}>
                        <div className={styles.loginbox}>
                            <div className={styles.top}>
                                <Link to="/register">
                                    <img src={Voltar} alt="Logotipo da Doameer" />
                                </Link>
                                <img src={Logo} alt="Imagem de um escritório moderno com pessoas trabalhando." />
                            </div>

                            <div className={styles.text}>
                                <p>Criar Conta</p>
                            </div>

                            <div className={styles.form}>
                                <div className={styles.input}>
                                    <label htmlFor="">Nome Empresa:</label>
                                    <input type="email" name="email" placeholder="Digite seu e-mail" required />
                                    <label htmlFor="">Área de Atuação:</label>
                                    <input type="password" name="password" placeholder="Digite sua senha" required />
                                    <label htmlFor="">Telefone:</label>
                                    <input type="password" name="password" placeholder="Digite sua senha" required />
                                    <label htmlFor="">Email Empresarial:</label>
                                    <input type="password" name="password" placeholder="Digite sua senha" required />
                                    <label htmlFor="">CNPJ:</label>
                                    <input type="password" name="password" placeholder="Digite sua senha" required />
                                </div>

                                <div className={styles.button}>
                                    <button type="submit" className={styles.btn_login}>
                                        <Link to="/register/plans" style={{textDecoration:"none", color:"white"}}>
                                            Próximo
                                        </Link>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.footer}>
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