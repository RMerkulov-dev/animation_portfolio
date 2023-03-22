import React from "react";
import s from "./SoundsList.module.scss";
import SoundsCard from "./SoundsCard/SoundsCard";

import { CiShoppingCart } from "react-icons/ci";
import { RiMusic2Line } from "react-icons/ri";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

const SoundsList = () => {
  return (
    <>
      <div className={s.soundsList}>
        <SoundsCard>
          <div className={s.soundWrapper}>
            <h3 className={s.soundName}>Spring vibes</h3>
            <div className={s.soundLinks}>
              <Link to="/shop/id">
                <RiMusic2Line className={s.linkIcon} />
              </Link>
              <FiPlay className={s.linkIcon} />
            </div>
            <div className={s.soundContent}>
              <div>
                <span>20</span>
                <span>USD</span>
              </div>
              <CiShoppingCart className="cart-icon" />
            </div>
          </div>
        </SoundsCard>
        <SoundsCard>
          <div className={s.soundWrapper}>
            <h3 className={s.soundName}>Spring vibes</h3>
            <div className={s.soundLinks}>
              <Link to="/shop/id">
                <RiMusic2Line className={s.linkIcon} />
              </Link>
              <FiPlay className={s.linkIcon} />
            </div>
            <div className={s.soundContent}>
              <div>
                <span>20</span>
                <span>USD</span>
              </div>
              <CiShoppingCart className="cart-icon" />
            </div>
          </div>
        </SoundsCard>
        <SoundsCard>
          <div className={s.soundWrapper}>
            <h3 className={s.soundName}>Spring vibes</h3>
            <div className={s.soundLinks}>
              <Link to="/shop/id">
                <RiMusic2Line className={s.linkIcon} />
              </Link>
              <FiPlay className={s.linkIcon} />
            </div>
            <div className={s.soundContent}>
              <div>
                <span>20</span>
                <span>USD</span>
              </div>
              <CiShoppingCart className="cart-icon" />
            </div>
          </div>
        </SoundsCard>
      </div>
    </>
  );
};

export default SoundsList;
