import React from 'react'
import Heading from '../../../common/Heading/Heading';
import Slider from 'react-slick';
import { popular } from '../../../../dummyData';

import './music.css'

const Music = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
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
      <section className="music">
        <Heading title="Noticias de música" />
        <div className="content">
          <Slider {...settings}>
            {popular
            .filter((val) => val.category === 'fun')
            .map((val) => {
              return (
                <div className="items" key={val.id}>
                  <div className="box shadow flexSB">
                    <div className="images ">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div className="category category1">
                        <span>{val.category}</span>
                      </div>
                    </div>
                    <div className="text ">
                      <h1 className="title">{val.title.slice(0, 40)}...</h1>
                      <div className="date">
                        <i className="fas fa-calendar-days" id='i-date'></i>
                        <label htmlFor="i-date">{val.date}</label>
                      </div>
                      <p className='desc'>{val.desc.slice(0,250)}...</p>
                      <div className="comment">
                        <i className="fas fa-share" id='i-comm'></i>
                        <label htmlFor="i">Share /</label>

                        <i className="fas fa-comment" id='i-comm'></i>
                        <label htmlFor="i">{val.date}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  )

}

export default Music