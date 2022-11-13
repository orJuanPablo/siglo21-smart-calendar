import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export const ProtectedRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    if (!user) return <Navigate to="/login" />
    if (loading) return <h1>loading</h1>
    return <>{children}</>

}
