import { useState } from 'react';

import {
    UserProfileComments,
    UserProfileReviews,
    UserProfileRestaurants,
    UserProfileEditProfile
} from './Subsections';

import {
    UserProfileContainer,
    UserProfileLeft,
    UserProfileContent
} from './UserProfileMenu.styled';

const UserProfileMenu = () => {

    const [activeMenu, setActiveMenu] = useState('reviews');

    const selectMenu = (whichMenu) => {
        setActiveMenu(whichMenu);
    }

    return (
        <UserProfileContainer>
            <UserProfileLeft>
                <img src='user_profile.png' width="177" />
                <p>Laurent's profile</p>
                <ul>
                    <li data-active={activeMenu === 'reviews'}>
                        <a href="#" onClick={() => selectMenu('reviews')}>
                            Reviews
                        </a>
                    </li>
                    <li  data-active={activeMenu === 'comments'}>
                        <a href="#" onClick={() => selectMenu('comments')}>
                            Comments
                        </a>
                    </li>
                    <li  data-active={activeMenu === 'restaurants'}>
                        <a href="#" onClick={() => selectMenu('restaurants')}>
                            Restaurants
                        </a>
                    </li>
                    <li  data-active={activeMenu === 'edit'}>
                        <a href="#" onClick={() => selectMenu('edit')}>
                            Edit Profile
                        </a>
                    </li>
                </ul>
            </UserProfileLeft>
            <UserProfileContent>
                {
                    activeMenu === 'reviews' && <UserProfileReviews />
                }
                {
                    activeMenu === 'comments' && <UserProfileComments />
                }
                {
                    activeMenu === 'restaurants' && <UserProfileRestaurants />
                }
                {
                    activeMenu === 'edit' && <UserProfileEditProfile />
                }
            </UserProfileContent>
        </UserProfileContainer>
    )
}

export default UserProfileMenu;