import EditProfile from '../../component/EditProfile';
import HomeLeft from '../../component/homeApp/HomeLeft';
import styles from "./Profile.module.css";


export default function Profile() {
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