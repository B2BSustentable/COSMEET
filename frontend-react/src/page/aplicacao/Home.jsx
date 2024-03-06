import styles from "./Home.module.css";
import "../../styles.css";
import { useState } from 'react';
import SearchCategory from "../../component/SearchCategory";
import CardEmpresa from "../../component/card/Card";
import HomeLeft from "../../component/homeApp/HomeLeft";
import nivea from "../../assets/nivea.svg";
import logo from "../../assets/logo.png";

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    const index = selectedCategories.findIndex((cat) => cat.id === category.id);
    if (index === -1) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((cat) => cat.id !== category.id));
    }
  };

  return (
    <>
      <div className={styles.main}>
        <HomeLeft />
        <div className={styles.right}>
          <div className={styles.filter}>
            <span>Filtros ativos:</span>
            {selectedCategories.map((category, index) => (
              <div key={index} className={styles.categoryBox}>
                <span>{category.title}</span>
              </div>
            ))}
          </div>
          <div className={styles.columnContainer}>
            {[...Array(30)].map((_, index) => (
              <div key={index} className={styles.cardWrapper}>
                <CardEmpresa />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
