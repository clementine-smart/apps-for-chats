import Message from './Message'
import { MessageType } from '../types/message'

interface Props {
  message: MessageType[]
}

function Messages({ message: incomingMessage }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {incomingMessage.map((message, i) => {
        return <Message key={i} message={message} />
      })}
    </div>
  )
}

export default Messages
