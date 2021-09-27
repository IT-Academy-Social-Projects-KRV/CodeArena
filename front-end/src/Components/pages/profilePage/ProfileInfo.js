import { Image, Col } from "react-bootstrap";

import DefaultIco from "./images/defaultIco.svg";


function getWebsiteOfLink(links) {
    /**
     * Takes array of links to website
     * Returns array of arrays [link_to_website, website_name]
     */

    let result = [];
    links.forEach((link) => {
        let website = link
            .replace("https://", "")
            .replace("http://", "")
            .replace("www.", "");
        result.push([link, website.substring(0, website.indexOf("/"))]);
    });
    return result;
}

function ProfileInfo(props) {
    const {
        userInfo: { ico, role, nickname, name, level, location, email, links },
    } = props;
    let links_array = links ? getWebsiteOfLink(links) : null;
    let profile_ico = ico ? ico : DefaultIco;

    return (
        <div className="d-grid">
            <Col className="ps-5">
                <div className="position-relative">
                    <Image
                        src={profile_ico}
                        roundedCircle
                        className="profile-pic"
                    />

                    <div className="dot">{role}</div>
                </div>
                <div className="profile-info">
                    <p className="profile-info-nickname">{nickname}</p>
                    {name ? <p className="pb-4">{name}</p> : null}
                    {level ? <p>Level: {level}</p> : null}
                    {location ? <p>Location: {location}</p> : null}
                    {email ? <p>Email: {email}</p> : null}

                    {links ? (
                        <>
                            <p className="pt-4">Find me on:</p>
                            <ul>
                                {links_array.map((link) => (
                                    <li>
                                        <a href={link[0]}>{link[1]}</a>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </div>
            </Col>
        </div>
    );
}
export default ProfileInfo;
