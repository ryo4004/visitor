import React, { useState } from 'react'
import request from 'superagent'
import Logo from '../Component/Logo/Logo'
import { Actions } from '../Component/Flux/Actions'

import './Home.css'

const Home = () => {
  const [mode, setMode] = useState(0)
  const [name, setName] = useState("")
  const [code, setCode] = useState("")
  const [address, setAddress] = useState("")
  const [tel, setTel] = useState("")

  const sendPost = (e) => {
    e.preventDefault()
    if (name === "" || address === "" || tel === "") return false
    request.post('/post')
      .type('form')
      .send({ name, code, address, tel })
      .end((err, res) => {
        if (res.body.status) {
          setMode(1)
          setName("")
          setCode("")
          setAddress("")
          setTel("")
          window.scrollTo(0, 0)
          Actions.toastShow("送信しました")
        }
      })
  }

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
        {mode === 0 && (
          <>
            <div className='title'>
              <h2>Visitor card</h2>
              <h1>来場者カード</h1>
            </div>
            <p>新型コロナウイルス感染症対策として来場者カードの記入をお願いしております。</p>
            <p>ご協力をお願いいたします。</p>
            <div className="button entry">
              <button onClick={(e) => changeMode(e, 1)} className="entry" onTouchStart={() => {}}>記入する</button>
            </div>
          </>
        )}
        {mode === 1 && (
          <>
            <div className='title'>
              <h2>Visitor card</h2>
              <h1>来場者カード</h1>
            </div>
            <p>新型コロナウイルス感染症対策として来場者カードの記入をお願いしております。</p>
            <p>ご協力をお願いいたします。</p>
            <div className="form">
              <label>お名前</label>
              <input onChange={(e) => setName(e.target.value)} value={name} />
              <label>郵便番号</label>
              <div className="code">
                <input onChange={(e) => setCode(e.target.value)} value={code} type="number" />
                <button>自動入力</button>
              </div>
              <label>ご住所</label>
              <input onChange={(e) => setAddress(e.target.value)} value={address} />
              <label>電話番号</label>
              <input onChange={(e) => setTel(e.target.value)} value={tel} type="number" />
            </div>
            <div className="button">
              <button onClick={(e) => sendPost(e)} onTouchStart={() => {}} disabled={buttondisabled}>送信</button>
              <p>お預かりした連絡先は</p>
              <p>新型コロナウイルス感染症対策以外では</p>
              <p>使用しません。</p>
              <p><a href="https://winds-n.com/policy" target="_blank">ザ・ウィンド・アンサンブルの個人情報保護方針はこちら</a></p>
            </div>
          </>
        )}
        {mode === 2 && (
          <>
            <p>ご協力ありがとうございました</p>
            <div className="button">
              <button onClick={(e) => back(e)} onTouchStart={() => {}}>戻る</button>
            </div>
          </>
        )}
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

export default Home