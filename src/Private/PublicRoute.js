import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => { 
    
    const useAuth = () => {

        const user = localStorage.getItem('token');

        if (user === undefined) {
            return false
        } else if (user) {
            return true
        } else {
            return false
        }
    }
    let auth = { 'token': useAuth() }

    return (
        !auth.token ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PublicRoute