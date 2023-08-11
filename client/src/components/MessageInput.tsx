import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:3000/', { transports: ['websocket'] })

function MessageInput() {
  const [outgoingMessage, setOutgoingMessage] = useState('')
  const [incomingMessage, setIncomingMessage] = useState('')

  function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setOutgoingMessage(() => e.target.value)
  }

  function handleSend(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    socket.emit('send', { message: outgoingMessage })
  }

  useEffect(() => {
    socket.on('receive', ({ message }) => {
      setIncomingMessage(message)
    })
  }, [])

  return (
    <>
      <form className="flex gap-4">
        <div className="flex flex-col">
          <label htmlFor="message">message</label>
          <input
            id="message"
            placeholder="type a message"
            value={outgoingMessage}
            onChange={handleMessageChange}
            className="border-2 p-2 rounded-lg"
          />
        </div>
        <button onClick={handleSend} className="border-2 p-2 rounded-lg">
          send
        </button>
      </form>
      <p>{incomingMessage}</p>
    </>
  )
}

export default MessageInput
