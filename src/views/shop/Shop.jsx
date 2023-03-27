import React from "react";
import Container from "../../components/Container/Container";

import { BsSearch } from "react-icons/bs";

import s from "./Shop.module.scss";

const Shop = () => {
  return (
    <section>
      <Container>
        <div>
          <div className={s.filterWrapper}>
            <select>
              <option>Filter sounds</option>
              <option value="techno">Techno</option>
              <option value="house">House</option>
            </select>
          </div>
        </div>
        <div>
          <div className={s.filterWrapper}>
            <select>
              <option>Sort By</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </div>
        <div>
          <div className={s.seachWrapper}>
            <input type="text" placeholder="Search..." />
            <span>
              <BsSearch />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
