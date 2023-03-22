import s from "./ShoppingPage.module.scss";
import HeaderShop from "../../components/HeaderShop/HeaderShop";
import Helmet from "../../components/Helmet/Helmet";
import Container from "../../components/Container/Container";
import SoundsList from "../../components/ui/SoundsList/SoundsList";

const year = new Date().getFullYear();

const ShoppingPage = () => {
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
            <SoundsList />
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default ShoppingPage;
