import { useState } from "react";

// styles
import Header from "../../Header-Footer/Header";
import Footer from "../../Header-Footer/Footer";
import { RegistrationViewContainer, RegistrationViewForm } from "./RegistrationView.styled";
import { FormButton, FormInput, Title } from "../login.components.styles";


const RegistrationView = (props) => {
    const [emailAddress, setEmailAddress] = useState('');

    return (
        <RegistrationViewContainer>
            <Header />
            <RegistrationViewForm>
                <Title>REGISTRATION</Title>
                <FormInput type="text" placeholder="Email Address" value={emailAddress} onChange={(args) => setEmailAddress(args.target.value)} />
                <FormButton>Register</FormButton>
            </RegistrationViewForm>
            <Footer />
        </RegistrationViewContainer>
    )
}

export default RegistrationView;