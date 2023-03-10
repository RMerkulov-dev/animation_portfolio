import s from "./HeaderShop.module.scss";

import React from "react";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";

const HeaderShop = () => {
  return (
    <header>
      <Container>
        <div className={s.headerContent}>
          <NavLink to="/" className={s.logo}>
            <CgWebsite className={s.homeIcon} />
          </NavLink>
          <NavLink to="/cart" className={s.cart}>
            <FiShoppingCart className={s.cartIcon} />
          </NavLink>
        </div>
      </Container>
    </header>
  );
};

export default HeaderShop;
