import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import {AuthContainer} from './auth.styles';

const AuthPage = () => (
    <AuthContainer>
       <SignIn />
       <SignUp />
    </AuthContainer>
);

export default AuthPage;