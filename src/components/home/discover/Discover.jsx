import React from 'react'
// import './discover.css' //version mia
import './style.css'
import Heading from '../../common/Heading/Heading'
import { discover } from '../../../dummyData'

const Discover = () => {
  return (
    <>
      <section className="discover">
        <div className="container">
          <Heading title="Discover" />
          <div className="content">
            {discover.map((val, i) => {
              return (
                <div className="box" key={i}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="back"><h1 className='title' >{val.title}</h1></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Discover