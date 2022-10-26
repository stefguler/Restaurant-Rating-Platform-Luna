import { useState } from "react";

// styles
import Header from "../../Header-Footer/Header";
import Footer from "../../Header-Footer/Footer";
import { LoginContainer, LoginForm } from "./LoginView.styled";
import { FormButton, FormInput } from "../login.components.styles";

const LoginView = (props) => {

    const [username, setUsername] = useState('');

    return (
        <LoginContainer>
            <Header />
            <LoginForm>
                <h1>Login</h1>
                <FormInput type="text" placeholder="Username" value={username} onChange={(args) => setUsername(args.target.value)} />
                <FormInput type="password" placeholder="Password" />
                <FormButton>Login</FormButton>
            </LoginForm>
            <Footer />
        </LoginContainer>
    )
}

export default LoginView;