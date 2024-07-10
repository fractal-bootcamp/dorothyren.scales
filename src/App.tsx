import { useState } from "react"

interface InputFieldProps {
  placeholder: string;
  value: string;
  //the onChange prop is a function that takes in an argument structured as a string and returns nothing(void)
  onChange: (value: string) => void;
  error?: string
}

//this is a function declaration in TS 
//({placeholder}) - this is object destructuring in function parameters. the function expects an object as an argument and destructuring to extract placeholder from that object. 
// :{placeholder:string} is saying the function expects an object with a placeholder property of type string
function InputField(props: InputFieldProps) {
  const { placeholder, value, onChange, error } = props
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ borderColor: error ? 'red' : undefined }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
function NameDisplay({ name }: { name: string }) {
  return <p> Hello, {name}!</p>
}

function App() {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (name.trim() === '') {
      setError('name cannot be empty')
    } else {
      setSubmittedName(name)
      setError('')
    }
  }

  return (
    <>
      <h1>Props and Controlled Components</h1>
      <InputField
        placeholder="hello"
        //
        value={name}
        //when the input field changes, the onchange event fires. this will call on the onChange prop
        //the onChange prop is set to setName, and this updates the name state in App
        onChange={setName}
        error={error}
      />
      <button onClick={handleSubmit}>Submit</button>
      {submittedName && <NameDisplay name={submittedName} />}
    </>
  )
}

export default App