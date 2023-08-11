const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:5173/',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  socket.on('send', (data) => {
    console.log(data)
    socket.broadcast.emit('receive', data)
  })
})

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
