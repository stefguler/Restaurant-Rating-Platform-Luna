import { useState } from "react";

// styles
import Header from "../../Header-Footer/Header";
import Footer from "../../Header-Footer/Footer";
import { ValidationContainer, ValidationForm } from "./ValidationView.styled";
import { FormButton, FormInput, Title, ErrorContainer } from "../login.components.styles";

const ValidationView = (props) => {
    const [emailAddress, setEmailAddress] = useState('');
    const [validationCode, setValidationCode] = useState('');
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (args) => {
        args.preventDefault();
        console.log('test')
        if (emailAddress.length < 1) {
            setError('Please enter your e-mail.');
            return;
        }
        if (validationCode.length < 1) {
            setError('Please enter your validation code.');
            return;
        }
        if (username.length < 1) {
            setError('Please enter your username.');
            return;
        }
        if (location.length < 1) {
            setError('Please enter your location.');
            return;
        }
        if (password.length < 1) {
            setError('Please enter your password.');
            return;
        }     
        if (passwordRepeat.length < 1) {
            setError('Please repeat your password.');
            return;
        }
        setError('');
        // fetch login
        // error show error
        // ok update redux
    }


    return (
        <ValidationContainer>
            <Header />
            <ValidationForm onSubmit={onSubmit}>
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
                <FormButton type="submit">Finish registration</FormButton>
                {
                    error.length > 0 &&
                    <ErrorContainer>
                        {error}
                    </ErrorContainer>

                }
            </ValidationForm>
            <Footer />
        </ValidationContainer>
    )
}

export default ValidationView;