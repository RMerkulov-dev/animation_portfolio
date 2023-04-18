import s from "./PortfolioDesctop.module.scss";
import { sliderTablet } from "../../data/cards";
import { VIDEOS } from "../../data/videos";
import { useState } from "react";
import ModalVideo from "../ModalVideo/ModalVideo";
import { GoPlay } from "react-icons/go";
import { RiSoundModuleFill } from "react-icons/ri";

const PortfolioDesctop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [sound, setSound] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(-1);

  const handleVideoButtonClick = (videoIndex) => {
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
    const videoUrl = VIDEOS[currentVideoIndex];
    return (
      <>
        {!sound ? (
          <video
            controls
            autoPlay
            className={s.modalVideo}
            src={videoUrl}
            type="video/mp4"
            muted
            loop="true"
          ></video>
        ) : (
          <video
            controls
            autoPlay
            className={s.modalVideo}
            src={videoUrl}
            type="video/mp4"
            loop="true"
          ></video>
        )}
      </>
    );
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={s.portfolioWrapper}>
        {isOpen && (
          <ModalVideo onClose={handleClose}>
            {getCurrentVideoPlayer()}
          </ModalVideo>
        )}
        {isCheck && (
          <ModalVideo onClose={handleClose}>
            <div className={s.checkWrapper}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Check your volume
                </p>
                <button
                  className={s.checkBtn}
                  onClick={() => handleVideoButtonClick(15)}
                >
                  <RiSoundModuleFill className={s.checkIcon} />
                  OK
                </button>
              </div>
            </div>
          </ModalVideo>
        )}
        <ul className={s.portfolioList}>
          <li className={s.item1}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#E8B099" }}
                key={index}
                onClick={() => handleVideoButtonClick(0)}
              />
            ))}
            <div className={s.singleVideoBox}>
              <video
                className={s.singleVideo}
                src={VIDEOS[0]}
                autoPlay
                playsInline
                width="100%"
                type="video/mp4"
                muted
                loop="true"
                preload="auto"
              ></video>
            </div>
            {/*<img src={sliderTablet[0]} alt="card" />*/}
            <div className={s.cardDesc} style={{ background: "#E8B099" }}>
              <p className={s.cardText}>Recording Studio Saxophon</p>
            </div>
          </li>
          <li className={s.item2}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#E1A9C4" }}
                key={index}
                onClick={() => handleVideoButtonClick(1)}
              />
            ))}
            <img src={sliderTablet[1]} alt="card" />
            <div className={s.cardDesc} style={{ background: "#E1A9C4" }}>
              <p className={s.cardText}>Matrix Company</p>
            </div>
          </li>
          <li className={s.item3}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#E8DCCC" }}
                key={index}
                onClick={() => handleVideoButtonClick(2)}
              />
            ))}
            <img src={sliderTablet[2]} alt="card" />
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.cardText}>Michael Kean</p>
            </div>
          </li>
          <li className={s.item4}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#ABABD1" }}
                key={index}
                onClick={() => handleVideoButtonClick(4)}
              />
            ))}
            <img src={sliderTablet[3]} alt="card" />
            <div className={s.cardDesc} style={{ background: "#ABABD1" }}>
              <p className={s.cardText}>Business</p>
            </div>
          </li>

          <li className={s.item5}>
            {/*<img src={sliderTablet[4]} alt="card" />*/}

            <div className={s.cardVideoBox}>
              <video
                className={s.cardVideo}
                src={VIDEOS[3]}
                autoPlay
                playsInline
                width="100%"
                type="video/mp4"
                muted
                loop="true"
                preload="auto"
              ></video>
            </div>

            <div className={s.cardDesc} style={{ background: "#FFFFFF" }}>
              <p className={s.cardText}>Music project</p>
            </div>
          </li>
          <li className={s.item6}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#E1A9C4" }}
                key={index}
                onClick={() => handleVideoButtonClick(5)}
              />
            ))}
            <div className={s.singleVideoBox}>
              <video
                className={s.singleVideo}
                src={VIDEOS[5]}
                autoPlay
                playsInline
                width="100%"
                type="video/mp4"
                muted
                loop="true"
                preload="auto"
              ></video>
            </div>
            {/*<img src={sliderTablet[5]} alt="card" />*/}
            <div className={s.cardDesc} style={{ background: "#E1A9C4" }}>
              <p className={s.cardText}>Archer Health</p>
            </div>
          </li>
          <li className={s.item7}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#E8DCCC" }}
                key={index}
                onClick={() => handleVideoButtonClick(9)}
              />
            ))}
            <img src={sliderTablet[6]} alt="card" />
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.cardText}>Indastry Corporation</p>
            </div>
          </li>
          <li className={s.item8}>
            {/*<img src={sliderTablet[7]} alt="card" />*/}
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#E8DCCC" }}
                key={index}
                onClick={() => handleVideoButtonClick(6)}
              />
            ))}
            <div className={s.cardVideoBox}>
              <video
                className={s.cardVideo}
                src={VIDEOS[6]}
                autoPlay
                playsInline
                width="100%"
                type="video/mp4"
                muted
                loop="true"
                preload="auto"
              ></video>
            </div>
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.cardText}>Best Coolinart</p>
            </div>
          </li>
          <li className={s.item9}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#E8B099" }}
                key={index}
                onClick={() => handleVideoButtonClick(7)}
              />
            ))}
            <img src={sliderTablet[8]} alt="card" />
            <div className={s.cardDesc} style={{ background: "#E8B099" }}>
              <p className={s.cardText}>Energy Green</p>
            </div>
          </li>
          <li className={s.item10}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#E1A9C4" }}
                key={index}
                onClick={() => handleVideoButtonClick(8)}
              />
            ))}
            <img src={sliderTablet[9]} alt="card" />
            <div className={s.cardDesc} style={{ background: "#E1A9C4" }}>
              <p className={s.cardText}>Zoskin Beauty</p>
            </div>
          </li>
          <li className={s.item11}>
            {/*<img src={sliderTablet[11]} alt="card" />*/}
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#FFFFFF" }}
                key={index}
                onClick={() => handleVideoButtonClick(10)}
              />
            ))}
            <div className={s.cardVideoBox}>
              <video
                className={s.cardVideo}
                src={VIDEOS[10]}
                autoPlay
                playsInline
                width="100%"
                type="video/mp4"
                muted
                loop="true"
                preload="auto"
              ></video>
            </div>
            <div className={s.cardDesc} style={{ background: "#FFFFFF" }}>
              <p className={s.cardText}>Burger Club</p>
            </div>
          </li>
          <li className={s.item12}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#ABABD1" }}
                key={index}
                onClick={() => handleVideoButtonClick(11)}
              />
            ))}
            <img src={sliderTablet[12]} alt="card" />
            <div className={s.cardDesc} style={{ background: "#ABABD1" }}>
              <p className={s.cardText}>FR Project</p>
            </div>
          </li>
          <li className={s.item13}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#E8DCCC" }}
                key={index}
                onClick={() => handleVideoButtonClick(12)}
              />
            ))}
            <div className={s.singleVideoBox}>
              <video
                className={s.singleVideo}
                src={VIDEOS[12]}
                autoPlay
                playsInline
                width="100%"
                type="video/mp4"
                muted
                loop="true"
                preload="auto"
              ></video>
            </div>
            {/*<img src={sliderTablet[13]} alt="card" />*/}
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.cardText}>Map USA</p>
            </div>
          </li>
          <li className={s.item14}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#E8DCCC" }}
                key={index}
                onClick={() => handleVideoButtonClick(13)}
              />
            ))}
            <div className={s.singleVideoBox}>
              <video
                className={s.singleVideo}
                src={VIDEOS[13]}
                autoPlay
                playsInline
                width="100%"
                type="video/mp4"
                muted
                loop="true"
                preload="auto"
              ></video>
            </div>
            {/*<img src={sliderTablet[13]} alt="card" />*/}
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.cardText}>Arpa net</p>
            </div>
          </li>
          <li className={s.item15}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#E1A9C4" }}
                key={index}
                onClick={() => handleVideoButtonClick(14)}
              />
            ))}
            <div className={s.singleVideoBox}>
              <video
                className={s.singleVideo}
                src={VIDEOS[14]}
                autoPlay
                playsInline
                width="100%"
                type="video/mp4"
                muted
                loop="true"
                preload="auto"
              ></video>
            </div>
            {/*<img src={sliderTablet[13]} alt="card" />*/}
            <div className={s.cardDesc} style={{ background: "#E1A9C4" }}>
              <p className={s.cardText}>Foxes print</p>
            </div>
          </li>
          <li className={s.item16}>
            {VIDEOS.map((videoUrl, index) => (
              <GoPlay
                className={s.iconPlay}
                style={{ fill: "#E8DCCC" }}
                key={index}
                onClick={onCheckSoundBtn}
              />
            ))}
            <div className={s.singleVideoBox}>
              <video
                className={s.singleVideo}
                src={VIDEOS[15]}
                autoPlay
                playsInline
                width="100%"
                type="video/mp4"
                muted
                loop="true"
                preload="auto"
              ></video>
            </div>
            {/*<img src={sliderTablet[13]} alt="card" />*/}
            <div className={s.cardDesc} style={{ background: "#E8DCCC" }}>
              <p className={s.cardText}>Sound Animation</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PortfolioDesctop;
