import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { saveUser } from '../../fireBase/usersCollection'
import { Alert } from '../Alert/Alert'

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
        //await saveUser({ email: user.email, displayName: user.email });
        navigate("/")
      } catch (error) {
        setError(error.message)
      }
    } else { setError("Las contraseñas no coinciden.") }
  }
  return (
    <div className='w-full max-w-xs m-auto'>{error && <Alert message={error} />}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4"><label htmlFor="email" className='block text-gray-400 text-sm font-bold mb-2'>Email</label>
          <input type="email" name="email" placeholder="youremaill@company.com" className="shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} />
        </div><div className="mb-4"><label htmlFor='password' className='block text-gray-400 text-sm font-bold mb-2'>Contraseña</label>
          <input type="password" name="password" id="password" onChange={handleChange} className="shadow appearence-none border rounded  py-2 px-3 w-1/2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          <input type="password" name="passwordR" id="passwordR" onChange={handleChange} className="shadow appearence-none border rounded  py-2 px-3 w-1/2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div><button className='bg-blue-500 hover:bg-blue-300 text-white rounded font-bold py-2 px-4 focus:outline-none focus:shadow-outline'>Registrar</button>
      </form>
      <p className='my-4 text-sm flex justify-between'>¿Ya tienes cuenta? <Link to="/login" >LogIn</Link></p>
    </div>
  )
}
