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
    <>
      <input
        onChange={handleInput}
        value={userNameInput}
        placeholder="alias"
        className="p-1 mr-4 rounded-lg focus:outline-dashed"
      />
      <button
        onClick={handleSubmit}
        className="rounded-lg py-1 px-3 bg-red-600 text-white"
      >
        let me in
      </button>
    </>
  )
}

export default UserName
