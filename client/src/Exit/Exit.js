import React, { useState } from 'react'
import request from 'superagent'
import Logo from '../Component/Logo/Logo'
import { Actions } from '../Component/Flux/Actions'

import PostalCode from "../PostalCode/PostalCode"

// import './Exit.css'

const Exit = () => {
  const [mode, setMode] = useState(0)
  const [name, setName] = useState("")
  const [code, setCode] = useState("")
  const [address, setAddress] = useState("")
  const [tel, setTel] = useState("")

  const changeMode = (e, mode) => {
    e.preventDefault()
    setMode(mode)
    window.scrollTo(0, 0)
  }

  const buttondisabled = (name === "" || address === "" || tel === "") ? true : false

  return (
    <div className='home'>
      <div className='logo'>
        <Logo />
      </div>
      <div className='layout'>
        <p>ご協力ありがとうございました</p>
        <div className="button">
          <button onClick={(e) => back(e)} onTouchStart={() => {}}>戻る</button>
        </div>
      </div>
      <footer>
        <div>
          <div className='author'>
            <Logo />
            <small>&copy; The Wind Ensemble 1985-{new Date().getFullYear()} All Rights Reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Exit