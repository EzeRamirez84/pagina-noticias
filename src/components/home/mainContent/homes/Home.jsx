import React from 'react';
import './home.css'
import Popular from '../popular/Popular';
import Ppost from '../Ppost/Ppost';
import Life from '../life/Life';
import Music from '../musics/Music';

const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <Popular/>
            <Ppost/>
            <Life/>
            <Music/>
          </section>
          <section className="sideContent"></section>
        </div>
      </main>
    </>
  )
}

export default Home
