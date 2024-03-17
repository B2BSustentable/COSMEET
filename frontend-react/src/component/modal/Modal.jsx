import styles from './Modal.module.css';
import { useState, useEffect } from 'react';
import { updateBusiness } from "../../../api/services/business";
import { Link, useNavigate } from "react-router-dom";

const ModalContent = ({ onClose }) => {
    const Navigate = useNavigate();
    const [photo, setPhoto] = useState("");
    const [photoFile, setPhotoFile] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [occupation, setOccupation] = useState("");
    const [about, setAbout] = useState("");

    const [cep, setCep] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {
        const storedPhoto = sessionStorage.getItem("business_photo");
        if (storedPhoto) {
            setPhoto(storedPhoto);
        } else {
            Navigate("/profile");
        }

        const storedName = sessionStorage.getItem("business_name");
        if (storedName) {
            setName(storedName);
        }

        const storedEmail = sessionStorage.getItem("business_email");
        if (storedEmail) {
            setEmail(storedEmail);
        }

        const storedPhone = sessionStorage.getItem("business_phone");
        if (storedPhone) {
            setPhone(storedPhone);
        }

        const storedOccupation = sessionStorage.getItem("business_occupation");
        if (storedOccupation) {
            setOccupation(storedOccupation);
        }

        const storedAbout = sessionStorage.getItem("business_about");
        if (storedAbout) {
            setAbout(storedAbout);
        }

    }, []);

    const handlePhoto = (event) => {
        const selectedPhoto = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setPhoto(reader.result);
        };

        if (selectedPhoto) {
            reader.readAsDataURL(selectedPhoto);
        }

        setPhotoFile(selectedPhoto);
    };

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePhone = (event) => {
        setPhone(event.target.value);
    }

    const handleOccupation = (event) => {
        setOccupation(event.target.value);
    }

    const handleAbout = (event) => {
        setAbout(event.target.value);
    }

    const handleCep = (event) => {
        setCep(event.target.value);
    }

    const update = async () => {
        const id = sessionStorage.getItem("business_id");
        const businessData = {
            file: photoFile,
            business: {
                id: id,
                name: name,
                email: email,
                phone: phone,
                occupation: occupation,
                about: about
            }
        };

        const response = await updateBusiness(id, businessData);
        console.log(response)
        if (response != null) {
            console.log("Atualizado com sucesso");
            sessionStorage.setItem("business_photo", response.photo);
            sessionStorage.setItem("business_occupation", response.occupation);

            Navigate("/home")
        } else {
            console.log("Erro ao atualizado" + response);
            alert("Erro ao atualizar empresa");
        }
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <button className={styles.closeButton} onClick={onClose}>
                        Fechar
                    </button>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.modalLeft}>
                        <div className={styles.modalTopo}>
                            <div className={styles.modalImg}>
                                <img src={photo} alt="" />
                                <input onChange={handlePhoto} type="file" required />
                            </div>
                            <div className={styles.modalInfoGeral}>
                                <strong>Informações gerais</strong>
                                <div className={styles.input}>
                                    <label htmlFor="">Nome da Empresa</label>
                                    <input onChange={handleName} value={name} label="Nome da empresa" type="text" />
                                </div>
                                <div className={styles.input}>
                                    <label htmlFor="Área de atuação">Área de atuação</label>
                                    <input onChange={handleOccupation} value={occupation} label="Área de atuação" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.address}>
                            <strong>Endereço</strong>
                            <div className={styles.input}>
                                <label htmlFor="">CEP</label>
                                <input onChange={handleCep} label="Nome da empresa" type="text" />
                            </div>
                            <div className={styles.input_city}>
                                <div className={styles.input}>
                                    <label htmlFor="">Cidade</label>
                                    <input label="Área de atuação" type="text" />
                                </div>
                                <div className={styles.input}>
                                    <label htmlFor="">Estado</label>
                                    <input label="Área de atuação" type="text" />
                                </div>
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="">Bairro</label>
                                <input label="Área de atuação" type="text" />
                            </div>
                            <div className={styles.input_city}>
                                <div className={styles.input}>
                                    <label htmlFor="">Rua</label>
                                    <input label="Área de atuação" type="text" />
                                </div>
                                <div className={styles.input}>
                                    <label htmlFor="">Número</label>
                                    <input label="Área de atuação" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.modalRight}>
                        <div className={styles.modalAbout}>
                            <strong>Sobre</strong>
                            <textarea
                                onChange={handleAbout}
                                className={styles.textArea}
                                rows={8} // 
                                placeholder="Digite aqui a descrição..."
                            />
                        </div>
                        <div className={styles.modalContact}>
                            <strong>Contatos</strong>
                            <div className={styles.input}>
                                <label htmlFor="">Telefone Empresarial</label>
                                <input onChange={handleEmail} value={email} label="Área de atuação" type="text" />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="">E-mail Empresarial</label>
                                <input onChange={handlePhone} value={phone} label="Área de atuação" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={update} className={styles.botao}>Salvar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalContent;
