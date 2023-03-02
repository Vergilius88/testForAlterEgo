import "./headerStyles.scss";
import avatarImg from "../../assets/image/avatar.jpg";
import { SiteNavigation } from "../../components/siteNavigation/siteNavigation";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";


export default function Header() {
    // const navigate = useNavigate();
    // const ref = useRef();

    const [language, setLanguage] = useState<String>("");

    // const isAdmin = SessionStorage.getRole() === "Admin";
    // const isEmployee = SessionStorage.getRole() === "Employee";
    // const btnClick = (e: { preventDefault: () => void }) => {
    //     e.preventDefault();
    //     sideBar ? setSideBar(false) : setSideBar(true);
    // };

    // const logOut = () => {
    //     SessionStorage.revokeSession();
    //     navigate(routes.loginPage);
    // };
    // useOnClickOutside(ref, () => setSideBar(false));
    useEffect(() => {
        console.log(language);
    }, [language]);
    return (
        <header className="header">
            <SiteNavigation />
            <div className="headerAvatarWrapper">
                <img className="headerAvatarImg" src={avatarImg} alt="avatar"></img>
                <ToggleButtonGroup
                    color="primary"
                    value={language}
                    exclusive 
                    onChange={(_event,value) => setLanguage(value)}
                    aria-label="Platform">
                    <ToggleButton value="en">EN</ToggleButton>
                    <ToggleButton value="uk">UK</ToggleButton>
                </ToggleButtonGroup>
                {/* <Button onClick={logOut} className="loginBtn" title="Выйти" /> */}
            </div>
        </header>
    );
}

