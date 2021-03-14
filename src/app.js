const path = require('path')
const express = require('express')


const app = express()
const publicDistPath = path.join(__dirname, '../public')

app.use(express.static(publicDistPath))

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started at' + process.env.PORT)
})

app.get('/gasprice/ui/heartbeat', (req, res) => {
  res.send('Gas Price UI Alive')
})
