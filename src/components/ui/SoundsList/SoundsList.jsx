import React from "react";
import s from "./SoundsList.module.scss";
import SoundsCard from "./SoundsCard/SoundsCard";

const SoundsList = ({ sounds }) => {
  return (
    <>
      <div className={s.soundsList}>
        {sounds?.map((sound, i) => (
          <SoundsCard sound={sound} key={i} />
        ))}
      </div>
    </>
  );
};

export default SoundsList;
