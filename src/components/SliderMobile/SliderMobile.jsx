import React, { useState } from 'react';
import s from './SliderMobile.module.scss';
import 'swiper/css'; // Basic Swiper styles
import 'swiper/css/effect-cards'; // Effect module
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper components
import { EffectCards } from 'swiper'; // Swiper module

import ModalVideo from '../ModalVideo/ModalVideo';
import { GoPlay } from 'react-icons/go';
import { RiSoundModuleFill } from 'react-icons/ri';
import { VIDEOS } from '../../data/videos';
import { slider } from '../../data/cards'; // Make sure this import is correct and used if needed

const SliderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [sound, setSound] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(-1);

  const handleVideoButtonClick = videoIndex => {
    setCurrentVideoIndex(videoIndex);
    setIsOpen(true);
    setIsCheck(false);
  };

  const onCheckSoundBtn = () => {
    setIsCheck(true);
    setSound(true);
  };

  const getCurrentVideoPlayer = () => {
    if (currentVideoIndex === -1) {
      return null;
    }
    const videoUrl = VIDEOS[currentVideoIndex].content; // Assuming VIDEOS array has objects with 'content' key
    return (
      <video
        controls
        autoPlay
        className={s.modalVideo}
        src={videoUrl}
        type="video/mp4"
        loop
        muted={!sound}
      />
    );
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsCheck(false);
  };

  return (
    <>
      <div className={s.sectionSliderMob}>
        {isOpen && (
          <ModalVideo onClose={handleClose}>
            {getCurrentVideoPlayer()}
          </ModalVideo>
        )}
        {isCheck && (
          <ModalVideo onClose={handleClose}>
            <div className={s.checkWrapper}>
              <p className={s.checkText}>Check your volume</p>
              <button
                className={s.checkBtn}
                onClick={() => handleVideoButtonClick(currentVideoIndex)}
              >
                <RiSoundModuleFill className={s.checkIcon} />
                OK
              </button>
            </div>
          </ModalVideo>
        )}
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className={s.mySwiper}
        >
          {VIDEOS.map((video, index) => (
            <SwiperSlide key={index}>
              <div className={s.cardImageWrapper}>
                <GoPlay
                  className={s.iconPlay}
                  onClick={() => {
                    onCheckSoundBtn();
                    setCurrentVideoIndex(index);
                  }}
                />
                {/* Ensure 'slider' array is correctly used if needed */}
                <img src={slider[16]} alt="card" />
              </div>
              <div className={s.cardDesc} style={{ background: '#E8DCCC' }}>
                <p className={s.sliderText}>F-16</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderMobile;
