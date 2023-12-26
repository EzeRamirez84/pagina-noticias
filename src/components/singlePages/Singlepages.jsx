import React, { useState, useEffect } from 'react'
import SinglePageSlider from './SinglePageSlider/SinglePageSlider'
import Side from '../home/sideContent/side/Side'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { hero } from '../../dummyData'
import './singlepage.css'

const Singlepages = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const item = hero.find((item) => item.id === parseInt(id))
    window.scrollTo(0, 0)
    if (item)
    {
      setItem(item)
    }
  }, [id])


  return (
    <>
      {item ? (
        <main >
          <SinglePageSlider />
          <div className="container" >
            <section className='mainContent details'>
              <h1 className="title">{item.title}</h1>
              <div className="author">
                <span>by</span>
                <img src={item.authorImg} alt="" />
                <p>{item.authorName}</p>
                <label >{item.time}</label>
              </div>

              <div className='social'>
                <div className='socBox'>
                  <i className='fab fa-facebook-f'></i>
                  <span>SHARE</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-twitter'></i>
                  <span>TWITTER</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-tiktok'></i>
                  <span>SHARE</span>
                </div>
                <div className='socBox'>
                  <i className='fa fa-envelope'></i>
                </div>
                <div className='socBox'>
                  <i className='fab fa-pinterest'></i>
                </div>
              </div>

              <div className="desctop">
                {item.desc.map((val) => {
                  return (
                    <>
                      <p>{val.para1}</p>
                      <p>{val.para2}</p>
                    </>
                  )
                })}
              </div>

              <img src={item.cover} alt="" />
              {item.desc.map((val) => (
                <p>{val.para3}</p>
              ))}

              <div className="descbot">
                {item.details.map((data, i) => {
                  return (
                    <div key={i}>
                      <h1>{data.title}</h1>
                      <p>{data.para1}</p>
                    </div>
                  )
                })}
              </div>

              <div className="quote">
                <i className='fa fa-quote-left'></i>
                {item.details.map((data, i) => (
                    <p key={i}>{data.quote}</p>
                ))}
                {/* <i className="fa fa-quote-right"></i> */}
              </div>
              <div className="desctop">
                {item.details.map((data) => (
                    <>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </>
                ))}
              </div>

            </section>

            <section className="sideContent">
              <Side />
            </section>
          </div>
        </main>
      ) : (
        <h1>not found</h1>
      )}
    </>
  )
}

export default Singlepages