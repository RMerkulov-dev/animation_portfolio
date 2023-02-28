import s from "./Header.module.scss";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.headerNav}>
          <p>Home</p>
          <p>Portfolio</p>
          <p>Contacts</p>
          <p>Store</p>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
