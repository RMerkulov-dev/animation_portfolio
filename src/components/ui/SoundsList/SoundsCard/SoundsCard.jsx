import React from "react";
import s from "./SoundCard.module.scss";

import { RiMusic2Line } from "react-icons/ri";
import { FiPlay } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../redux/slices/cartSlice";

import { ToastContainer, toast } from "react-toastify";

const SoundsCard = ({ sound }) => {
  const dispatch = useDispatch();

  //add sound to cart
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: sound.id,
        name: sound.name,
        price: sound.price,
      })
    );
    alert("Product added to the cart");
  };

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
            <CiShoppingCart className="cart-icon" onClick={addToCart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SoundsCard;
