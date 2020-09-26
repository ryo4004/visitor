import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import request from 'superagent'

import { Actions } from '../../Component/Flux/Actions'

import { useInput } from '../../hooks/useInput'
import { useFontsize } from '../../hooks/useFontsize'

import './Confirm.css'

const Confirm = () => {
  const history = useHistory()
  const { state, resetState } = useInput()
  const { fontSize, updateFontSize } = useFontsize()
  const [loading, setLoading] = useState(false)

  const sendPost = (e) => {
    e.preventDefault()
    if (state.name === '' || state.address === '' || state.tel === '') return false
    setLoading(true)
    request
      .post('/post')
      .type('form')
      .send({ name: state.name, code: state.code, address: state.address, tel: state.tel })
      .end((err, res) => {
        setLoading(false)
        if (res.body.status) {
          resetState()
          window.scrollTo(0, 0)
          Actions.toastShow('送信しました')
          history.push('/exit')
        }
      })
  }

  const buttondisabled = loading || state.name === '' || state.address === '' || state.tel === '' ? true : false
  const buttonLabel = loading ? '送信中...' : '送信'
  const backButtonDisabled = loading ? true : false

  const errorMessageName = state.name === '' ? <div className="err">お名前が入力されておりません</div> : null
  const errorMessageAddress = state.address === '' ? <div className="err">ご住所が入力されておりません</div> : null
  const errorMessageTel = state.address === '' ? <div className="err">電話番号が入力されておりません</div> : null

  return (
    <div className="confirm">
      <div className="font-size">
        <span>文字サイズ</span>
        <div className={'small' + (fontSize === ' small' ? ' active' : '')} onClick={() => updateFontSize('small')}>
          小
        </div>
        <div className={'medium' + (fontSize === ' medium' ? ' active' : '')} onClick={() => updateFontSize('medium')}>
          中
        </div>
        <div className={'large' + (fontSize === ' large' ? ' active' : '')} onClick={() => updateFontSize('large')}>
          大
        </div>
      </div>
      <div className={'message' + fontSize}>
        <p>内容を確認後送信ボタンを押してください。</p>
      </div>
      <div className={'form' + fontSize}>
        <div>
          <label>お名前</label>
          <p>{state.name}</p>
          {errorMessageName}
        </div>
        <div>
          <label>郵便番号</label>
          <p>{state.code}</p>
        </div>
        <div>
          <label>ご住所</label>
          <p>{state.address}</p>
          {errorMessageAddress}
        </div>
        <div>
          <label>電話番号</label>
          <p>{state.tel}</p>
          {errorMessageTel}
        </div>
      </div>
      <div className={'message' + fontSize}>
        <p>
          <a href="https://winds-n.com/policy" target="_blank">
            プライバシーポリシー
          </a>
          を確認の上、送信してください。
        </p>
      </div>
      <div className="button confirm">
        <button
          onClick={() => history.push('/visitor')}
          className={'back' + fontSize}
          onTouchStart={() => {}}
          disabled={backButtonDisabled}
        >
          修正する
        </button>
        <button
          onClick={(e) => sendPost(e)}
          className={'confirm' + fontSize}
          onTouchStart={() => {}}
          disabled={buttondisabled}
        >
          {buttonLabel}
        </button>
        <p className="comment">
          入力された連絡先の
          <wbr />
          目的外使用はいたしません。
        </p>
        <p>
          <a href="https://winds-n.com/policy" target="_blank" className="policy">
            詳しくはこちら
          </a>
        </p>
      </div>
    </div>
  )
}

export default Confirm
