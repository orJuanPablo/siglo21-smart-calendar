import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Alert } from '../Alert/Alert'


export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "", passwordR: "" })
  const [error, setError] = useState()
  const { login, googleLogin } = useAuth()
  const navigate = useNavigate()
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    setError("")
    try {
      await login(user.email, user.password)
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }
  const handleGoogleSignIn = async () => {
    await googleLogin()
    navigate("/")
  }
  return (
    <div className='w-full max-w-xs m-auto'>{error && <Alert message={error} />}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="email" className='block text-gray-400 text-sm font-bold mb-2'>Email</label>
          <input type="email" name="email" placeholder="youremaill@company.com" onChange={handleChange} className="shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4"> <label htmlFor='password' className='block text-gray-400 text-sm font-bold mb-2'>Contraseña</label>
          <input type="password" name="password" id="password" onChange={handleChange} className="shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /></div>
        <button className='bg-blue-500 hover:bg-blue-300 text-white rounded font-bold py-2 px-4 focus:outline-none focus:shadow-outline'>Log In</button>
      </form>
      <button onClick={handleGoogleSignIn} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full">LogIn con Google</button>
      <p className='my-4 text-sm flex justify-between'>¿Todavia no tienes cuenta? <Link to="/reg" >Registrate</Link></p>
    </div>
  )
}
