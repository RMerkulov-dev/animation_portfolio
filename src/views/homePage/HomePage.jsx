import s from './HomePage.module.scss';
import Container from '../../components/Container/Container';

import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import HeroMobileNew from '../../assets/hero/hero_mob.mp4';
import HeroDesktop from '../../assets/hero/hero_pc.mp4';
import Contacts from '../../components/Contacts/Contacts';
import ModalVideo from '../../components/ModalVideo/ModalVideo';
import { useEffect, useState } from 'react';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import PortfolioLayout from '../../components/Layout/PortfolioLayout';
import Helmet from '../../components/Helmet/Helmet';
// import Header from "../../components/Header/Header";
// import PortfolioDescktop from "../../components/PortfolioDescktop/PortfolioDescktop";
// import SliderMobile from "../../components/SliderMobile/SliderMobile";
// import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Helmet className={s.homePageContent} title="Portfolio">
      {openModal && (
        <ModalVideo openModal={openModal} setOpenModal={setOpenModal} />
      )}
      <HeaderLayout />
      <section id="hero" className={s.heroSection}>
        {/*<Container>*/}
        <div className={s.heroContent}>
          <video
            src={isMobile ? HeroMobileNew : HeroDesktop}
            autoPlay
            playsInline
            width="100%"
            type="video/mp4"
            muted
            loop="true"
            preload="auto"
            // height="200px"
          ></video>
        </div>
        {/*</Container>*/}
      </section>
      <section id="portfolio" className={s.portfolioSection}>
        <Container>
          <div id="portfolio" className={s.portfolioContent}>
            <h2 className={s.sectionTitle}>Portfolio</h2>
            <PortfolioLayout />
          </div>
        </Container>
      </section>
      <section id="about" className={s.section}>
        <Container>
          <div className={s.aboutContent}>
            <h2 className={s.sectionTitle}>About This Gig</h2>
            <ul className={s.aboutDescText}>
              <li>
                With 2 years of experience in video marketing, I specialize in
                brand mark animation. I know exactly how to make your logo
                animation recognizable and impactful. This animation can be
                effectively used across various platforms like Instagram,
                Facebook, and YouTube to enhance your brand identity and engage
                your audience.
              </li>
              <li className={s.work_title}>How to Start?</li>
              <li>
                1. Understanding the Work.
                <br /> I will begin by asking a few questions to better
                understand the specifics of the project. This mutual
                communication is crucial for achieving success and ensuring that
                the animation reflects your brand’s identity accurately.
              </li>
              <li>
                2. Placing the Order.
                <br /> Select the appropriate package and contact me. We'll have
                a brief preview and discuss the essential details before I start
                working on the animation. Once the project is near completion,
                I'll send you the video in both .mov and .mp4 formats for your
                review and approval.
              </li>
              <li>
                3. Revisions and Final Delivery.
                <br /> You have the opportunity to request edits to the initial
                version or accept it as it is. Upon final approval, you will
                receive the completed animation along with all the source files.
                This comprehensive package ensures that you have everything you
                need to enhance your brand’s visibility, differentiate yourself
                from competitors, and expand your audience.
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <section id="store" className={s.section}>
        <Container>
          <div>
            <h2 className={s.sectionTitle}>Store</h2>
            <div className={s.storeWrapper}>
              <div className={s.vectorItem}>
                <div className={s.vectorLeft}>Vector clipart</div>
                <div className={s.vectorRight}>
                  <PlayIcon className={s.storeIcon} />
                </div>
              </div>
              <div className={s.soundsItem}>
                <div className={s.soundsLeft}>Sounds</div>
                <div className={s.soundsRight}>
                  <PlayIcon className={s.storeIcon} />
                </div>
              </div>
              <div className={s.trackItem}>
                <div className={s.trackLeft}>Soundtrack</div>
                <div className={s.trackRight}>
                  <PlayIcon className={s.storeIcon} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section id="contacts" className={s.section}>
        <Container>
          <div className={s.contactsContent}>
            <h2 className={s.sectionTitle}>Contacts</h2>
            <Contacts />
          </div>
        </Container>
      </section>
      <footer className={s.footer}>
        <p>&copy; 2023 All rights reserved</p>
      </footer>
    </Helmet>
  );
};

export default HomePage;
