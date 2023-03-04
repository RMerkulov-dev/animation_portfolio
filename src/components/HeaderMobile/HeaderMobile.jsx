import s from "./HeaderMobile.module.scss";
import Container from "../Container/Container";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { smoothScroll } from "../../hooks/useScroll";

const HeaderMobile = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  function handleLinkClick(event, targetId) {
    event.preventDefault();
    const duration = 500;
    smoothScroll(targetId, duration);
    setIsShowMenu(false);
  }

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

                  <a
                    className={s.navItem}
                    onClick={(e) => handleLinkClick(e, "hero")}
                  >
                    Home
                  </a>

                  <a
                    className={s.navItem}
                    onClick={(e) => handleLinkClick(e, "portfolio")}
                  >
                    Portfolio
                  </a>
                  <a
                    className={s.navItem}
                    onClick={(e) => handleLinkClick(e, "store")}
                  >
                    Store
                  </a>

                  <a
                    className={s.navItem}
                    onClick={(e) => handleLinkClick(e, "contacts")}
                  >
                    Contacts
                  </a>
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
