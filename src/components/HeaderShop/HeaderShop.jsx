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
            <AiOutlineHeart className={s.headerIcon} />
            <NavLink to="/cart" className={s.cart}>
              <FiShoppingCart className={s.headerIcon} />
            </NavLink>
            FaUserCircle className={s.headerIcon} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderShop;
