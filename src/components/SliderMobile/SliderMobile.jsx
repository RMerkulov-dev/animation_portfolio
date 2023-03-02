import s from "./SliderMobile.module.scss";
import Studio from "../../assets/portfolio/studio.jpg";
import Matrix from "../../assets/portfolio/matrix.jpg";
import Trance from "../../assets/portfolio/trance.jpg";
import Sound from "../../assets/portfolio/sound.jpg";
import Business from "../../assets/portfolio/business.jpg";
import Archer from "../../assets/portfolio/archer.jpg";
import Coolinart from "../../assets/portfolio/coolinart.jpg";
import Energy from "../../assets/portfolio/energy.jpg";
import Beauty from "../../assets/portfolio/beauty.jpg";
import Indastry from "../../assets/portfolio/indastry.jpg";
import Burger from "../../assets/portfolio/burger.jpg";
import Fr from "../../assets/portfolio/fr.jpg";
import Map from "../../assets/portfolio/map.jpg";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";

// import StudioVideo from "../../assets/video/studio.mp4";
// import MatrixVideo from "../../assets/video/matrix.mp4";
// import TranceVideo from "../../assets/video/trance.mp4";
// import MusicVideo from "../../assets/video/muzic.mp4";
// import BusinessVideo from "../../assets/video/burger.mp4";
// import ArcherVideo from "../../assets/video/coolinart.mp4";
// import CoolinartVideo from "../../assets/video/coolinart.mp4";
// import EnergyVideo from "../../assets/video/energy.mp4";
// import CosmeticsVideo from "../../assets/video/cosmetics.mp4";
// import IndustryVideo from "../../assets/video/industry.mp4";
// import BurgerVideo from "../../assets/video/burger.mp4";
// import SportVideo from "../../assets/video/sport.mp4";
// import MapVideo from "../../assets/video/map.mp4";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
// import { useState } from "react";
// import ModalVideo from "../ModalVideo/ModalVideo";

const SliderMobile = ({ openModal, setOpenModal }) => {
  return (
    <>
      <div className={s.sectionSliderMob}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className={s.mySwiper}
          style={{ marginLeft: "20px", perspective: "800px" }}
        >
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              <PlayIcon
                className={s.iconPlay}
                onClick={() => setOpenModal(!openModal)}
              />
              <img src={Studio} alt="" />
            </div>
            <div className={s.cardDesc} style={{ background: "#E8B099" }}>
              <p className={s.sliderText}>Recording Studio Saxophon</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Matrix} alt="" />
            {/*<img src={Matrix} alt="" />*/}
            <div className={s.cardDesc} style={{ background: "#E1A9C4" }}>
              <p className={s.sliderText}>Matrix Company</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Trance} alt="" />
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.sliderText}>Michael Kean</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sound} alt="" />
            <div className={s.cardDesc} style={{ background: "#FFFFFF" }}>
              <p className={s.sliderText}>Music project</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Business} alt="" />
            <div className={s.cardDesc} style={{ background: "#ABABD1" }}>
              <p className={s.sliderText}>Bussines</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Archer} alt="" />
            <div className={s.cardDesc} style={{ background: "#E1A9C4" }}>
              <p className={s.sliderText}>Archer Health</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Coolinart} alt="" />
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.sliderText}>Best Coolinart</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Energy} alt="" />
            <div className={s.cardDesc} style={{ background: "#E8B099" }}>
              <p className={s.sliderText}>Energy Green</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Beauty} alt="" />
            <div className={s.cardDesc} style={{ background: "#E1A9C4" }}>
              <p className={s.sliderText}>Zoskin Beauty</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Indastry} alt="" />
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.sliderText}>Indastry Corporation</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Burger} alt="" />
            <div className={s.cardDesc} style={{ background: "#FFFFFF" }}>
              <p className={s.sliderText}>Burger Club</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Fr} alt="" />
            <div className={s.cardDesc} style={{ background: "#ABABD1" }}>
              <p className={s.sliderText}>FR Project</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Map} alt="" />
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.sliderText}>Map USA</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SliderMobile;
