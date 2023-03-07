import "./headerStyles.scss";
import avatarImg from "../../assets/image/avatar.jpg";
import { SiteNavigation } from "../../components/siteNavigation/siteNavigation";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { session } from "../../utils/sessionStorage";
import { useNavigate } from "react-router-dom";
import routes from "../../assets/routes";

export default function Header() {
    const [language, setLanguage] = useState<String>("");
    const isAuthorized = session.checkSession();
    const navigate = useNavigate();

    
    return (
        <header className="header">
            <SiteNavigation />
            <div className="headerAvatarWrapper">

                {isAuthorized
                    ? <img className="headerAvatarImg" src={avatarImg} alt="avatar"></img>
                    : <Button onClick={() => { navigate(routes.loginPage); }} variant="outlined">Авторизуватися</Button>}
                <ToggleButtonGroup color="primary" value={language} exclusive onChange={(_event, value) => setLanguage(value)} aria-label="Language">
                    <ToggleButton value="en">EN</ToggleButton>
                    <ToggleButton value="uk">UA</ToggleButton>
                </ToggleButtonGroup>
            </div>
        </header>
    );
}
