const express = require('express')
const app = express()
const port = 3000

const a=98;
app.get('/', (req, res) => {
  res.send(`<h1>Bem Vindo</h1> ${a}`)
})
app.get('/main', (req, res) => {
  res.send(`<h1>Hello World2!</h1> ${a}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
