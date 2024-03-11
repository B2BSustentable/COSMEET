import EditProfile from '../../component/EditProfile';
import HomeLeft from '../../component/homeApp/HomeLeft';
import styles from "./PerfilEmpresa.module.css";


export default function PerfilEmpresa() {
    return(
        <>
        <div className={styles.main}>
            <HomeLeft />
            <div className={styles.right}>
                <EditProfile />
            </div>
        </div>
        </>
    )
}