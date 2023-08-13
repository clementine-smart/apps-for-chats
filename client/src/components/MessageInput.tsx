import { useEffect, useState } from 'react'
import io from 'socket.io-client'

import { MessageType } from '../types/message'
import Messages from './Messages'

interface Props {
  userName: string
}

const socket = io('http://localhost:3000/', { transports: ['websocket'] })

function MessageInput({ userName }: Props) {
  const [outgoingMessage, setOutgoingMessage] = useState('')
  const [incomingMessage, setIncomingMessage] = useState<MessageType[]>([])
  const [typing, setTyping] = useState(false)
  const [incomingTyping, setIncomingTyping] = useState(false)

  function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setOutgoingMessage(() => e.target.value)
  }

  function handleTyping() {
    setTyping(() => true)
    socket.emit('typing', typing)
  }

  function handleStopTyping() {
    setTyping(() => false)
    socket.emit('typing', typing)
  }

  function handleSend(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (outgoingMessage.length > 0) {
      socket.emit('send', { message: outgoingMessage, user: userName })
      setIncomingMessage((incomingMessage) => [
        ...incomingMessage,
        { message: outgoingMessage, from: 'me', user: userName },
      ])
      setOutgoingMessage(() => '')
    }
  }

  useEffect(() => {
    socket.on('receive', ({ message, user }) => {
      console.log(user)
      setIncomingMessage((incomingMessage) => [
        ...incomingMessage,
        { message: message, from: 'you', user: user },
      ])
    })
    socket.on('receive_typing', (typing) => {
      if (!typing) {
        setIncomingTyping(true)
      } else {
        setIncomingTyping(false)
      }
    })
  }, [])

  return (
    <>
      {incomingMessage.length > 0 && <Messages message={incomingMessage} />}
      {incomingTyping && (
        <p className={`${'bg-green-500'} p-2 mt-2 w-fit rounded-lg gap-2`}>
          ...
        </p>
      )}
      <form className="flex gap-4 pt-2">
        <div className="flex flex-col">
          {/* <label htmlFor="message">message</label> */}
          <input
            id="message"
            placeholder="type a message"
            value={outgoingMessage}
            onChange={handleMessageChange}
            onFocus={handleTyping}
            onBlur={handleStopTyping}
            className="border-2 p-2 rounded-lg"
          />
        </div>
        <button
          onClick={handleSend}
          className={`border-2 p-2 rounded-lg  ${
            outgoingMessage.length <= 0 ? 'cursor-default' : 'hover:bg-pink-500'
          }`}
        >
          send
        </button>
      </form>
    </>
  )
}

export default MessageInput
