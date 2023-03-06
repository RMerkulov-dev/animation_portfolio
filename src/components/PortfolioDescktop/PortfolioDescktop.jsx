import s from "./PortfolioDesctop.module.scss";
import { sliderTablet } from "../../helpers/cards";

const PortfolioDesctop = () => {
  return (
    <section>
      <div className={s.portfolioWrapper}>
        <ul className={s.portfolioList}>
          <li className={s.item1}>
            <img src={sliderTablet[0]} alt="card" />
          </li>
          <li className={s.item2}>
            <img src={sliderTablet[1]} alt="card" />
          </li>
          <li className={s.item3}>
            <img src={sliderTablet[2]} alt="card" />
          </li>
          <li className={s.item4}>
            <img src={sliderTablet[3]} alt="card" />
          </li>

          <li className={s.item9}>
            <img src={sliderTablet[4]} alt="card" />
          </li>
          <li className={s.item10}>
            <img src={sliderTablet[5]} alt="card" />
          </li>
          <li className={s.item11}>
            <img src={sliderTablet[6]} alt="card" />
          </li>
          <li className={s.item12}>
            <img src={sliderTablet[7]} alt="card" />
          </li>
          <li className={s.item13}>
            <img src={sliderTablet[8]} alt="card" />
          </li>
          <li className={s.item14}>
            <img src={sliderTablet[9]} alt="card" />
          </li>
          <li className={s.item15}>
            <img src={sliderTablet[11]} alt="card" />
          </li>
          <li className={s.item16}>
            <img src={sliderTablet[12]} alt="card" />
          </li>
          <li className={s.item17}>
            <img src={sliderTablet[13]} alt="card" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PortfolioDesctop;
