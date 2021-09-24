import React from "react";

import ProfilePage from "../profilePage/ProfilePage";


class ProfileModeratorPage extends React.Component {
    render() {
        const tabsNames = [];
        const userInfo = {
            role: "M"
        };
        return (
            <ProfilePage tabsNames={tabsNames} userInfo={userInfo}>
                {/*Add profile tabs here*/}
            </ProfilePage>
        );
    }
}
export default ProfileModeratorPage;
