import { useEffect, useState } from "react"

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  useEffect(() => {
    console.log('console clicked', output)
  }, [output])

  return (
    <>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" onClick={() => setOutput(input)}>Submit</button>
      {output}
    </>
  )
}

export default App