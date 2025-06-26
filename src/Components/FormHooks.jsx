import { useState } from 'react';


export const FormHooks = () => {

    const [stateForm, setStateForm] = useState({
    email: '',
    username: '',
    password: ''
  })

  const { email, username, password } = stateForm;

  const handleForm = ({ target }) => {
    const { name, value } = target;
    setStateForm({
      ...stateForm,
      [name]: value
    })
  }


   const onSubmitForm = (event) => {
    event.preventDefault()
    setStateForm({
      email: '',
      username: '',
      password: ''
    })
    console.log(stateForm)
   
  }

  return (
    <form onSubmit={onSubmitForm}>

      <div className="form-group">
        <label htmlFor="email">Email</label>

        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={handleForm}
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">UserName</label>

        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleForm}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>

        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleForm}
        />
      </div>

      <button type="submit" className="btn btn-primary" >Submit</button>
    </form>
  )
}
