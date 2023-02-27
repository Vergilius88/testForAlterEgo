import { Navigate, useLocation } from "react-router-dom";
import { timeInSec } from "../dateTime";
import { SessionStorage } from "../sessionStorage";

// const tokenLife = () => +SessionStorage.getExpirationTime() < timeInSec();
const tokenLife = () => false;

const RequireAuth = ({ children }: any) => {
    const location = useLocation();
    // const isAdmin = SessionStorage.getRole() === "Admin";
    // const isEmployee = SessionStorage.getRole() === "Employee";
    // const authorized = false;

    if (tokenLife()) {
        return <Navigate to="/login" state={{ from: location }} />;
    } 
    return children;
};

export { RequireAuth };
