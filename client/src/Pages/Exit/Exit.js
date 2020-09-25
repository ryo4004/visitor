import React from 'react'
import { Link } from 'react-router-dom'

import './Exit.css'

const Exit = () => {
  return (
    <div className="exit">
      <div className="title">
        <h2>Visitor card</h2>
        <h1>来場者カード</h1>
      </div>
      <p>ご協力ありがとうございました</p>
      <div className="link-to-home">
        <a href="https://winds-n.com" className="link">
          <div>
            <div className="text">ホームへ</div>
            <div className="link-arrow">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </a>
      </div>
      <p>
        <Link to="/home" className="back-to-home">
          もう一度入力する
        </Link>
      </p>
    </div>
  )
}

export default Exit
