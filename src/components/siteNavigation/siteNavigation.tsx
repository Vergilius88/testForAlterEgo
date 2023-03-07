import { Link } from "react-router-dom";
import routes from "../../assets/routes";
import { session } from "../../utils/sessionStorage";
import "./siteNavigationStyles.scss";

export const SiteNavigation = () => {
    const authorized = session.checkSession;

    return (
        <nav className="nav">
            <Link className="navLink" to={routes.homePage}>
                Головна
            </Link>
            <Link className="navLink" to={routes.newsPage}>
                Новини
            </Link>
            {authorized() && <Link className="navLink" to={routes.profilePage}>
                Профіль
            </Link>}
        </nav>
    );
};
