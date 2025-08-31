const express = require('express')
const app = express()
const coffeeRouter = require('./routers/coffee.router')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.use('/api/v1/coffee', coffeeRouter)

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))