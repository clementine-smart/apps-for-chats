import Button from './Button'

function MessageInput() {
  return (
    <form className="flex gap-4">
      <div className="flex flex-col">
        <label htmlFor="message">message</label>
        <input id="message" placeholder="type a message" />
      </div>
      <Button />
    </form>
  )
}

export default MessageInput
