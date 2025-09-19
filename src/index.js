import express from 'express'
import routes from './routes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/', routes)

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})
