import React from 'react';
import './auth.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
const AuthPage = () => (
    <div className="auth">
       <SignIn />
       <SignUp />
    </div>
);

export default AuthPage;