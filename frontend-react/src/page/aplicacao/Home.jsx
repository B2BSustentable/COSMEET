import styles from "./Home.module.css";
import "../../styles.css";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.icon}>
              <img src="" alt="icon" />
              <span>
                Olá <b>NIVEA</b>
              </span>
            </div>
            <img src="" alt="logo" />
          </div>
          <div className={styles.navigation}>
            <span>Home</span>
            <span>Perfil</span>
            <span>Dashboard</span>
          </div>
          <div className={styles.search}>
            <span>Pesquisa:</span>
            <div className={styles.search_bar}>
              <span>test</span>
            </div>
          </div>
          <div className={styles.category}>
            <span>Categorias</span>
            <div className={styles.box_category}>
              <span>test</span>
            </div>
          </div>
          <div className={styles.end}>
            <b>PREMIUM</b>
            <button>Trocar de Plano</button>
          </div>
          <div className={styles.term}>
            <p>
              Ao se logar, você concorda com a Cosmeet Terms and Conditions &
              Privacy Policy
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.filter}>
            <span>Filtros ativos:</span>
            <div className={styles.box_filter}>
              <span>test</span>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.rowbigbox}>
              {/* component */}
              <div className={styles.bigbox}>
                <div className={styles.bigbox_top}>
                  <img src="" alt="iconBox" />
                  <span>Nome</span>
                </div>
                <div className={styles.bigbox_categorybox}>
                  <div className={styles.bigbox_categories}>
                    <span>teste</span>
                    <span>teste</span>
                    <span>teste</span>
                  </div>
                </div>
              </div>
              <div className={styles.bigbox}>
                <div className={styles.bigbox_top}>
                  <img src="" alt="iconBox" />
                  <span>Nome</span>
                </div>
                <div className={styles.bigbox_categorybox}>
                  <div className={styles.bigbox_categories}>
                    <span>teste</span>
                    <span>teste</span>
                    <span>teste</span>
                  </div>
                </div>
              </div>
              <div className={styles.bigbox}>
                <div className={styles.bigbox_top}>
                  <img src="" alt="iconBox" />
                  <span>Nome</span>
                </div>
                <div className={styles.bigbox_categorybox}>
                  <div className={styles.bigbox_categories}>
                    <span>teste</span>
                    <span>teste</span>
                    <span>teste</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
