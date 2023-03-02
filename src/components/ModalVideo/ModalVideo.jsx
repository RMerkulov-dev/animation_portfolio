import s from "./ModalVideo.module.scss";
import { MdClose } from "react-icons/md";
import StudioVideo from "../../assets/video/studio.mp4";

const ModalVideo = ({ openModal, setOpenModal }) => {
  return (
    <div className={s.backdrop}>
      <MdClose
        className={s.closeIcon}
        onClick={() => setOpenModal(!openModal)}
      />
      <div className={s.modalWrapper}>
        <video
          controls
          autoPlay
          className={s.modalVideo}
          src={StudioVideo}
          type="video/mp4"
        ></video>
      </div>
    </div>
  );
};

export default ModalVideo;
