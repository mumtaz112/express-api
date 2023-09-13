const express = require('express')
const app = express()
const cors=require('cors')
app.use(cors())
require('dotenv').config()
const port = process.env.SERVER_PORT || 5000
const categoryrouter=require('./api/category/Router')
app.use(express.json())

app.use('/api',categoryrouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
