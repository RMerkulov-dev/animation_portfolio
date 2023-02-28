import s from "./HomePage.module.scss";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import Container from "../../components/Container/Container";

const HomePage = () => {
  return (
    <div className={s.homePageContent}>
      <HeaderMobile />
      <section className={s.heroSection}>
        <div className={s.heroContent}>
          <div className={s.timeContent}>SERGEI BELIK</div>
        </div>
      </section>
      <section className={s.portfolioSection}>
        <Container>
          <div className={s.portfolioContent}>
            <h2>Portfolio</h2>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
