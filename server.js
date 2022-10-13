const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const fantasy = require("./assets/books/fantasy.json")




app.use(cors());

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/fantasy', (req, res) => {
  res.send(fantasy)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
