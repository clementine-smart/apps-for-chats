// import { MessageType } from '../types/message'

interface Props {
  incomingMessage: MessageType[]
}
export interface MessageType {
  message: string
  from: string
  thread?: string
}

function Messages({ incomingMessage }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {incomingMessage.map((message) => {
        return (
          <p
            className={`${
              message.from === 'me' ? 'bg-pink-500' : 'bg-green-500'
            } p-2 w-fit rounded-lg`}
          >
            {message.message}
          </p>
        )
      })}
    </div>
  )
}

export default Messages
