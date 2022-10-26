import { useState } from "react";

// styles
import Header from "../../Header-Footer/Header";
import Footer from "../../Header-Footer/Footer";
import { LoginContainer, LoginForm } from "./LoginView.styled";
import { FormButton, FormInput, Title } from "../login.components.styles";

const LoginView = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LoginContainer>
            <Header />
            <LoginForm>
                <Title>LOGIN</Title>
                <FormInput type="text" placeholder="Username" value={username} onChange={(args) => setUsername(args.target.value)} />
                <FormInput type="password" placeholder="Password" value={password} onChange={(args) => setPassword(args.target.value)} />
                <FormButton>Login</FormButton>
            </LoginForm>
            <Footer />
        </LoginContainer>
    )
}

export default LoginView;