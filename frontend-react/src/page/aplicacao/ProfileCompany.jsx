import CardPerfilCompleto from '../../component/card/CardPerfilCompleto';
import HomeLeft from '../../component/homeApp/HomeLeft';
import styles from "./ProfileCompany.module.css";


export default function ProfileCompany() {
    return(
        <>
        <div className={styles.main}>
            <HomeLeft />
            <div className={styles.right}>
                <CardPerfilCompleto />
            </div>
        </div>
        </>
    )
}