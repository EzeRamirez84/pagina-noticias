import React from 'react';
import Heading from '../../../common/Heading/Heading';
import { popular } from '../../../../dummyData';
import Slider from "react-slick";
import './popular.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <>
      <section className="popular">
        <Heading title="Popular" />
        <Slider {...settings}>
        {popular.map((val) => {
          return (
            <div className="items" key={val.id}>
              <div className="box shadow">
                <div className="images row">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="category category1">
                    <span>{val.category}</span>
                  </div>
                </div>
                <div className="text row">
                  <h1 className="title">{val.title.slice(0, 40)}...</h1>
                  <div className="date">
                    <i className="fas fa-calendar-days" id='i-date'></i>
                    <label htmlFor="i-date">{val.date}</label>
                  </div>
                  <div className="comment">
                    <i className="fas fa-comment" id='i-comm'></i>
                    <label htmlFor="i">{val.date}</label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </Slider>
      </section>
    </>
  )
}

export default Popular;
