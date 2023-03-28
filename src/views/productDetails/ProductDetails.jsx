import React from "react";
import { useParams } from "react-router-dom";

import Container from "../../components/Container/Container";
import { SOUNDS } from "../../data/sounds";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { motion } from "framer-motion";

import s from "./ProductDetails.module.scss";
const ProductDetails = () => {
  const { id } = useParams();
  const sound = SOUNDS.find((item) => item.id === id);

  const { category, name, price, avgRating, review, description, shortDesc } =
    sound;

  return (
    <section className="section" style={{ height: "100vh" }}>
      <Container>
        <div className={s.soundImageWrapper}>
          <p>{name}</p>
          <span>{price} USD</span>
          <div className={s.soundRating}>
            <div>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <BsStarHalf />
              <p className={s.ratingText}>({avgRating}rating)</p>
            </div>
          </div>
        </div>
        <div className={s.detailsWrapper}>
          <p>{shortDesc}</p>
          <motion.button className={s.shopButton} whileTap={{ scale: 1.2 }}>
            <CiShoppingCart className={s.cartIcon} />
            <span>Add to Cart</span>
          </motion.button>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
