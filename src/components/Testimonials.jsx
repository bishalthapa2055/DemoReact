import React, { useState } from "react";
import Sectionhead from "./Sectionhead";
import { testimonials } from "../../data.js";
import { ImQuotesLeft } from "react-icons/im";
import Cards from "../pages/UI/Cards";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimonialsHandler = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextTestimonialsHandler = () => {
    setIndex((prev) => prev + 1);

    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };
  return (
    <>
      <section className="testimonials">
        <div className="container testimonials__container">
          <Sectionhead
            icons={<ImQuotesLeft />}
            title="Testimonials"
            className="testimonials__head"
          />
          <Cards className="testimonial">
            <div className="testimonials__avatar">
              <img src={avatar} alt={name} />
            </div>
            <p className="testimonial__quote">{`"${quote}"`}</p>
            <h5>{name}</h5>
            <small className="testimonial__title">{job}</small>
          </Cards>

          <div className="testimonials__btn-container">
            <button className="testimonials__btn">
              <IoIosArrowBack onClick={prevTestimonialsHandler} />
            </button>
            <button className="testimonials__btn">
              <IoIosArrowForward onClick={nextTestimonialsHandler} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
