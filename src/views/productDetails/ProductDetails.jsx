import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice/cartSlice";

import Container from "../../components/Container/Container";
import { SOUNDS } from "../../data/sounds";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { motion } from "framer-motion";

import s from "./ProductDetails.module.scss";
import Helmet from "../../components/Helmet/Helmet";
import { toast } from "react-toastify";
import HeaderShop from "../../components/HeaderShop/HeaderShop";
const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const { id } = useParams();
  const sound = SOUNDS.find((item) => item.id === id);

  const { category, name, price, avgRating, reviews, description, shortDesc } =
    sound;
  const rateSounds = SOUNDS.filter((item) => item.category === category);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
  };

  const addToChart = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
      })
    );
    toast.success("Product added successfully");
  };

  return (
    <Helmet title={name} style={{ height: "100vh" }}>
      <HeaderShop />
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
              <motion.button
                className={s.shopButton}
                whileTap={{ scale: 1.2 }}
                onClick={addToChart}
              >
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
                  {reviews.map((review, i) => (
                    <li key={i}>
                      <p>
                        <span>{review.rating}</span>(Average rating)
                      </p>
                      <p>{review.text}</p>
                    </li>
                  ))}
                </ul>
                <div className={s.reviewForm}>
                  <h4 className={s.reviewTitle}>Leave your experience</h4>
                  <form className={s.formReview} onSubmit={onSubmitHandler}>
                    <div className={s.formGroup}>
                      <input
                        type="text"
                        placeholder="Enter name"
                        ref={reviewUser}
                      />
                    </div>
                    <div className={s.formGroup}>
                      <span onClick={() => setRating(1)}>
                        1
                        <AiTwotoneStar style={{ color: "#ABABD1" }} />
                      </span>
                      <span onClick={() => setRating(2)}>
                        2
                        <AiTwotoneStar style={{ color: "#ABABD1" }} />
                      </span>
                      <span onClick={() => setRating(3)}>
                        3
                        <AiTwotoneStar style={{ color: "#ABABD1" }} />
                      </span>
                      <span onClick={() => setRating(4)}>
                        4
                        <AiTwotoneStar style={{ color: "#ABABD1" }} />
                      </span>
                      <span onClick={() => setRating(5)}>
                        5
                        <AiTwotoneStar style={{ color: "#ABABD1" }} />
                      </span>
                    </div>
                    <div className={s.formGroup}>
                      <textarea
                        ref={reviewMsg}
                        type="text"
                        rows={4}
                        placeholder="Review message"
                      />
                    </div>
                    <motion.button
                      className={s.shopButton}
                      whileTap={{ scale: 1.2 }}
                      type="submit"
                    >
                      <span>Add </span>
                    </motion.button>
                  </form>
                </div>
              </div>
            )}
          </Container>
        </section>
      </div>
    </Helmet>
  );
};

export default ProductDetails;
