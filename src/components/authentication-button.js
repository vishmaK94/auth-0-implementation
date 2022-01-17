import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import LoginButton from './login-button'
import LogoutButton from './logut-button'
import SignUpButton from './signup-button'
import { Link } from 'react-router-dom'

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0()
    return (
        <div>
            <div><h2><Link to="/">Logo</Link></h2></div>
            <div>{isAuthenticated ? <div><Link to="/profile"><button>Profile</button></Link><LogoutButton /></div> : <div><LoginButton /> <SignUpButton /></div>}</div>
        </div>
    )
}

export default AuthenticationButton
