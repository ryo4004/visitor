import React from 'react'
import { useHistory } from 'react-router-dom'

import PostalCode from '../../PostalCode/PostalCode'

import { useInput } from '../../hooks/useInput'
import { useFontsize } from '../../hooks/useFontsize'

import './Input.css'

const Input = () => {
  const history = useHistory()
  const { state, updateState } = useInput()
  const { fontSize, updateFontSize } = useFontsize()

  const buttondisabled = state.name === '' || state.address === '' || state.tel === '' ? true : false

  return (
    <div className="input">
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
        <p>下記回答をお願いいたします。</p>
      </div>
      <div className={'form' + fontSize}>
        <label>お名前</label>
        <input
          className={fontSize}
          onChange={(e) => updateState('name', e.target.value)}
          value={state.name}
          placeholder="お名前"
        />
        <PostalCode
          onCodeChange={(value) => updateState('code', value)}
          onAddressChange={(value) => updateState('address', value)}
          code={state.code}
          address={state.address}
          fontSize={fontSize}
        />
        <label>電話番号</label>
        <input
          className={fontSize}
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
          className={'input' + fontSize}
          onTouchStart={() => {}}
          disabled={buttondisabled}
        >
          確認
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

export default Input
