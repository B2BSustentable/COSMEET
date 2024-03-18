import styles from "./Pagamentos.module.css";
import ou from "../../assets/ou.png";
import pix from "../../assets/pix.svg";
import cartao from "../../assets/carta.png";
import logo from "../../assets/logo.png";
import back from "../../assets/home/close_button_img.svg";
import { Link } from "react-router-dom";

export default function Pagamentos() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.topo}>
          <img src={back} alt="voltar" />
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.titulo}>
          <h1>Como deseja processar seu pagamento?</h1>
          <span>
            <b>Plano escolhido:</b> PREMIUM
          </span>
          <span>
            <b>Total a pagar:</b> R$ 100,00
          </span>
        </div>
        <div className={styles.linha} />
        <div className={styles.container_center}>
          <div className={styles.box_right}>
            <div className={styles.right_content}>
              <div className={styles.title}>
                <span>Cartão de crédito</span>
              </div>
              <div className={styles.content}>
                <div className={styles.container_input}>
                  <div className={styles.input}>
                    <label>Número do cartão</label>
                    <input type="text" className={styles.input_large} />
                  </div>
                  <div className={styles.input_minor_cvv}>
                    <label>CVV</label>
                    <div className={styles.input_minor_img}>
                      <input type="text" className={styles.input_small} />
                      <img src={cartao} alt="cartao" />
                    </div>
                  </div>
                </div>

                <div className={styles.container_input}>
                  <div className={`${styles.input} ${styles.input_larger}`}>
                    <label>Nome do titular (como está escrito no cartão)</label>
                    <input type="text" className={styles.input_large} />
                  </div>
                  <div className={styles.input_minor_select}>
                    <label>Expira em</label>
                    <div className={styles.input_minor_img}>
                      <div className={styles.select_wrapper}>
                        <select
                          name="mês"
                          id=""
                          className={styles.select_input}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.container_input}>
                  <div className={`${styles.input} ${styles.input_larger}`}>
                    <label>CPF ou CNPJ do Titular</label>
                    <input type="text" className={styles.input_large} />
                  </div>
                  <div className={styles.input_minor_select}>
                    <label>Expira em</label>
                    <div className={styles.input_minor_img}>
                      <div className={styles.select_wrapper}>
                        <select
                          name="ano"
                          id=""
                          className={styles.select_input}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.division}>
            <img src={ou} alt="" />
          </div>
          <div className={styles.box_left}>
            <div className={styles.title}>
              <span>PIX</span>
            </div>
            <div className={styles.codigo_pix}>
              <div className={styles.input_pix}>
                <label>Código Pix</label>
                <span className={styles.input_cod_pix}>
                  qrcode=00020101021226970014BR.GOV.BCB.PIX0127
                  5204000053039865405123.455802BR5925nome_titular6009cidade62070503valor63042E2F
                </span>
                <button className={styles.button_finish}>Copiar Código Pix</button>
              </div>
              <img src={pix} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.linha} />

        <Link to={"/home"}>
          <button className={styles.button_finish}>Finalizar</button>
        </Link>
      </div>
    </>
  );
}
