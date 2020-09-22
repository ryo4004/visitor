import React, { useState } from 'react'
import request from 'superagent'
import Logo from '../Component/Logo/Logo'
import { Actions } from '../Component/Flux/Actions'

import PostalCode from '../PostalCode/PostalCode'

// import './Input.css'

const useInput = () => {
  const defaultInput = localStorage.getItem('answer')
    ? JSON.parse(localStorage.getItem('answer'))
    : {
        name: '',
        code: '',
        address: '',
        tel: '',
      }

  const [state, setState] = useState(defalutInput)

  const updateState = (key, value) => {
    setState({
      ...state,
      [key]: value,
    })
  }
  return { state, updateState }
}

const Input = () => {
  const { state, updateState } = useInput()
  const sendPost = (e) => {
    e.preventDefault()
    if (state.name === '' || state.address === '' || state.tel === '') return false
    request
      .post('/post')
      .type('form')
      .send({ name: state.name, code: state.code, address: state.address, tel: state.tel })
      .end((err, res) => {
        if (res.body.status) {
          setMode(1)
          setName('')
          setCode('')
          setAddress('')
          setTel('')
          window.scrollTo(0, 0)
          Actions.toastShow('送信しました')
        }
      })
  }

  const buttondisabled = state.name === '' || state.address === '' || state.tel === '' ? true : false

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
          <input onChange={(e) => updateState('name', e.target.value)} value={state.name} placeholder="お名前" />
          <PostalCode
            onCodeChange={(value) => updateState('code', value)}
            onAddressChange={(value) => updateState('address', value)}
            code={state.code}
            address={state.address}
          />
          <label>電話番号</label>
          <input
            onChange={(e) => updateState('tel', e.target.value)}
            value={state.tel}
            type="number"
            placeholder="電話番号"
          />
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

export default Input
