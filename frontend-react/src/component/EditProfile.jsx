import { useState, useEffect, useCallback} from 'react';
import Modal from './modal/Modal';
import { } from "../../../functions/funcoes";
import "../../src/styles.css";
import styles from "./EditProfile.module.css";
import nivea from "../assets/nivea.svg";

import { buscarEmpresa } from "../function/funcoes";


export default function EditProfile() {
    const [modalOpen, setModalOpen] = useState(false);
    const [empresaInfo, setEmpresaInfo] = useState(null);

    const fetchGetEmpresa = useCallback(async () => {
        let response = await buscarEmpresa(window.sessionStorage.getItem("emailEmpresa"));
        setEmpresaInfo(response);
    });

    useEffect(() => {
        fetchGetEmpresa();
    }, []);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.container}>
            {empresaInfo && (
                <>
                    <div className={styles.topo}>
                        <div className={styles.img_info}>
                            <img src={nivea} alt="" />
                            <div className={styles.info}>
                                <b>{empresaInfo.nome}</b>
                                <span>{empresaInfo.tipo}</span> 
                                <span>{empresaInfo.endereco}</span>
                                <button onClick={handleOpenModal}>Editar Perfil</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contato}>
                        <h1>Contatos</h1>
                        <div className={styles.tel}>
                            <span><b>tel</b>: {empresaInfo.telefone}</span> 
                        </div>
                        <div className={styles.email}>
                            <span><b>e-mail</b>: {empresaInfo.email}</span> 
                        </div>
                    </div>

                    <div className={styles.description}>
                        <h1>Sobre</h1>
                        <div className={styles.description_company}>
                            <p>{empresaInfo.descricao}</p> 
                        </div>
                    </div>

                    {modalOpen && <Modal onClose={handleCloseModal} empresaInfo={empresaInfo} />}
                </>
            )}
        </div>
    )
}
