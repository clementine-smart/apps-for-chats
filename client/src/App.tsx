import { useState } from 'react'
import MessageInput from './components/MessageInput'
import UserName from './components/UserName'

function App() {
  const [userName, setUserName] = useState('')

  return (
    <div className="w-full h-full">
      <h1 className="text-green-300 text-3xl">this is an app for chats</h1>
      <div>
        {userName.length > 0 ? (
          <MessageInput />
        ) : (
          <UserName setUserName={setUserName} />
        )}
      </div>
    </div>
  )
}

export default App
