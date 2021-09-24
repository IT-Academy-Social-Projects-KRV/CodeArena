import React from "react";

import ProfilePage from "../profilePage/ProfilePage";


class ProfileAdminPage extends React.Component {
    render() {
        const tabsNames = [];
        const userInfo = {
            role: "A"
        };
        return (
            <ProfilePage tabsNames={tabsNames} userInfo={userInfo}>
                {/*Add profile tabs here*/}
            </ProfilePage>
        );
    }
}
export default ProfileAdminPage;
