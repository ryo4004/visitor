const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.listen(3010)

// クライアントアプリを返す
const client = './client/build'
app.use('/', express.static(client))
app.use('/home', express.static(client))
app.use('/visitor', express.static(client))
app.use('/confirm', express.static(client))
app.use('/exit', express.static(client))

// データベース
const path = require('path')
const NeDB = require('nedb')

const database = new NeDB({
  filename: path.join(__dirname, 'server/database/database.db'),
  autoload: true,
  timestampData: true
})

// ライブラリの読み込み
const lib = require('./server/lib')

app.post('/post', (req, res) => {
  const { name, code, address, tel } = req.body
  console.log('[' + lib.showTime() + '] post')
  const reg = { name, code, address, tel }
  database.insert(reg, (error) => {
    if (error) {
      console.log('Database Error')
    }
    return res.json({status: true})
  })
})
