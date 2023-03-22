import React from "react";
import s from "./SoundsList.module.scss";
import SoundsCard from "./SoundsCard/SoundsCard";
import { sounds } from "../../../helpers/sounds";
import { CiShoppingCart } from "react-icons/ci";

const SoundsList = () => {
  return (
    <>
      <ul className={s.soundsList}>
        {sounds.map((sound) => (
          <li>
            <SoundsCard>
              <div className={s.soundWrapper}>
                <p className={s.soundName}>{sound.title}</p>
                <div className={s.soundContent}>
                  <span>{sound.price} $</span>
                  <CiShoppingCart className="cart-icon" />
                </div>
              </div>
            </SoundsCard>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SoundsList;
