import s from "./ModalVideo.module.scss";
import { MdClose } from "react-icons/md";
import usePortal from "../../hooks/usePortal";
import { useEffect } from "react";

const ModalVideo = ({ children, onClose }) => {
  const portalNode = usePortal();

  return (
    <>
      {portalNode && (
        <div className={s.backdrop} onClick={onClose}>
          <MdClose className={s.closeIcon} onClick={onClose} />
          <div className={s.modalWrapper} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalVideo;
