// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState(null)
  // 🐨 add a submit event handler here (`handleSubmit`).
  const usernameRef = React.useRef('')
  function handleSubmit(event) {
    event.preventDefault()
    console.dir(event.target)
    // console.log(usernameRef.current.value)
    console.log(event.target.elements.username.value)
    // onSubmitUsername(usernameRef.current.username.value)
    // onSubmitUsername(event.target.elements.username.value)
  }

  function handleChange(event) {
    const isValid = event.target.value === event.target.value.toLowerCase()
    console.log(isValid)
    setUsername(event.target.value.toLowerCase())
    // setError(isValid ? null : 'Username must be lower case')
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  // const alert = error !== null ? alert(error) : null
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameRef}
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
        {/* {error !== null ? <p role="alert">{error}</p> : null} */}
      </div>
      {/* disabled={error !== null ? true : false} */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
