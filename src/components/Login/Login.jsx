import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'


export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "", passwordR: "" })
  const [error, setError] = useState()
  const { signin } = useAuth()
  const navigate = useNavigate()
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    setError("")
    try {
      await signin(user.email, user.password)
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div>{error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="youremaill@company.com" onChange={handleChange} />
        <label htmlFor='password'>Contraseña</label>
        <input type="password" name="password" id="password" onChange={handleChange} />
        <button>Log In</button>
      </form>
    </div>
  )
}
