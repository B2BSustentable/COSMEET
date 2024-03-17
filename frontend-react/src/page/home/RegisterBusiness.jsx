import React, { useState, useEffect } from "react";
import styles from "./RegisterBusiness.module.css";
import "../../styles.css";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/home/logo.png";
import Voltar from "../../assets/home/close_button_img.svg";

import { registerUser } from "../../../api/services/user";

export default function RegisterBusiness() {

    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email_user");
        if (storedEmail) {
            setEmail(storedEmail);
        }

        const storedName = sessionStorage.getItem("name_user");
        if (storedName) {
            setName(storedName);
        }

        const storedPassword = sessionStorage.getItem("password_user");
        if (storedPassword) {
            setPassword(storedPassword);
        }

    }, []);

    const [nameBusiness, setNameBusiness] = useState("");
    const [emailBusiness, setEmailBusiness] = useState("");
    const [occupation, setOccupation] = useState("");
    const [phone, setPhone] = useState("");
    const [cnpj, setCnpj] = useState("");

    const handleNameBusiness = (e) => {
        setNameBusiness(e.target.value);
    }

    const handleEmailBusiness = (e) => {
        setEmailBusiness(e.target.value);
    }

    const handleOccupation = (e) => {
        setOccupation(e.target.value);
    }

    const handlePhone = (e) => {
        let phoneNumber = e.target.value.replace(/\D/g, "");
        phoneNumber = phoneNumber.slice(0, 11);
        let formattedPhoneNumber = phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
        setPhone(formattedPhoneNumber);
    }

    const handleCnpj = (e) => {
        let cnpjNumber = e.target.value.replace(/\D/g, "");
        cnpjNumber = cnpjNumber.slice(0, 14);
        let formattedCnpj = cnpjNumber.replace(/(\d{2})(\d)/, "$1.$2");
        formattedCnpj = formattedCnpj.replace(/(\d{3})(\d)/, "$1.$2");
        formattedCnpj = formattedCnpj.replace(/(\d{3})(\d)/, "$1/$2");
        formattedCnpj = formattedCnpj.replace(/(\d{4})(\d)/, "$1-$2");
        setCnpj(formattedCnpj);
    }

    const register = async () => {
        sessionStorage.setItem("name_business", nameBusiness);
        sessionStorage.setItem("email_business", emailBusiness);
        sessionStorage.setItem("occupation", occupation);
        let phoneNumber = phone.replace(/\D/g, "");
        sessionStorage.setItem("phone", phoneNumber);
        let cnpjNumber = cnpj.replace(/\D/g, "");
        sessionStorage.setItem("cnpj", cnpjNumber);

        Navigate("/register/plans");
    }

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
                                <img className={styles.logo} src={Logo} alt="Imagem de um escritório moderno com pessoas trabalhando." />
                            </div>

                            <div className={styles.text}>
                                <p>Criar Conta</p>
                            </div>

                            <div className={styles.form}>
                                <div className={styles.input}>
                                    <label htmlFor="">Nome Empresa:</label>
                                    <input onChange={handleNameBusiness} type="text" name="text" placeholder="Digite seu nome empresarial" required />
                                    <label htmlFor="">Área de Atuação:</label>
                                    <input onChange={handleOccupation} type="text" name="text" placeholder="Digite sua área de atuação" required />
                                    <label htmlFor="">Telefone:</label>
                                    <input onChange={handlePhone} type="text" name="text" placeholder="Digite sua telefone" value={phone} required />
                                    <label htmlFor="">Email Empresarial:</label>
                                    <input onChange={handleEmailBusiness} type="email" name="email" placeholder="Digite seu email empresarial" required />
                                    <label htmlFor="">CNPJ:</label>
                                    <input onChange={handleCnpj} type="text" name="text" placeholder="Digite seu CNPJ" value={cnpj} required />
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