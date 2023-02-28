import s from "./Slider.mobile.scss";
import CardItem from "./CardItem/CardItem";

const SliderMobile = () => {
  return (
    <div className={s.sliderWrapper}>
      <div className={s.sliderContent}>
        <CardItem />
      </div>
    </div>
  );
};

export default SliderMobile;
