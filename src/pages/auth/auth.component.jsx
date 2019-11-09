import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'


import './auth.styles.scss'

const Auth = () => (
    <div className="auth">
        <SignIn />
        <SignUp />
    </div>
)

export default Auth