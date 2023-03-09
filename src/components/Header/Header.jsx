import s from "./Header.module.scss";
import Container from "../Container/Container";
import { smoothScroll } from "../../hooks/useScroll";

const Header = () => {
  function handleLinkClick(event, targetId) {
    event.preventDefault();
    const duration = 500;
    smoothScroll(targetId, duration);
  }
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.headerNav}>
          <a onClick={(e) => handleLinkClick(e, "hero")}>Home</a>
          <a onClick={(e) => handleLinkClick(e, "portfolio")}>Portfolio</a>
          <a onClick={(e) => handleLinkClick(e, "contacts")}>Contacts</a>
          <a onClick={(e) => handleLinkClick(e, "store")}>Store</a>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
