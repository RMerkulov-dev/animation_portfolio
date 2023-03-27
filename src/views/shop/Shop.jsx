import React, { useState } from "react";
import Container from "../../components/Container/Container";

import { SOUNDS } from "../../data/sounds";

import s from "./Shop.module.scss";
import SoundsList from "../../components/ui/SoundsList/SoundsList";
import { FiSearch } from "react-icons/fi";

const Shop = () => {
  const [soundsData, setSoundsData] = useState(SOUNDS);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "techno") {
      const filteredSounds = SOUNDS.filter(
        (item) => item.category === "techno"
      );
      setSoundsData(filteredSounds);
    }
    if (filterValue === "house") {
      const filteredSounds = SOUNDS.filter((item) => item.category === "house");
      setSoundsData(filteredSounds);
    }
  };

  const handleSearch = (e) => {
    const searchSound = e.target.value;
    const searchedSound = SOUNDS.filter((item) =>
      item.name.toLowerCase().includes(searchSound.toLowerCase())
    );
    setSoundsData(searchedSound);
  };

  return (
    <>
      <section className="section">
        <Container>
          <h2 className="tittle-h2">All sounds</h2>
          <div className={s.selectWrapper}>
            <div>
              <div className={s.filterWrapper}>
                <select onChange={handleFilter}>
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
          </div>
          <div className={s.searchWrapper}>
            <div className={s.searchBox}>
              <input
                type="text"
                placeholder="Search..."
                onChange={handleSearch}
              />
              <FiSearch className={s.searchIcon} />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          {soundsData.length === 0 ? (
            <h1>No sounds are found</h1>
          ) : (
            <SoundsList sounds={soundsData} />
          )}
        </Container>
      </section>
    </>
  );
};

export default Shop;
