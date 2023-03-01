import s from "./HomePage.module.scss";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import Container from "../../components/Container/Container";
import SliderMobile from "../../components/SliderMobile/SliderMobile";

const HomePage = () => {
  return (
    <div className={s.homePageContent}>
      <HeaderMobile />
      <section className={s.heroSection}>
        <Container>
          <div className={s.heroContent}>
            <div className={s.timeContent}>SERGEI BELIK</div>
          </div>
        </Container>
      </section>
      <section className={s.portfolioSection}>
        <Container>
          <div className={s.portfolioContent}>
            <h2>Portfolio</h2>
            <SliderMobile />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
