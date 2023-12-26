import React, {useState} from 'react'
import Head from './Head'
import { Link } from 'react-router-dom'

import './header.css'

function Header() {
  const [navbar, setnavbar] = useState(false)
  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav >
            <ul className={navbar ? 'navbar' : 'flex'}
            onClick={() => setnavbar(false)}
            >
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Culture'>Cultura</Link></li>
              <li><Link to='/politics'>Política</Link></li>
              <li><Link to='/memes'>Memes</Link></li>
              <li><Link to='/sports'>Deportes</Link></li>
              <li><Link to='/boxed'>Boxed</Link></li>
              <li><Link to='/reviews'>Reseñas</Link></li>

            </ul>
            <button className='barIco'onClick={()=>setnavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header