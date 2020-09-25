import React from 'react'
import { useHistory } from 'react-router-dom'
import request from 'superagent'

import { Actions } from '../../Component/Flux/Actions'

import { useInput } from '../../hooks/useInput'

import './Confirm.css'

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
    <div className="confirm">
      <div className="title">
        <h2>Visitor card</h2>
        <h1>来場者カード</h1>
      </div>
      <div className="form">
        <div>
          <label>お名前</label>
          <p>{state.name}</p>
        </div>
        <div>
          <label>郵便番号</label>
          <p>{state.code}</p>
        </div>
        <div>
          <label>ご住所</label>
          <p>{state.address}</p>
        </div>
        <div>
          <label>電話番号</label>
          <p>{state.tel}</p>
        </div>
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
  )
}

export default Confirm
