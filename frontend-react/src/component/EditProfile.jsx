import { useState } from 'react';
import Modal from './modal/Modal';
import "../../src/styles.css";
import styles from "./EditProfile.module.css";
import nivea from "../assets/nivea.svg";

export default function EditProfile() {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <div className={styles.img_info}>
                    <img src={nivea} alt="" />
                    <div className={styles.info}>
                        <b>Nome</b>
                        <span>Distribuidor</span>
                        <span>Guarulhos, São Paulo, Brazil</span>
                        <button onClick={handleOpenModal}>Editar Perfil</button>
                    </div>
                </div>
            </div>

            <div className={styles.contato}>
                <h1>Contatos</h1>
                <div className={styles.tel}>
                    <span><b>tel</b>: 11 98715-0608</span>
                </div>
                <div className={styles.email}>
                    <span><b>e-mail</b>: w-jr2003@hotmail.com</span>
                </div>
            </div>

            <div className={styles.description}>
                <h1>Sobre</h1>
                <div className={styles.description_company}>
                    <p>A NIVEA celebra seu segundo aniversário, mantendo seu compromisso com a inovação e qualidade na cosmética. Sua missão é promover a beleza autêntica e o bem-estar dos clientes, oferecendo produtos de alta qualidade para cuidar da pele e garantir sua saúde e radiância. A empresa é apaixonada pela ciência da beleza e comprometida com a satisfação do cliente.</p>
                </div>
            </div>

            {modalOpen && <Modal onClose={handleCloseModal} />}
        </div>
    )
}
