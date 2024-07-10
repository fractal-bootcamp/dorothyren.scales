import { useEffect, useState } from "react"

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  useEffect(() => {
    console.log('button clicked')
  }, [output])

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <button type="submit" onClick={() => setOutput(input)}>Submit</button>
      {output}
    </>
  )
}

export default App