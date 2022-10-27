import { useState } from "react";

// styles
import Header from "../../Header-Footer/Header";
import Footer from "../../Header-Footer/Footer";
import { LoginContainer, LoginForm } from "./LoginView.styled";
import { FormButton, FormInput, Title, ErrorContainer } from "../login.components.styles";

const LoginView = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (args) => {
        args.preventDefault();
        // check username and password are not empty
        if (username.length < 1) {
            setError('Please enter your username.');
            return;
        } 
        if (password.length < 1) {
            setError('Please enter your password.');
            return;
        }
        setError('');       
        // fetch login
            // error show error
            // ok update redux
    }

    return (
        <LoginContainer>
            <Header />
            <LoginForm onSubmit={onSubmit}>
                <Title>LOGIN</Title>
                <FormInput type="text" placeholder="Username" value={username} onChange={(args) => setUsername(args.target.value)} />
                <FormInput type="password" placeholder="Password" value={password} onChange={(args) => setPassword(args.target.value)} />
                <FormButton type="submit">Login</FormButton>
                {
                    error.length > 0 &&
                    <ErrorContainer>
                    {error}
                </ErrorContainer>
                }
            </LoginForm>
            <Footer />
        </LoginContainer>
    )
}

export default LoginView;