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

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const SliderMobile = () => {
  return (
    <div className={s.sectionSliderMob}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={s.mySwiper}
        style={{ margin: 0 }}
      >
        <SwiperSlide>
          <img src={Studio} alt="" />
          <div className={s.cardDesc} style={{ background: "#E8B099" }}>
            <p className={s.sliderText}>Recording Studio Saxophon</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Matrix} alt="" />
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
            <p>Map USA</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderMobile;
