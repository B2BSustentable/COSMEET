import React from "react";
import styles from "./Planos.module.css";
import { Link } from "react-router-dom";

import CloseButtonImg from "../../assets/home/close_button_img.svg";
import LogoImg from "../../assets/home/logo.png";
import Confirm from "../../assets/home/confirm.svg";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { registerUser } from "../../../api/services/user";

function Planos() {
    const navigate = useNavigate();
    const [opacity, setOpacity] = useState({
        Basic: 0.5,
        Common: 0.5,
        Premium: 0.5,
    });

    const [inputPlan, setInputPlan] = useState("");

    const handleButtonClick = (plan) => {
        const updatedOpacity = { Basic: 0.5, Common: 0.5, Premium: 0.5 };
        updatedOpacity[plan] = 1.0;
        setOpacity({ ...updatedOpacity });

        if (plan === "Basic") {
            setInputPlan(1);
        } else if (plan === "Common") {
            setInputPlan(2);
        } else {
            setInputPlan(3);
        }
    };

    const handleCadastroClick = async () => {
        const email = sessionStorage.getItem("email_user");
        const password = sessionStorage.getItem("password_user");
        const name = sessionStorage.getItem("name_user");
        const nameBusiness = sessionStorage.getItem("name_business");
        const emailBusiness = sessionStorage.getItem("email_business");
        const occupation = sessionStorage.getItem("occupation");
        const phone = sessionStorage.getItem("phone");
        const cnpj = sessionStorage.getItem("cnpj");
        const tipoPlano = inputPlan;

        console.log(tipoPlano);

        const response = await registerUser(
            email,
            name,
            password,
            nameBusiness,
            emailBusiness,
            occupation,
            phone,
            cnpj,
            tipoPlano
        );
        
        if(response.status === 201){
            console.log(response);
            var data = response.data;

            sessionStorage.setItem("business_id", data.id);
            sessionStorage.setItem("business_email", data.email);
            sessionStorage.setItem("business_name", data.name);
            sessionStorage.setItem("business_about", data.about);
            sessionStorage.setItem("business_photo", data.photo);
            sessionStorage.setItem("business_occupation", data.occupation);
            sessionStorage.setItem("business_phone", data.phone);
            
            alert("Empresa cadastrada com sucesso")
            navigate('/home');
        }else{
            alert("Erro ao cadastrar empresa");
        }
        
    }

    return (
        <>
            <div className={styles.background}>
                <div className={styles.container_plan}>
                    <div className={styles.container_up}>
                        <div className={styles.register_close}>
                            <Link to="/register/business">
                                <img src={CloseButtonImg} alt="" />
                            </Link>
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
                                            <span>Quantidade de Categorias</span>
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
                        
                        <button onClick={handleCadastroClick} className={styles.button_plan}>Cadastrar</button>
                        
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

export default Planos;