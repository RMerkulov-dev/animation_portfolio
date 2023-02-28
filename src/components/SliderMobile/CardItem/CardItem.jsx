import s from "./CardItem.module.scss";
import Studio from "../../../assets/portfolio/mask_group.png";

const cards = [
  {
    id: 1,
    title: "Card 1",
    image: `${Studio}`,
    description: "Description of Card 1",
    color: "#E8B099",
  },
  {
    id: 2,
    title: "Card 2",
    image: `${Studio}`,
    description: "Description of Card 2",
  },
  {
    id: 3,
    title: "Card 3",
    image: `${Studio}`,
    description: "Description of Card 3",
  },
];

const CardItem = () => {
  return (
    <>
      {cards.map((card) => (
        <div key={card.id} className={s.sliderCard}>
          <img src={card.image} alt="card" className={s.sliderImage} />
          <div className={s.cardContentDown}>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardItem;
