import s from "./HomePage.module.scss";
import Container from "../../components/Container/Container";

import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import HeroMobileNew from "../../assets/hero/hero_mob.mp4";
import HeroDesktop from "../../assets/hero/hero_pc.mp4";
import Contacts from "../../components/Contacts/Contacts";
import ModalVideo from "../../components/ModalVideo/ModalVideo";
import { useEffect, useState } from "react";
import HeaderLayout from "../../components/Layout/HeaderLayout";
import PortfolioLayout from "../../components/Layout/PortfolioLayout";
import Helmet from "../../components/Helmet/Helmet";
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
                Do you have your own unique logo? Would you like to make it work
                in a new way? Brand mark animation is the latest word in video
                marketing. I know exactly how to make your logo animation
                recognizable.
              </li>
              <li>
                You can use it for Instagram and Facebook videos and on your
                YouTube channel to highlight your brand identity. All I need is
                a logo in .ai format vectors files. If you don't have one,
                that's not a problem. I can additionally convert it from .jpg or
                .png. I also need to hear the wishes and expectations of the
                result. So, I will ask a few questions to understand the work's
                specifics better. Mutual communication is the way to success!
              </li>
              <li>
                It is easy to order: choose the right package and contact me.
                After a short preview and discussion of essential details, I
                will proceed to work. In the end, I will send you the finished
                video in .mov and .mp4 format for confirmation. You can make
                edits or accept this version.
              </li>
              <li>
                You will receive the animation and all the source files in one
                package when the work is done. So, do not waste your time and
                contact me for an animated logo and increase brand awareness,
                stand out from the crowd, and extend your audience!
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
      <footer>
        <p>&copy; 2023 All rights reserved</p>
      </footer>
    </Helmet>
  );
};

export default HomePage;
