import { Route, Routes } from "react-router-dom";
import routes from "./assets/routes";
import Footer from "./layouts/footer/footer";
import Header from "./layouts/header/header";
import Main from "./layouts/main/main";
import LoginPage from "./pages/authorizationForm/authorizationForm";
import { RequireAuth } from "./utils/requireAuth";
import { useAppDispatch } from "./app/hooks";
import "./assets/baseStyles/base.css";
import "./assets/baseStyles/fonts.css";
import { useEffect } from "react";
import { getNews } from "./app/newsPage/newsPageOperations";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, []);
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
