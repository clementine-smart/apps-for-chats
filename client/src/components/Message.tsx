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
  const colour = {
    me: 'bg-red-700',
    you: 'bg-blue-700',
    computer: 'bg-slate-400',
  }

  return (
    <div className="flex ">
      <p
        onClick={handleClick}
        className={`${colour[message.from]} ${
          viewUser && '!bg-zinc-800 !text-zinc-400'
        } p-2 w-fit rounded-lg cursor-pointer`}
      >
        {viewUser ? `from: ${message.user}` : message.message}
      </p>
    </div>
  )
}

export default Message
