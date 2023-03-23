import React from "react";
import s from "./SoundsList.module.scss";
import SoundsCard from "./SoundsCard/SoundsCard";

const SoundsList = ({ sounds }) => {
  return (
    <>
      <div className={s.soundsList}>
        {sounds.map((sound) => (
          <SoundsCard sound={sound} key={sound.id} />
        ))}
      </div>
    </>
  );
};

export default SoundsList;
