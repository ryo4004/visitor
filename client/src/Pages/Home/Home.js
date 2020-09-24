import React from 'react'
import { useHistory } from 'react-router-dom'

import Logo from '../../Component/Logo/Logo'

const Home = () => {
  const history = useHistory()
  return (
    <div className="home">
      <div className="title">
        <h2>Visitor card</h2>
        <h1>来場者カード</h1>
      </div>
      <p>新型コロナウイルス感染症対策として来場者カードの記入をお願いしております。</p>
      <p>ご協力をお願いいたします。</p>
      <div className="button entry">
        <button onClick={() => history.push('/visitor')} className="entry" onTouchStart={() => {}}>
          記入する
        </button>
      </div>
    </div>
  )
}

export default Home
