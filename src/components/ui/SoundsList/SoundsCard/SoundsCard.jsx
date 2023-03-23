import React from "react";

import s from "./SoundCard.module.scss";
import { Link } from "react-router-dom";
import { RiMusic2Line } from "react-icons/ri";
import { FiPlay } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";

const SoundsCard = ({ sound }) => {
  return (
    <>
      <div className={s.soundImageWrapper}>
        <div className={s.soundWrapper}>
          <h3 className={s.soundName}>{sound.name}</h3>
          <div className={s.soundLinks}>
            <Link to={`/shop/${sound.id}`}>
              <RiMusic2Line className={s.linkIcon} />
            </Link>
            <FiPlay className={s.linkIcon} />
          </div>
          <div className={s.soundContent}>
            <div>
              <span style={{ marginRight: "5px" }}>{sound.price}</span>
              <span>USD</span>
            </div>
            <CiShoppingCart className="cart-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SoundsCard;
