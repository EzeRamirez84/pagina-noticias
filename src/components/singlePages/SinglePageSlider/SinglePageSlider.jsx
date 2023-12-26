import React from 'react'
import './singlePageSlider.css'
// import './popular.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from '../../../dummyData';


const SinglePageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ]
  };
  return (
    <>
      <section className="singlepopular">
        <Slider {...settings}>
          {popular.map((val) => {
            return (
              <div className="items" key={val.id}>
                <div className="box">
                  <div className="images">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h1 className="title">{val.title}</h1>
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

export default SinglePageSlider