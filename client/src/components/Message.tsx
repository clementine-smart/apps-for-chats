import { MessageType } from '../types/message'

interface Props {
  message: MessageType
}

function Message({ message }: Props) {
  return (
    <p
      className={`${
        message.from === 'me' ? 'bg-pink-500' : 'bg-green-500'
      } p-2 w-fit rounded-lg`}
    >
      {message.message}
    </p>
  )
}

export default Message
