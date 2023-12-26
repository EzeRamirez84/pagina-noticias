import React from 'react'
import Heading from '../../../common/Heading/Heading'
import SocialMedia from '../social/SocialMedia'
import './side.css'
import Tpost from '../tpost/Tpost'
import { gallery } from '../../../../dummyData'
import Slider from 'react-slick'

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const category = ["mundo", "viajes", "deportes", "diversion", "salud", "moda", "negocios", "tecnología"]
  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia />

      <Heading title="Subscribirse" />
      <section className="subscribe">
        <h1 className="title">Subscribanse a nuestras nuevas historias</h1>
        <form action="">
          <input type="text" placeholder='Email...' />
          <button>
            <i className="fa fa-paper-plane"></i>Enviar
          </button>
        </form>
      </section>


      <section className="banner">
        <img src="./images/sidebar-banner-new.jpg" alt="" />
      </section>

      <Tpost />
      <section className="categorys">
        <Heading title='Categorías' />
        {category.map((val, i) => {
          return (
            <div className="category category1" key={i}>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

      <section className="gallery">
        <Heading title='Galería'/>
        <Slider {...settings}>
          {gallery
            .map((val, i)=>{
              return(
                <div className="img" key={i}>
                  <img src={val.cover} alt="" />
                </div> 
              )
            })
          }
        </Slider>
      </section>
    </>
  )
}

export default Side