import s from "./SliderMobile.module.scss";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { useState } from "react";
import ModalVideo from "../ModalVideo/ModalVideo";

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
import { GoPlay } from "react-icons/go";
import { VIDEOS } from "../../helpers/VIDEO";

const SliderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(-1);

  const handleVideoButtonClick = (videoIndex) => {
    setCurrentVideoIndex(videoIndex);
    setIsOpen(true);
  };

  const getCurrentVideoPlayer = () => {
    if (currentVideoIndex === -1) {
      return null;
    }
    const videoUrl = VIDEOS[currentVideoIndex];
    return (
      <video
        controls
        autoPlay
        className={s.modalVideo}
        src={videoUrl}
        type="video/mp4"
        muted
        loop="true"
      ></video>
    );
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={s.sectionSliderMob}>
        {isOpen && (
          <ModalVideo onClose={handleClose}>
            {getCurrentVideoPlayer()}
          </ModalVideo>
        )}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className={s.mySwiper}
          style={{ marginLeft: "20px", perspective: "800px" }}
        >
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  className={s.iconPlay}
                  style={{ fill: "#E8B099" }}
                  key={index}
                  onClick={() => handleVideoButtonClick(0)}
                />
              ))}
              <img src={Studio} alt="card" />
            </div>
            <div className={s.cardDesc} style={{ background: "#E8B099" }}>
              <p className={s.sliderText}>Recording Studio Saxophon</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  className={s.iconPlay}
                  style={{ fill: "#E1A9C4" }}
                  key={index}
                  onClick={() => handleVideoButtonClick(1)}
                />
              ))}
              <img src={Matrix} alt="" />
            </div>
            <div className={s.cardDesc} style={{ background: "#E1A9C4" }}>
              <p className={s.sliderText}>Matrix Company</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  className={s.iconPlay}
                  style={{ fill: "#E8DCCC" }}
                  key={index}
                  onClick={() => handleVideoButtonClick(2)}
                />
              ))}
              <img src={Trance} alt="card" />
            </div>
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.sliderText}>Michael Kean</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  className={s.iconPlay}
                  style={{ fill: "#FFFFFF" }}
                  key={index}
                  onClick={() => handleVideoButtonClick(3)}
                />
              ))}
              <img src={Sound} alt="card" />
            </div>
            <div className={s.cardDesc} style={{ background: "#FFFFFF" }}>
              <p className={s.sliderText}>Music project</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  className={s.iconPlay}
                  style={{ fill: "#ABABD1" }}
                  key={index}
                  onClick={() => handleVideoButtonClick(4)}
                />
              ))}
              <img src={Business} alt="card" />
            </div>
            <div className={s.cardDesc} style={{ background: "#ABABD1" }}>
              <p className={s.sliderText}>Business</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  className={s.iconPlay}
                  style={{ fill: "#E1A9C4" }}
                  key={index}
                  onClick={() => handleVideoButtonClick(5)}
                />
              ))}
              <img src={Archer} alt="card" />
            </div>
            <div className={s.cardDesc} style={{ background: "#E1A9C4" }}>
              <p className={s.sliderText}>Archer Health</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  className={s.iconPlay}
                  style={{ fill: "#E8DCCC" }}
                  key={index}
                  onClick={() => handleVideoButtonClick(6)}
                />
              ))}
              <img src={Coolinart} alt="card" />
            </div>
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.sliderText}>Best Coolinart</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  className={s.iconPlay}
                  style={{ fill: "#E8B099" }}
                  key={index}
                  onClick={() => handleVideoButtonClick(7)}
                />
              ))}
              <img src={Energy} alt="card" />
            </div>
            <div className={s.cardDesc} style={{ background: "#E8B099" }}>
              <p className={s.sliderText}>Energy Green</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  style={{ fill: "#E1A9C4" }}
                  className={s.iconPlay}
                  key={index}
                  onClick={() => handleVideoButtonClick(8)}
                />
              ))}
              <img src={Beauty} alt="card" />
            </div>
            <div className={s.cardDesc} style={{ background: "#E1A9C4" }}>
              <p className={s.sliderText}>Zoskin Beauty</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  className={s.iconPlay}
                  style={{ fill: "#E8DCCC" }}
                  key={index}
                  onClick={() => handleVideoButtonClick(9)}
                />
              ))}
              <img src={Indastry} alt="card" />
            </div>
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.sliderText}>Indastry Corporation</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  className={s.iconPlay}
                  style={{ fill: "#FFFFFF" }}
                  key={index}
                  onClick={() => handleVideoButtonClick(10)}
                />
              ))}
              <img src={Burger} alt="card" />
            </div>
            <div className={s.cardDesc} style={{ background: "#FFFFFF" }}>
              <p className={s.sliderText}>Burger Club</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  className={s.iconPlay}
                  style={{ fill: "#ABABD1" }}
                  key={index}
                  onClick={() => handleVideoButtonClick(11)}
                />
              ))}
              <img src={Fr} alt="card" />
            </div>
            <div className={s.cardDesc} style={{ background: "#ABABD1" }}>
              <p className={s.sliderText}>FR Project</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardImageWrapper}>
              {VIDEOS.map((videoUrl, index) => (
                <GoPlay
                  className={s.iconPlay}
                  style={{ fill: "#E8DCCC" }}
                  key={index}
                  onClick={() => handleVideoButtonClick(12)}
                />
              ))}
              <img src={Map} alt="card" />
            </div>
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
