import s from "./SliderMobile.module.scss";
import Studio from "../../assets/portfolio/mask_group.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const SliderMobile = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className={s.mySwiper}
    >
      <SwiperSlide>
        <img src={Studio} alt="" />
        <div className={s.cardText}>
          <p>Test</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Studio} alt="" />
        <div className={s.cardText}>
          <p>Test</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Studio} alt="" />
        <div className={s.cardText}>
          <p>Test</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Studio} alt="" />
        <div className={s.cardText}>
          <p>Test</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderMobile;
