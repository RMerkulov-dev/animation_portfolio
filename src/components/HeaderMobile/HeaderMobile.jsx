import s from "./HeaderMobile.module.scss";
import Container from "../Container/Container";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const HeaderMobile = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <header className={s.mobileHeader}>
      <Container>
        <div className={s.headerContent}>
          {!isShowMenu && (
            <GiHamburgerMenu
              className={s.burgerIcon}
              onClick={() => setIsShowMenu(!isShowMenu)}
            />
          )}
          <div className={s.mobileMenu}>
            {isShowMenu && (
              <div className={s.backdrop}>
                <nav className={s.headerNav}>
                  <MdClose
                    className={s.closeIcon}
                    onClick={() => setIsShowMenu(!isShowMenu)}
                  />
                  <a className={s.navItem}>Home</a>
                  <a className={s.navItem}>Portfolio</a>
                  <a className={s.navItem}>Store</a>
                  <a className={s.navItem}>Contacts</a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderMobile;
