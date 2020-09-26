import React from 'react'
import { useHistory } from 'react-router-dom'

import PostalCode from '../../PostalCode/PostalCode'

import { useInput } from '../../hooks/useInput'

import './Input.css'

const Input = () => {
  const history = useHistory()
  const { state, updateState } = useInput()

  const buttondisabled = state.name === '' || state.address === '' || state.tel === '' ? true : false

  return (
    <div className="input">
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
          pattern="\d*"
        />
      </div>
      <div className="button input">
        <button
          onClick={() => history.push('/confirm')}
          className="input"
          onTouchStart={() => {}}
          disabled={buttondisabled}
        >
          確認
        </button>
        <p className="comment">
          入力された連絡先の
          <wbr />
          目的外使用はしません。
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

export default Input
