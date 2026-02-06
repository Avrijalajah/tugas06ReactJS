import {ProfileContext} from "./ProfileContext.jsx";
import {useContext} from "react";

export default function Profile() {
    const profile = useContext(ProfileContext);
    return(
        <>
            <h1>Profile</h1>
            <p>Hello {profile}</p>
        </>
    );
}