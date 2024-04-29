import React, { useState, useCallback } from 'react';
import s from './PortfolioDesctop.module.scss';
import { VIDEOS } from '../../data/videos'; // Ensure this path is correct
import ModalVideo from '../ModalVideo/ModalVideo';
import { RiSoundModuleFill } from 'react-icons/ri';

const PortfolioDesctop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoState, setVideoState] = useState({
    isSoundChecked: false,
    soundEnabled: false,
    currentVideoIndex: -1,
  });

  const handleVideoButtonClick = useCallback(videoIndex => {
    setVideoState(prevState => ({
      ...prevState,
      currentVideoIndex: videoIndex,
      isSoundChecked: false,
    }));
    setIsOpen(true);
  }, []);

  const onCheckSoundBtn = useCallback(() => {
    setVideoState(prevState => ({
      ...prevState,
      isSoundChecked: true,
      soundEnabled: true,
    }));
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setVideoState(prevState => ({
      ...prevState,
      isSoundChecked: false,
    }));
  }, []);

  const getCurrentVideoPlayer = useCallback(() => {
    const { currentVideoIndex, soundEnabled } = videoState;
    if (currentVideoIndex === -1) return null;

    return (
      <video
        controls
        autoPlay
        className={s.modalVideo}
        src={VIDEOS[currentVideoIndex].content}
        type="video/mp4"
        loop
        muted={!soundEnabled}
      />
    );
  }, [videoState]);

  return (
    <div className={s.portfolioWrapper}>
      {isOpen && (
        <ModalVideo onClose={handleClose}>{getCurrentVideoPlayer()}</ModalVideo>
      )}
      {videoState.isSoundChecked && (
        <ModalVideo onClose={handleClose}>
          <div className={s.checkWrapper}>
            <p className={s.checkText}>Check your volume</p>
            <button
              className={s.checkBtn}
              onClick={() =>
                handleVideoButtonClick(videoState.currentVideoIndex)
              }
            >
              <RiSoundModuleFill className={s.checkIcon} />
              OK
            </button>
          </div>
        </ModalVideo>
      )}
      <ul className={s.portfolioList}>
        {VIDEOS.map((video, index) => (
          <li
            key={index}
            className={s.item}
            onClick={() => handleVideoButtonClick(index)}
          >
            <div className={s.singleVideoBox}>
              <video
                className={s.singleVideo}
                src={video.content}
                autoPlay
                playsInline
                width="100%"
                type="video/mp4"
                muted
                loop
                preload="auto"
              />
            </div>
            <div className={s.textWrapper} style={{ background: video.color }}>
              {video.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioDesctop;
