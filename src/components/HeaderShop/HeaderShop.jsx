import s from "./HeaderShop.module.scss";

import React from "react";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

import { motion } from "framer-motion";

const HeaderShop = () => {
  return (
    <header>
      <Container>
        <div className={s.headerContent}>
          <NavLink to="/" className={s.logo}>
            <CgWebsite className={s.headerIcon} />
          </NavLink>
          <div className={s.navHeader}>
            <motion.div whileTap={{ scale: 1.2 }}>
              <AiOutlineHeart className={s.headerIcon} />
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }}>
              <NavLink to="/cart" className={s.cart}>
                <FiShoppingCart className={s.headerIcon} />
              </NavLink>
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }}>
              <FaUserCircle className={s.headerIcon} />
            </motion.div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderShop;
