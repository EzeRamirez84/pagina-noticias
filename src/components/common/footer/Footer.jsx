import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="../images/tech-logo-footer.png" alt="" />
            <p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p>
            <i className="fa fa-envelope"></i>
            <span> hello@beautiful.com </span><br />
            <i className="fa fa-headphones"></i>
            <span> +99 1235531643 </span>

          </div>
          <div className="box">
            <h3>SPORT</h3>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero2.jpg" alt="" />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          <div className="box">
            <h3>CRICKET</h3>
            <div className="item">
              <img src="../images/hero/hero3.jpg" alt="" />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>
          <div className="box">
            <h3>LABELS</h3>
            <ul>
              <li> <span>Boxing</span><label >(8)</label></li>
              <li> <span>Fashion</span><label >(3)</label></li>
              <li> <span>Health</span><label >(2)</label></li>
              <li> <span>Nature</span><label >(44)</label></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <div className="container flexSB">
          <p>© all rights reserved</p>
          <p>rehecho por Eze <i className='fa fa-heart'></i> con video de gorkhcoder</p>
        </div>
      </div>
    </>
  )
}

export default Footer