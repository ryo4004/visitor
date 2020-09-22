import React from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../Component/Logo/Logo'

// import './Exit.css'

const Exit = () => {
  const history = useHistory()
  return (
    <div className="home">
      <div className="logo">
        <Logo />
      </div>
      <div className="layout">
        <p>ご協力ありがとうございました</p>
        <div className="button">
          <button onClick={() => history.push('/home')} onTouchStart={() => {}}>
            戻る
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

export default Exit
