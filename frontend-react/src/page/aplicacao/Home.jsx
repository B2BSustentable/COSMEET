import React, { useState, useEffect } from "react";
import CardEmpresa from '../../component/card/Card';
import HomeLeft from '../../component/homeApp/HomeLeft';
import styles from './Home.module.css';
import { Link, useNavigate } from "react-router-dom";
import { getAllBusiness } from "../../../api/services/business";

export default function Home() {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const Navigate = useNavigate();

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

    fetchBusinesses();

  }, []);

  useEffect(() => {
    const filtered = businesses.filter(business =>
      business.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBusinesses(filtered);
  }, [searchTerm, businesses]);

  const fetchBusinesses = async () => {
    try {
      const response = await getAllBusiness();
      setBusinesses(response);
    } catch (error) {
      console.error("Erro na requisição:", error.message);
    }
  };

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <div className={styles.main}>
        <HomeLeft onSearchTermChange={handleSearchTermChange} empresaFoto={photo} empresaNome={name} />
        <div className={styles.right}>
          <div className={styles.columnContainer}>
            {filteredBusinesses.map((business, index) => (
              <div key={index} className={styles.cardWrapper}>
                <CardEmpresa
                  id={index+1}
                  name={business.name}
                  photo={business.photo}
                  about={business.about}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
