import React from "react";

import s from "./SoundCard.module.scss";

const SoundsCard = ({ children }) => {
  return (
    <>
      <div className={s.soundImageWrapper}>{children}</div>
    </>
  );
};

export default SoundsCard;
