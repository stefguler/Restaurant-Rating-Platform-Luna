import { useState } from "react";

// styles
import Header from "../../Header-Footer/Header";
import Footer from "../../Header-Footer/Footer";
import { RegistrationViewContainer, RegistrationViewForm } from "./RegistrationView.styled";
import { FormButton, FormInput, Title, ErrorContainer } from "../login.components.styles";


const RegistrationView = (props) => {
    const [emailAddress, setEmailAddress] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (args) => {
        args.preventDefault();
        // check username and password are not empty
        if (emailAddress.length < 1) {
            setError('Please enter your e-mail.');
            return; 
        }
        setError('');       
        // fetch login
            // error show error
            // ok update redux
    }

    return (
        <RegistrationViewContainer>
            <Header />
            <RegistrationViewForm onSubmit={onSubmit}>
                <Title>REGISTRATION</Title>
                <FormInput type="text" placeholder="Email Address" value={emailAddress} onChange={(args) => setEmailAddress(args.target.value)} />
                <FormButton type="submit">Register</FormButton>
                {
                    error.length > 0 &&
                    <ErrorContainer>
                    {error}
                </ErrorContainer>

                }
            </RegistrationViewForm>
            <Footer />
        </RegistrationViewContainer>
    )
}

export default RegistrationView;