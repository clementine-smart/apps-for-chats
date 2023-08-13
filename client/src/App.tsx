import { useState } from 'react'
import MessageInput from './components/MessageInput'
import UserName from './components/UserName'

function App() {
  const [userName, setUserName] = useState('')

  return (
    <div className="w-full h-full">
      <div className="flex flex-row items-center gap-2 w-full h-20">
        <h2>
          welcome to the <span className="text-red-700 font-bold">burner</span>{' '}
          chat{' '}
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
