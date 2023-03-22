import React from "react";
import s from "./SoundsList.module.scss";
import SoundsCard from "./SoundsCard/SoundsCard";

import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const SoundsList = () => {
  return (
    <>
      <div className={s.soundsList}>
        <SoundsCard>
          <div className={s.soundWrapper}>
            <h3 className={s.soundName}>
              <Link to="/shop/id" className={s.soundName}>
                Spring vibes
              </Link>
            </h3>
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
            <h3 className={s.soundName}>
              <Link to="/shop/id" className={s.soundName}>
                Best moments
              </Link>
            </h3>
            <div className={s.soundContent}>
              <div>
                <span>40</span>
                <span>USD</span>
              </div>
              <CiShoppingCart className="cart-icon" />
            </div>
          </div>
        </SoundsCard>
        <SoundsCard>
          <div className={s.soundWrapper}>
            <h3 className={s.soundName}>
              <Link to="/shop/id" className={s.soundName}>
                Techno works
              </Link>
            </h3>
            <div className={s.soundContent}>
              <div>
                <span>80</span>
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
