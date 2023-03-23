import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../../redux/slices/cartSlice/cartSelectors";

import { FiShoppingCart } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

import Container from "../Container/Container";
import { motion } from "framer-motion";

import s from "./HeaderShop.module.scss";

const HeaderShop = () => {
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <header>
      <Container>
        <div className={s.headerContent}>
          <NavLink to="/" className={s.logo}>
            <CgWebsite className={s.headerIcon} />
          </NavLink>
          <div className={s.navHeader}>
            <motion.div whileTap={{ scale: 1.2 }} className={s.iconWrapper}>
              <span className={s.budgetIcon}>2</span>
              <AiOutlineHeart className={s.headerIcon} />
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }} className={s.iconWrapper}>
              <NavLink to="/cart" className={s.cart}>
                <span className={s.budgetIcon}>{totalQuantity}</span>
                <FiShoppingCart className={s.headerIcon} />
              </NavLink>
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }} className={s.iconWrapper}>
              <FaUserCircle className={s.headerIcon} />
            </motion.div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderShop;
