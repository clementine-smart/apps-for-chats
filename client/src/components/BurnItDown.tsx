import io from 'socket.io-client'

const socket = io('http://localhost:3000/', { transports: ['websocket'] })
interface Props {
  user: string
}

function BurnItDown({ user }: Props) {
  function handleBurn() {
    socket.emit('burn_it', { user })
  }

  return (
    <button
      className="bg-red-500 rounded-lg p-2 font-bold hover:bg-red-800 hover:text-white"
      onClick={handleBurn}
    >
      BURN IT DOWN
    </button>
  )
}

export default BurnItDown
