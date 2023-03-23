import s from "./ShoppingPage.module.scss";
import HeaderShop from "../../components/HeaderShop/HeaderShop";
import Helmet from "../../components/Helmet/Helmet";
import Container from "../../components/Container/Container";
import SoundsList from "../../components/ui/SoundsList/SoundsList";
import { SOUNDS } from "../../helpers/sounds";
import { useEffect, useState } from "react";

const year = new Date().getFullYear();

const ShoppingPage = () => {
  const [soundsTrends, setSoundsTrends] = useState([]);
  const [bestSales, setBestSales] = useState([]);

  useEffect(() => {
    const filteredTrendingSounds = SOUNDS.filter(
      (item) => item.category === "techno"
    );

    const filteredBestSalesSounds = SOUNDS.filter(
      (item) => item.category === "house"
    );
    setSoundsTrends(filteredTrendingSounds);
    setBestSales(filteredBestSalesSounds);
  }, []);

  return (
    <Helmet title="Shop">
      <HeaderShop />
      <section>
        <div className={s.heroContent}>
          <p>Trending sounds in {year}</p>
          <h2>Find the best song for you!</h2>
        </div>
      </section>
      <section className={s.section}>
        <Container>
          <h2 className="tittle-h2">Trending songs</h2>
          <div className={s.trendsList}>
            <SoundsList sounds={soundsTrends} />
          </div>
        </Container>
      </section>
      <section className={s.section}>
        <Container>
          <h2 className="tittle-h2">Best sales songs</h2>
          <div className={s.trendsList}>
            <SoundsList sounds={bestSales} />
          </div>
        </Container>
      </section>
      <footer className={s.footer}>
        <Container>
          <p>&copy; 2023 All rights reserved</p>
        </Container>
      </footer>
    </Helmet>
  );
};

export default ShoppingPage;
