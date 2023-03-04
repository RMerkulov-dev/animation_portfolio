import s from "./Header.module.scss";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.headerNav}>
          <a>Home</a>
          <a>Portfolio</a>
          <a>Contacts</a>
          <a>Store</a>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
