import React from 'react'
import { useAuth } from '../../context/AuthContext'

export const Header = () => {
    const { user, logout } = useAuth()
    return (
        <header className='w-full bg-blue-300 text-white'>
            <nav
                className="bg-blue-500 navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between px-4">
                <span>{user.displayName || user.email}</span>
                <button onClick={logout}>LogOut</button>
            </nav>
        </header>
    )
}
