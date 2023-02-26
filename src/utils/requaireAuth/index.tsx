import { Navigate, useLocation } from "react-router-dom";
// import { timeInSec } from "../DateTIme";
// import { SessionStorage } from "../SessionStorage";

// const tokenLife = () => +SessionStorage.getExpirationTime() < timeInSec();

// const RequireAuth = ({ children }: any) => {
//     const location = useLocation();
//     const isAdmin = SessionStorage.getRole() === "Admin";
//     const isEmployee = SessionStorage.getRole() === "Employee";

//     if (tokenLife()) {
//         return <Navigate to="/login" state={{ from: location }} />;
//     } else if (!isAdmin && !isEmployee) {
//         return <Navigate to="/error" state={{ from: location }} />;
//     }

//     return children;
// };

// export { RequireAuth };
