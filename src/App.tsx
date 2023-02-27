import { Route, Routes } from "react-router-dom";
import routes from "./assets/routes";
import Footer from "./layouts/footer/footer";
import Header from "./layouts/header/header";
import Main from "./layouts/main/main";
import LoginPage from "./pages/authorizationForm/authorizationForm";
import { RequireAuth } from "./utils/requireAuth";
import "./assets/baseStyles/base.css";
import "./assets/baseStyles/fonts.css";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path={routes.homePage}
                    element={
                        <RequireAuth>
                            <Header />
                            <Footer />
                        </RequireAuth>
                    }
                />
                <Route
                    path={routes.loginPage}
                    element={
                        <>
                            <Header />
                            <Main title="">
                                <LoginPage />
                            </Main>
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
