import { useState } from 'react'
import { MessageType } from '../types/message'

interface Props {
  message: MessageType
}

function Message({ message }: Props) {
  const [viewUser, setViewUser] = useState(false)

  function handleClick() {
    setViewUser((viewUser) => !viewUser)
  }

  return (
    <div className="flex ">
      <p
        onClick={handleClick}
        className={`${message.from === 'me' ? 'bg-red-700' : 'bg-green-500'} ${
          viewUser && '!bg-zinc-800 !text-zinc-400'
        } p-2 w-fit rounded-lg cursor-pointer`}
      >
        {viewUser ? `from: ${message.user}` : message.message}
      </p>
    </div>
  )
}

export default Message
