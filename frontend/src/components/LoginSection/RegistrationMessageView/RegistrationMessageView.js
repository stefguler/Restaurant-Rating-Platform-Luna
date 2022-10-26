// styles
import Header from "../../Header-Footer/Header";
import Footer from "../../Header-Footer/Footer";
import { RegistrationMessageViewContainer, MessageView } from "./RegistrationMessageView.styled";
import { Title } from "../login.components.styles";

const RegistrationMessageView = (props) => {
    return (
        <RegistrationMessageViewContainer>
            <Header />
            <MessageView>
                <Title>Registration</Title>
                <p>
                    Thanks for your registration.<br /> Our hard working monkeys are preapering a digital message called E-Mail that will be send to you soon.
                    Since monkeys arent good in writing the message could end up in you junk folder. Our apologies for any inconvienience.
                </p>
            </MessageView>
            <Footer />
        </RegistrationMessageViewContainer>
    )
}

export default RegistrationMessageView;