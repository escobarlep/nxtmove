import express from 'express'

const app = express()

const port = process.env.PORT || 8000

app.get('/', (req, res) => res.send('texto'))

app.listen(port)
