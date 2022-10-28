import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';
import { UserProfileContainer, UserProfile, UserProfileHeader } from "./UserProfileSection.styled";
import UserProfileMenu from './UserProfileMenu/UserProfileMenu';
import UserProfileAbout from './UserProfileAbout/UserProfileAbout';

const UserProfileSection = () => {
    return(
    <UserProfileContainer>
        <Header />
        <UserProfileHeader />
        <UserProfile>
            <UserProfileMenu />
            <UserProfileAbout />
        </UserProfile>
        <Footer />  
    </UserProfileContainer>
    )
};

export default UserProfileSection;