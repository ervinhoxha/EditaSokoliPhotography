import { Title } from '../../Title/Title';
import styles from './style.module.less';

export const About = () => {
  const handleConsultation = () => {};

  return (
    <div className={styles.aboutContent}>
      <div className="appwidth">
        <Title title="RRETH NE" />

        <div className={styles.aboutDetails}>
          <div className={styles.image}>asd</div>

          <div className={styles.info}>
            <p>
              Ne jemi të specializuar në kapjen e bukurisë së çdo momenti me art
              dhe precizitet. Që nga viti 2020, ofrojmë shërbime profesionale
              fotografike për dasma, ngjarje korporative, portrete, fotografi
              produktesh dhe më shumë.
            </p>

            <p>
              Ekipa jonë është e pasionuar për të realizuar vizionin tuaj duke
              përdorur pajisje të avancuara dhe teknika më të fundit. Ne besojmë
              që çdo foto duhet të tregojë një histori dhe të ruajë kujtime të
              rëndësishme.
            </p>

            <p>
              Me fokus në cilësinë dhe kreativitetin, kemi pasur privilegjin të
              punojmë me një gamë të gjerë klientësh, nga individë tek marka.
              Qëllimi ynë është i thjeshtë: të krijojmë imazhe të paharrueshme
              që bëjnë momentet tuaja të paharrueshme.
            </p>

            <button onClick={handleConsultation}>Kërko konsultimë</button>
          </div>
        </div>
      </div>
    </div>
  );
};
