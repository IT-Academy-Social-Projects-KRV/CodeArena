import React from "react";

import ProfilePage from "../profilePage/ProfilePage";
import StatisticsTab from "../profileTabs/StatsTab";


class ProfileAdminPage extends React.Component {
    render() {
        const tabsNames = [
            'Stats'
        ];
        const userInfo = {
            role: "A"
        };
        return (
            <ProfilePage tabsNames={tabsNames} userInfo={userInfo}>
                <StatisticsTab eventKey="0" />
            </ProfilePage>
        );
    }
}
export default ProfileAdminPage;
