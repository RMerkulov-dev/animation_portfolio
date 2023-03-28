import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../../components/Container/Container";
import { SOUNDS } from "../../data/sounds";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { motion } from "framer-motion";

import s from "./ProductDetails.module.scss";
import Helmet from "../../components/Helmet/Helmet";
const ProductDetails = () => {
  const [tab, setTab] = useState("desc");

  const { id } = useParams();
  const sound = SOUNDS.find((item) => item.id === id);

  const { category, name, price, avgRating, reviews, description, shortDesc } =
    sound;

  return (
    <Helmet title={name}>
      <div style={{ height: "100vh" }}>
        <section className="section">
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
              <p className={s.categoryTitle}>{category}</p>
              <p className={s.deskTitle}>{shortDesc}</p>
              <motion.button className={s.shopButton} whileTap={{ scale: 1.2 }}>
                <CiShoppingCart className={s.cartIcon} />
                <span>Add to Cart</span>
              </motion.button>
            </div>
          </Container>
        </section>
        <section className="section">
          <Container>
            <div className={s.descrWrapper}>
              <h4
                className={`${
                  tab === "desc" ? s.descTitle_active : s.descTitle
                }`}
                onClick={() => setTab("desc")}
              >
                Description
              </h4>
              <h4
                className={`${
                  tab === "rev" ? s.descTitle_active : s.descTitle
                }`}
                onClick={() => setTab("rev")}
              >
                Reviews ({reviews.length})
              </h4>
            </div>
            {tab === "desc" ? (
              <div className={s.tabWrapper}>{description}</div>
            ) : (
              <div className={s.reviewWrapper}>
                <ul>
                  {reviews.map((review) => (
                    <li>
                      <p>
                        <span>{review.rating}</span>(Average rating)
                      </p>
                      <p>{review.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Container>
        </section>
      </div>
    </Helmet>
  );
};

export default ProductDetails;
