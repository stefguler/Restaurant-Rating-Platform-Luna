import { useState } from "react";

// styles
import Header from "../../Header-Footer/Header";
import Footer from "../../Header-Footer/Footer";
import { ValidationContainer, ValidationForm } from "./ValidationView.styled";
import { FormButton, FormInput, Title } from "../login.components.styles";

const ValidationView = (props) => {
    const [emailAddress, setEmailAddress] = useState('');
    const [validationCode, setValidationCode] = useState('');
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    return (
        <ValidationContainer>
            <Header />
            <ValidationForm>
                <Title>VERIFICATION</Title>
                <div className="rows">
                    <div className="cols">
                        <FormInput type="text" placeholder="E-mail address" value={emailAddress} onChange={(args) => setEmailAddress(args.target.value)} />
                        <FormInput type="text" placeholder="Username" value={username} onChange={(args) => setUsername(args.target.value)} />
                        <FormInput type="password" placeholder="Password" value={password} onChange={(args) => setPassword(args.target.value)} />
                    </div>
                    <div className="cols">
                        <FormInput type="password" placeholder="Validation code" value={validationCode} onChange={(args) => setValidationCode(args.target.value)} />
                        <FormInput type="text" placeholder="Location" value={location} onChange={(args) => setLocation(args.target.value)} />
                        <FormInput type="password" placeholder="Password repeat" value={passwordRepeat} onChange={(args) => setPasswordRepeat(args.target.value)} />

                    </div>
                </div>
                <FormButton>Finish registration</FormButton>
            </ValidationForm>
            <Footer />
        </ValidationContainer>
    )
}

export default ValidationView;