import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../assets/routes";
import { session } from "../sessionStorage";


const RequireAuth = ({ children }: any) => {
    const navigate = useNavigate();
    const authorized = session.checkSession();

    useEffect(() => {
        if (!authorized) {
            navigate(routes.homePage);
        }
    }, []);
    return children;
};

export { RequireAuth };
