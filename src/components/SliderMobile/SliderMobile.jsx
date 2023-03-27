import s from "./SliderMobile.module.scss";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { useState } from "react";
import ModalVideo from "../ModalVideo/ModalVideo";

import { GoPlay } from "react-icons/go";
import { VIDEOS } from "../../data/videos";
import { slider } from "../../data/cards";

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
              <img src={slider[0]} alt="card" />
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
              <img src={slider[1]} alt="" />
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
              <img src={slider[2]} alt="card" />
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
              <img src={slider[3]} alt="card" />
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
              <img src={slider[4]} alt="card" />
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
              <img src={slider[5]} alt="card" />
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
              <img src={slider[6]} alt="card" />
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
              <img src={slider[7]} alt="card" />
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
              <img src={slider[8]} alt="card" />
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
              <img src={slider[9]} alt="card" />
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
              <img src={slider[10]} alt="card" />
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
              <img src={slider[11]} alt="card" />
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
              <img src={slider[12]} alt="card" />
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
