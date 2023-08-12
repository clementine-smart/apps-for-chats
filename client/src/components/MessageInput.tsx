import { useEffect, useState } from 'react'
import io from 'socket.io-client'

import { MessageType } from '../types/message'
import Messages from './Messages'

const socket = io('http://localhost:3000/', { transports: ['websocket'] })

function MessageInput() {
  const [outgoingMessage, setOutgoingMessage] = useState('')
  const [incomingMessage, setIncomingMessage] = useState<MessageType[]>([])

  function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setOutgoingMessage(() => e.target.value)
  }

  function handleSend(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    socket.emit('send', { message: outgoingMessage })
    setIncomingMessage((incomingMessage) => [
      ...incomingMessage,
      { message: outgoingMessage, from: 'me' },
    ])
    setOutgoingMessage(() => '')
  }

  useEffect(() => {
    socket.on('receive', ({ message }) => {
      setIncomingMessage((incomingMessage) => [
        ...incomingMessage,
        { message: message, from: 'you' },
      ])
    })
  }, [])

  return (
    <>
      {incomingMessage.length > 0 && <Messages message={incomingMessage} />}
      <form className="flex gap-4 pt-2">
        <div className="flex flex-col">
          {/* <label htmlFor="message">message</label> */}
          <input
            id="message"
            placeholder="type a message"
            value={outgoingMessage}
            onChange={handleMessageChange}
            className="border-2 p-2 rounded-lg"
          />
        </div>
        <button
          onClick={handleSend}
          className="border-2 p-2 rounded-lg hover:bg-pink-500"
        >
          send
        </button>
      </form>
    </>
  )
}

export default MessageInput
