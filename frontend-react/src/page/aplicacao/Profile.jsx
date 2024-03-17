import EditProfile from '../../component/EditProfile';
import HomeLeft from '../../component/homeApp/HomeLeft';
import styles from "./Profile.module.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
    const Navigate = useNavigate();
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");

    const handleExpand = (cardId) => {
        setExpandedCardId(cardId);
    };

    useEffect(() => {
        const storedPhoto = sessionStorage.getItem("business_photo");
        const storedName = sessionStorage.getItem("business_name");

        if (storedPhoto) {
            setPhoto(storedPhoto);
        }

        if (storedName) {
            setName(storedName);
        }

    }, []);

    return (
        <>
            <div className={styles.main}>
                <HomeLeft empresaFoto={photo} empresaNome={name} />
                <div className={styles.right}>
                    <EditProfile/>
                </div>
            </div>
        </>
    )
}