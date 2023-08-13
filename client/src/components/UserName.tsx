import { useState } from 'react'

interface Props {
  setUserName: React.Dispatch<React.SetStateAction<string>>
}

function UserName({ setUserName }: Props) {
  const [userNameInput, setUserNameInput] = useState('')

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setUserNameInput(() => e.target.value)
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setUserName(() => userNameInput)
  }

  return (
    <div>
      <input
        onChange={handleInput}
        value={userNameInput}
        placeholder="enter alias"
        className="border-2 rounded-lg p-1"
      />
      <button onClick={handleSubmit} className="border-2 rounded-lg p-1">
        let me in
      </button>
    </div>
  )
}

export default UserName
