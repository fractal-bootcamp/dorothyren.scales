
//this is a new input field component we are pulling into App
//we destructure the placeholder property from the object we are using in the argument

import { useState } from "react";

interface InputFieldProps {
  placeholder: string,
  value: string,
  onChange: (value: string) => void,
  error?: string
}

//then typing that placeholder property as a string
//this version destructures in the function parameters to directly extract the props
function InputField({ placeholder, value, onChange, error }: InputFieldProps) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        // if the error is truthy the border color will be set to red, if falsy, the border color will be undefined/default
        style={{ borderColor: error ? 'red' : undefined }} />
      {/*  if error is truthy, it renders a <p> </p> element with red text color of the error. if falsty, nothing will appear */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

//this version receives all the props as a single props argument but then access them using dot notation
function InputField2(props: InputFieldProps) {
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        style={{ borderColor: props.error ? 'red' : undefined }}
      />
      {props.error && <p style={{ color: 'red' }}>{props.error}</p>}
    </div>
  )
}


//input field does not manage its own state
//when the input changes, it calls the onChange funciton provided by the parent 
//the inputfield also receives its value from the parent
//the placeholder receives the value from the parent
//when the input changes, it calls the onChange function provided by the parent

function NameDisplay({ name }: { name: string }) {
  return (
    <p>Hello,{name}</p>
  )
}

//state is controlled by the parent 
//App has full control over the input's value
//data flow is unidirectional from parent to child 

function App() {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (name.trim() === '') {
      setError('Name cannot be empty')
    } else {
      setSubmittedName(name)
      //we setError to an empty string to ensure the error message state disappears, the input styling returns to normal, and the state reflects there's no error
      setError('')
    }
  }

  return (
    <>
      <h3>props and controlled components</h3>
      <InputField2
        placeholder="enter text here"
        value={name}
        onChange={setName}
        error={error}
      />
      <button type="submit" onClick={handleSubmit}>Submit</button>
      {/* if submittedName is truthy, then display the NameDisplay component */}
      {submittedName && <NameDisplay name={submittedName} />}
    </>
  )
}
export default App


//broad takeaways 
//parent component owns state. set state there. 
// this is the principle of lifting state up in react 
// by managing state in parent component, there is a single source of truth
// gives parent component control over how and when state changes 

//child components passes props for the parent component to define
// this is how we create reusable components
// child declares what props they expect but dont control them 

//this way data flows one way from parent to child
//when child components need to update state, they do so by calling functions passed down from the parent ** MORE ON THIS

// passing functions as props
//parents can pass functions as props to child components