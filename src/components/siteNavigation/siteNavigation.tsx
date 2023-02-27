import { Link } from "react-router-dom";
import routes from "../../assets/routes";
import "./siteNavigationStyles.scss";

export const SiteNavigation = () => {
    return (
        <nav className="nav">
            <Link className="navLink" to={routes.homePage}>
                Головна
            </Link>
            <Link className="navLink" to={routes.newsPage}>
                Новини
            </Link>{" "}
            <Link className="navLink" to={routes.profilePage}>
                Профіль користувача
            </Link>
        </nav>
    );
};
