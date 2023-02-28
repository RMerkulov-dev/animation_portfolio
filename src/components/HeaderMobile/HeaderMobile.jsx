import s from "./HeaderMobile.module.scss";
import Container from "../Container/Container";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const HeaderMobile = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <header>
      <Container>
        <div className={s.headerContent}>
          <div className={s.mobileMenu}>
            {isShowMenu ? (
              <MdClose
                className={s.burgerIcon}
                onClick={() => setIsShowMenu(!isShowMenu)}
              />
            ) : (
              <GiHamburgerMenu
                className={s.burgerIcon}
                onClick={() => setIsShowMenu(!isShowMenu)}
              />
            )}

            {isShowMenu && (
              <nav className={s.headerNav}>
                <p className={s.navItem}>Home</p>
                <p className={s.navItem}>Portfolio</p>
                <p className={s.navItem}>Store</p>
                <p className={s.navItem}>Contacts</p>
              </nav>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderMobile;
