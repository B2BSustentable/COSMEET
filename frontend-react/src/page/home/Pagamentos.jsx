import React from "react";
import styles from "./Pagamentos.module.css";

import CloseButtonImg from "../../assets/home/close_button_img.svg";
import LogoImg from "../../assets/home/logo.svg";
import Confirm from "../../assets/home/confirm.svg";

import { useState } from "react";


function Pagamentos() {

    const [opacity, setOpacity] = useState({
        Basic: 0.5,
        Common: 0.5,
        Premium: 0.5,
    });

    const handleButtonClick = (plan) => {
        const updatedOpacity = { Basic: 0.5, Common: 0.5, Premium: 0.5 };
        updatedOpacity[plan] = 1.0;
        setOpacity({ ...updatedOpacity });
    };

    return (
        <>
            <div className={styles.background}>
                <div className={styles.container_plan}>
                    <div className={styles.container_up}>
                        <div className={styles.register_close}>
                            <img src={CloseButtonImg} alt="" />
                            <img src={LogoImg} alt="" />
                        </div>
                        <div className={styles.register_content}>
                            <div className={styles.register_content_info}>
                                <div className={styles.register_content_info_left}>
                                    <div className={styles.register_content_info_left1}>
                                        <span style={{ fontSize: "0.8rem", fontWeight: "300" }}>Cadastro {'>'} Planos</span>
                                        <span>Escolha o melhor plano para você</span>

                                        <div className={styles.register_content_info_msg}>
                                            <img src={Confirm} alt="" />
                                            <span style={{ fontSize: "0.8rem", fontWeight: "300" }}>Utilize o quanto quiser.</span>
                                        </div>
                                        <div className={styles.register_content_info_msg}>
                                            <img src={Confirm} alt="" />
                                            <span style={{ fontSize: "0.8rem", fontWeight: "300" }}>Recomendações especiais para você.</span>
                                        </div>
                                        <div className={styles.register_content_info_msg}>
                                            <img src={Confirm} alt="" />
                                            <span style={{ fontSize: "0.8rem", fontWeight: "300" }}>Altere ou cancele seu plano quando quiser.</span>
                                        </div>
                                    </div>
                                    <div className={styles.register_content_info_left2}>
                                        <div className={styles.register_content_info_span2}>
                                            <span>Quantidade de Negociantes</span>
                                        </div>
                                        <div className={styles.register_content_info_span2}>
                                            <span>Valor do Plano</span>
                                        </div>
                                        <div className={styles.register_content_info_span2}>
                                            <span>Consultas Ilimitadas</span>
                                        </div>
                                        <div className={styles.register_content_info_span2}>
                                            <span>Adicionar aos favoritos</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.register_content_info_right}>
                                    <div className={styles.register_content_info_right1}>
                                        <button
                                            className={styles.register_content_info_button}
                                            onClick={() => handleButtonClick("Basic")}
                                            style={{ opacity: opacity["Basic"] }}>
                                            Basic
                                        </button>
                                        <button className={styles.register_content_info_button}
                                            onClick={() => handleButtonClick("Common")}
                                            style={{ opacity: opacity["Common"] }}>
                                            Common
                                        </button>
                                        <button className={styles.register_content_info_button}
                                            onClick={() => handleButtonClick("Premium")}
                                            style={{ opacity: opacity["Premium"] }}>
                                            Premium
                                        </button>
                                    </div>
                                    <div className={styles.register_content_info_right2}>
                                        <div className={`${styles.register_content_info_span} ${opacity["Basic"] === 0.5 ? styles.opacidade_menor : ""
                                            }`}>
                                            <span>2</span>
                                            <span>R$ 20,00</span>
                                            <span>Não</span>
                                            <span>Não</span>
                                        </div>
                                        <div className={`${styles.register_content_info_span} ${opacity["Common"] === 0.5 ? styles.opacidade_menor : ""
                                            }`}>
                                            <span>3</span>
                                            <span>R$ 50,00</span>
                                            <span>Sim</span>
                                            <span>Sim</span>
                                        </div>
                                        <div className={`${styles.register_content_info_span} ${opacity["Premium"] === 0.5 ? styles.opacidade_menor : ""
                                            }`}>
                                            <span>5</span>
                                            <span>R$ 100,00</span>
                                            <span>Sim</span>
                                            <span>Sim</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={styles.button_plan}>Próximo</button>
                    </div>
                    <div className={styles.container_down}>
                        <div className={styles.request_info}>
                            <p>Ao se logar, você concorda com a Cosmeet</p>
                            <p>Terms and Conditions & Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pagamentos;