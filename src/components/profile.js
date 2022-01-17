import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Profile = () => {
    const { user } = useAuth0()
    console.log(user);
    console.log(JSON.stringify(user, null, '\n'));
    const { nickname, email, picture } = user;
    return (
        <div>
            <div>
                <img src={picture} alt={nickname} />
                <h3>{nickname}</h3>
                <p>{email}</p>
            </div>
            <div>{JSON.stringify(user, null, '\n')}</div>
        </div>
    )
}

export default Profile
