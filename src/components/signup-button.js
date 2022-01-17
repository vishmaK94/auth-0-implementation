import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const SignUpButton = () => {
    const { loginWithRedirect } = useAuth0()
    return (
        <button onClick={() => loginWithRedirect({
            screen_hint: 'signup'
        })}>Sign Up</button>
    )
}

export default SignUpButton
