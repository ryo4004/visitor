import React from 'react'
import Logo from '../Component/Logo/Logo'

import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="logo">
        <Logo />
      </div>
      <div className="layout">
        <div className="title">
          <h2>Visitor card</h2>
          <h1>来場者カード</h1>
        </div>
        <p>新型コロナウイルス感染症対策として来場者カードの記入をお願いしております。</p>
        <p>ご協力をお願いいたします。</p>
        <div className="button entry">
          <button onClick={(e) => changeMode(e, 1)} className="entry" onTouchStart={() => {}}>
            記入する
          </button>
        </div>
      </div>
      <footer>
        <div>
          <div className="author">
            <Logo />
            <small>&copy; The Wind Ensemble 1985-{new Date().getFullYear()} All Rights Reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
