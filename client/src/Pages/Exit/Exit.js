import React from 'react'
import { useHistory } from 'react-router-dom'

// import './Exit.css'

const Exit = () => {
  const history = useHistory()
  return (
    <div className="home">
      <p>ご協力ありがとうございました</p>
      <div className="button">
        <button onClick={() => history.push('/home')} onTouchStart={() => {}}>
          戻る
        </button>
      </div>
    </div>
  )
}

export default Exit
