import React, { Component } from 'react'
import request from 'superagent'

export default class PostalCode extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.onFocus = this.onFocus.bind(this)
    this.state = {
      zipLoading: false,
      zipError: false,
    }
  }

  onFocus() {
    this.inputRef.current.focus()
  }

  requestZipcode() {
    this.setState({ zipLoading: true, zipError: false })
    request
      .post('https://zip.winds-n.com/api/zip')
      .type('form')
      .send({ zip: this.props.code })
      .end((err, res) => {
        this.setState({ zipLoading: false })
        if (err || res.body.err || !res.body.zip) return this.setState({ zipError: true })
        this.props.address.match(res.body.zip.address) ? false : this.props.onAddressChange(res.body.zip.address)
        this.inputRef.current.focus()
      })
  }

  keyPress(e) {
    if (e.which === 13) this.requestZipcode()
  }

  render() {
    const buttonLabel = this.state.zipLoading ? '検索中...' : '自動入力'

    const showError = () => {
      if (this.state.zipError) {
        return (
          <div className="err">
            <p>みつかりませんでした</p>
            <p>入力をお願いします</p>
          </div>
        )
      }
    }

    return (
      <React.Fragment>
        <label>郵便番号</label>
        <div className="code">
          <input
            type="number"
            // className={this.props.fontSize}
            value={this.props.code}
            onChange={(e) => this.props.onCodeChange(e.target.value)}
            onKeyPress={(e) => this.keyPress(e)}
            placeholder="郵便番号"
            pattern="\d*"
          />
          <button
            onClick={() => this.requestZipcode()}
            // className={this.props.fontSize}
            disabled={this.props.code.match(/^[0-9]{3}-?[0-9]{4}/) ? false : true}
          >
            {buttonLabel}
          </button>
        </div>
        {showError()}
        <div className="text">
          <label>ご住所</label>
          <input
            ref={this.inputRef}
            type="text"
            // className={this.props.fontSize}
            value={this.props.address}
            onChange={(e) => this.props.onAddressChange(e.target.value)}
            placeholder="ご住所"
          />
        </div>
      </React.Fragment>
    )
  }
}
