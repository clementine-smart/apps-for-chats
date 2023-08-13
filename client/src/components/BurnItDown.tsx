import io from 'socket.io-client'

const socket = io('http://localhost:3000/', { transports: ['websocket'] })
interface Props {
  user: string
}

function BurnItDown({ user }: Props) {
  function handleBurn() {
    socket.emit('burn_it', { user })
  }

  return <button onClick={handleBurn}>BURN IT DOWN</button>
}

export default BurnItDown
