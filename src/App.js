import './App.css';
import { FormInput } from './components/FormInput';
import { useState } from 'react'

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: 'text',
      placeholder: 'Username',
      errorMessage: "Username should be 3-16 characters and souldn't include any special character",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2,
      name: "email",
      type: 'email',
      placeholder: 'Email',
      errorMessage: "It should be a valid email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: 'date',
      placeholder: 'Birthday',
      label: "Birthday",
      errorMessage: "Should not be empty!",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: 'text',
      placeholder: 'Password',
      errorMessage: "password should be a 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: 'text',
      placeholder: 'Confirm Password',
      errorMessage: "Password don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ]

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values)
  }

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange} />
        ))}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
