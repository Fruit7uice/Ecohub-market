const express = require('express')
const app = express()
const port = 3000;


app.get('/', (req, res) => {
    res.sendFile('./public/index.html')
})

app.listen(port)

console.log(`Server adress/url on http://localhost:${port}/`)

