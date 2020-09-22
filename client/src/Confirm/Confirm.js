import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import request from 'superagent'
import Logo from '../Component/Logo/Logo'
import { Actions } from '../Component/Flux/Actions'

import PostalCode from '../PostalCode/PostalCode'

import { useInput } from '../hooks/useInput'

// import './Confirm.css'

const Confirm = () => {
  const history = useHistory()
  const { state } = useInput()

  console.log(state)

  const sendPost = (e) => {
    e.preventDefault()
    if (name === '' || address === '' || tel === '') return false
    request
      .post('/post')
      .type('form')
      .send({ name, code, address, tel })
      .end((err, res) => {
        if (res.body.status) {
          setName('')
          setCode('')
          setAddress('')
          setTel('')
          localStorage.clear()
          window.scrollTo(0, 0)
          Actions.toastShow('送信しました')
          history.push('/exit')
        }
      })
  }

  const changeMode = (e, mode) => {
    e.preventDefault()
    setMode(mode)
    window.scrollTo(0, 0)
  }

  const buttondisabled = name === '' || address === '' || tel === '' ? true : false

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
        <div className="form">
          <label>お名前</label>
          <p>{state.name}</p>
          <label>郵便番号</label>
          <p>{state.code}</p>
          <label>ご住所</label>
          <p>{state.address}</p>
          <label>電話番号</label>
          <p>{state.tel}</p>
        </div>
        <div className="button input">
          <button onClick={(e) => sendPost(e)} onTouchStart={() => {}} disabled={buttondisabled}>
            送信
          </button>
          <p className="comment">
            入力された連絡先の
            <wbr />
            目的外使用はしません。
          </p>
          <p>
            <a href="https://winds-n.com/policy" target="_blank">
              詳しくはこちら
            </a>
          </p>
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

export default Confirm
