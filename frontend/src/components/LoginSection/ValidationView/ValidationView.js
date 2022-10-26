import Header from "../../Header-Footer/Header";
import Footer from "../../Header-Footer/Footer";

// styles
import { ValidationContainer, ValidationForm } from "./ValidationView.styled";

const ValidationView = (props) => {
    return (
        <ValidationContainer>
            <Header />
            <ValidationForm>
                Validation
            </ValidationForm>
            <Footer />
        </ValidationContainer>
    )
}

export default ValidationView;