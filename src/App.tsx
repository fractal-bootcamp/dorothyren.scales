import { useState } from 'react'

function InputField({ placeholder, value, onChange }: { placeholder: string, value: string, onChange: (value: string) => void }) {
  return (
    <input type="text" placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}


function App() {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const handleSubmit = () => {
    setSubmittedName(name)
  }

  return (
    <>
      <h1>Props and Controlled Components</h1>
      <InputField
        placeholder="Enter your name"
        value={name}
        onChange={setName}
      />

    </>
  )
}

export default App