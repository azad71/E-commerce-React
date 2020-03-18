import React from 'react';
import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(err) {
            console.log(err.message);
        }
        
    }

    render() {
        return (
            <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    type="email"
                    name="email"
                    label="Email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    required
                />

                <FormInput 
                    type="password"
                    name="password"
                    label="Password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required
                />

                <ButtonsBarContainer>
                    <CustomButton type="submit"> Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
        )
    }
}

export default SignIn;