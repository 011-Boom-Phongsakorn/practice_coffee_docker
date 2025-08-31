const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))