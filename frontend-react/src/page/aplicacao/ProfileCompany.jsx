import CardPerfilCompleto from '../../component/card/CardPerfilCompleto';
import HomeLeft from '../../component/homeApp/HomeLeft';
import styles from "./ProfileCompany.module.css";
import { useState, useEffect } from 'react';

export default function ProfileCompany() {
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const storedPhoto = sessionStorage.getItem("business_photo");
        const storedName = sessionStorage.getItem("business_name");

        if (storedPhoto) {
            setPhoto(storedPhoto);
        } else {
            Navigate("/profile");
        }

        if (storedName) {
            setName(storedName);
        }
    }, []);

    return(
        <>
        <div className={styles.main}>
            <HomeLeft empresaFoto={photo} empresaNome={name} />
            <div className={styles.right}>
                <CardPerfilCompleto />
            </div>
        </div>
        </>
    )
}