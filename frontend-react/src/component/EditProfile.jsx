import { useState, useEffect } from 'react';
import Modal from './modal/Modal';
import "../../src/styles.css";
import styles from "./EditProfile.module.css";

export default function EditProfile() {
    const [modalOpen, setModalOpen] = useState(false);
    const [empresaInfo, setEmpresaInfo] = useState(null);

    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [emailBusiness, setEmailBusiness] = useState("");
    const [phone, setPhone] = useState("");
    const [about, setAbout] = useState("");

    useEffect(() => {
        const storedInfo = sessionStorage.getItem("empresa_info");
        if (storedInfo) {
            setEmpresaInfo(JSON.parse(storedInfo));
        }

        const storedPhoto = sessionStorage.getItem("business_photo");
        if (storedPhoto) {
            setPhoto(storedPhoto);
        } else {
            handleOpenModal();
            alert("Por favor, preencha o perfil da sua empresa.");
        }

        const storedName = sessionStorage.getItem("business_name");
        if (storedName) {
            setName(storedName);
        }

        const storedEmailBusiness = sessionStorage.getItem("business_email");
        if (storedEmailBusiness) {
            setEmailBusiness(storedEmailBusiness);
        }

        const storedPhone = sessionStorage.getItem("business_phone");
        if (storedPhone) {
            setPhone(storedPhone);
        }

        const storedAbout = sessionStorage.getItem("business_about");
        if (storedAbout) {
            setAbout(storedAbout);
        }

    }, []);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <>
                <div className={styles.topo}>
                    <div className={styles.img_info}>
                        <img src={photo} alt="" />
                        <div className={styles.info}>
                            <b>{name}</b>
                            {/* <span>{empresaInfo.tipo}</span> */}
                            {/* <span>{empresaInfo.endereco}</span> */}
                            <button className={styles.botao} onClick={handleOpenModal}>Editar Perfil</button>
                        </div>
                    </div>
                </div>

                <div className={styles.contato}>
                    <h1>Contatos</h1>
                    <div className={styles.tel}>
                        <span><b>tel</b>: {phone}</span>
                    </div>
                    <div className={styles.email}>
                        <span><b>e-mail</b>: {emailBusiness}</span> 
                    </div>
                </div>

                <div className={styles.description}>
                    <h1>Sobre</h1>
                    <div className={styles.description_company}>
                        <p>{about}</p> 
                    </div>
                </div>

                {modalOpen && <Modal onClose={handleCloseModal} empresaInfo={empresaInfo} />}
            </>
        </div>
    )
}
