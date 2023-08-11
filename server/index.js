const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: 'http://127.0.0.1:5173/',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  // ...
})

httpServer.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
