import { useState } from 'react'
import { MessageType } from '../types/message'

interface Props {
  message: MessageType
}

function Message({ message }: Props) {
  const [viewUser, setViewUser] = useState(false)
  const [viewUserCount, setViewUserCount] = useState(0)

  function handleClick() {
    setViewUser((viewUser) => !viewUser)
    setViewUserCount((viewUserCount) => viewUserCount + 1)
  }

  return (
    <div className="flex ">
      <p
        onClick={handleClick}
        className={`${message.from === 'me' ? 'bg-red-700' : 'bg-green-500'} ${
          viewUser && viewUserCount < 3 && '!bg-zinc-800 !text-zinc-400'
        } p-2 w-fit rounded-lg cursor-pointer`}
      >
        {viewUser && viewUserCount < 3
          ? `from: ${message.user}`
          : message.message}
      </p>
    </div>
  )
}

export default Message
