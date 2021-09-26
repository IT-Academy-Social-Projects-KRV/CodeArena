import React from "react";

import ProfilePage from "../profilePage/ProfilePage";


class ProfileCoderPage extends React.Component {
    render() {
        const tabsNames = [
            {/*Add tab names here*/}
        ];
        const userInfo = {
            role: "C"
        };
        return (
            <ProfilePage tabsNames={tabsNames} userInfo={userInfo}>
                {/*Add profile tabs here*/}
            </ProfilePage>
        );
    }
}
export default ProfileCoderPage;
