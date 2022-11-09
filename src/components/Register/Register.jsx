import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export const Register = () => {
  const [user, setUser] = useState({ email: "", password: "", passwordR: "" })
  const [error, setError] = useState()
  const { signup } = useAuth()
  const navigate = useNavigate()
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    setError("")
    if (user.password === user.passwordR) {
      try {
        await signup(user.email, user.password)
        navigate("/")
      } catch (error) {
        setError(error.message)
      }
    } else { setError("Las contraseñas no coinciden.") }
  }
  return (
    <div>{error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="youremaill@company.com" onChange={handleChange} />
        <label htmlFor='password'>Contraseña</label>
        <input type="password" name="password" id="password" onChange={handleChange} />
        <label htmlFor='passwordR'>Repita la contraseña</label>
        <input type="password" name="passwordR" id="passwordR" onChange={handleChange} />
        <button>Registrar</button>
      </form></div>
  )
}
