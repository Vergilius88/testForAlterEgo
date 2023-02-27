import "./headerStyles.scss";
import avatarImg from "../../assets/image/avatar.jpg";
import { SiteNavigation } from "../../components/siteNavigation/siteNavigation";

export default function Header() {
    // const navigate = useNavigate();
    // const ref = useRef();

    // const [sideBar, setSideBar] = useState(false);

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
    return (
        <header className="header">
            <SiteNavigation />
            <div className="headerAvatarWrapper">
                <img className="headerAvatarImg" src={avatarImg} alt="avatar"></img>
                {/* <Button onClick={logOut} className="loginBtn" title="Выйти" /> */}
            </div>
        </header>
    );
}
