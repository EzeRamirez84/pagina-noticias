import React from 'react'
import Heading from '../../../common/Heading/Heading'
import SocialMedia from '../social/SocialMedia'
import './side.css'
import Tpost from '../tpost/Tpost'

const Side = () => {
  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia/>

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

      <Tpost/>
    </>
  )
}

export default Side