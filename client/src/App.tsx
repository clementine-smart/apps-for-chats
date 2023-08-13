import { useEffect, useState } from 'react'
import MessageInput from './components/MessageInput'
import UserName from './components/UserName'
import io from 'socket.io-client'

const socket = io('http://localhost:3000/', { transports: ['websocket'] })

function App() {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    socket.on('receive_burn', () => {
      window.location.reload()
    })
  }, [])

  return (
    <div className="w-full h-full px-4">
      <div className="flex flex-row items-center gap-2 w-full h-20">
        <h2>
          welcome to the <span className="text-red-700 font-bold">burner</span>{' '}
          chat,{' '}
          {userName ? (
            <span className="text-red-700 font-bold">{userName}</span>
          ) : (
            <UserName setUserName={setUserName} />
          )}
        </h2>
      </div>
      <div>{userName.length > 0 && <MessageInput userName={userName} />}</div>
    </div>
  )
}

export default App
