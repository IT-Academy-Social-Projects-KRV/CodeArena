import React from "react";

import ProfilePage from "../profilePage/ProfilePage";


class ProfileRecruiterPage extends React.Component {
    render() {
        const tabsNames = [
            {/*Add tab names here*/}
        ];
        const userInfo = {
            role: "R"
        };
        return (
            <ProfilePage tabsNames={tabsNames} userInfo={userInfo}>
                {/*Add profile tabs here*/}
            </ProfilePage>
        );
    }
}
export default ProfileRecruiterPage;
