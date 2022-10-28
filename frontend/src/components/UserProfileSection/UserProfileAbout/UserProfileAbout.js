import { UserProfileAboutContainer } from "./UserProfileAbout.styled";
const UserProfileAbout = () => {
    return (
        <UserProfileAboutContainer>
            <h2>About Laurent</h2>
            <h3>Location</h3>
            <label>Zurich, CH</label>
            <h3>Luna member since</h3>
            <label>April, 2018</label>
            <h3>Things I love</h3>
            <label>Everything</label>
            <h3>Description</h3>
            <p>
                I am professional photographer with an eye for details in everything I do in my live. 
                Every time a pass by a nice restaurant i have to stop and take notes.
            </p>
        </UserProfileAboutContainer>
    );
}

export default UserProfileAbout;