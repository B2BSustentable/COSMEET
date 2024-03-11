import CardEmpresa from '../../component/card/Card';
import HomeLeft from '../../component/homeApp/HomeLeft';
import CardPerfilCompleto from '../../component/card/CardPerfilCompleto';
import styles from './Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleExpand = (cardId) => {
    setExpandedCardId(cardId);
  };

  return (
    <>
      <div className={styles.main}>
        <HomeLeft />
        <div className={styles.right}>
          {expandedCardId ? (
            <CardPerfilCompleto />
          ) : (
            <div className={styles.columnContainer}>
              {[...Array(30)].map((_, index) => (
                <div key={index} className={styles.cardWrapper}>
                  <CardEmpresa
                    id={index}
                    expandedCardId={expandedCardId}
                    onExpand={handleExpand}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
