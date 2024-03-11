import styles from './Modal.module.css';

const ModalContent = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <button className={styles.closeButton}>
                        Fechar
                    </button>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.modalLeft}>
                        <div className={styles.modalTopo}>
                            <div className={styles.modalImg}>
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                            </div>
                            <div className={styles.modalInfoGeral}>
                                <strong>Informações gerais</strong>
                                <div className={styles.input}>
                                    <label htmlFor="">Nome da empresa</label>
                                    <input label="Nome da empresa" type="text" />
                                </div>
                                <div className={styles.input}>
                                    <label htmlFor="Área de atuação">Área de atuação</label>
                                    <input label="Área de atuação" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.address}>
                            <strong>Endereço</strong>
                            <div className={styles.input}>
                                <label htmlFor="">CEP</label>
                                <input label="Nome da empresa" type="text" />
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
                                className={styles.textArea}
                                rows={8} // 
                                placeholder="Digite aqui a descrição..."
                            />
                        </div>
                        <div className={styles.modalContact}>
                            <strong>Contatos</strong>
                            <div className={styles.input}>
                                <label htmlFor="">Telefone</label>
                                <input label="Área de atuação" type="text" />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="">E-mail</label>
                                <input label="Área de atuação" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <button>Salvar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalContent;
