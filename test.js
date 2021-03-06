var assert = require('assert')
const https = require('https')
const fs = require('fs')
const changecert = require('./index.js')

const hostname = '127.0.0.1'
const port = 3000

const keypath = 'C:/Users/Administrator/ryans1-key.pem'
const certpath = 'C:/Users/Administrator/ryans1-cert.pem'
const options = {
  key: fs.readFileSync(keypath),
  cert: fs.readFileSync(certpath)
}

const server = https.createServer(options, (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`)
})

describe('替换证书的测试', function () {
  it('传递证书路径后替换证书', function () {
    assert.strictEqual(changecert(server, keypath, certpath), 1)
  })
})
