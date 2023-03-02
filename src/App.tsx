import { Route, Routes } from "react-router-dom";
import routes from "./assets/routes";
import Footer from "./layouts/footer/footer";
import Header from "./layouts/header/header";
import Main from "./layouts/main/main";
import { RequireAuth } from "./utils/requireAuth";
import "./assets/baseStyles/base.css";
import "./assets/baseStyles/fonts.css";
import { NewsPage } from "./pages/newsPage/newsPage";
import { HomePage } from "./pages/homePage/homePage";
import { useAppDispatch } from "./app/hooks";
import { useEffect } from "react";
import { getUserData } from "./app/profilePage/profilePageOperations";
import { ProfilePage } from "./pages/profilePage/profilePage";
import { randomNumber } from "./utils/randomNumber";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUserData(randomNumber(10)));
    }, []);

    return (
        <>
            <Routes>
                <Route
                    path={routes.homePage}
                    element={
                        <RequireAuth>
                            <Header />
                            <Main title="Цікаві коментарі на сьогодні">
                                <HomePage />
                            </Main>
                            <Footer />
                        </RequireAuth>
                    }
                />
                <Route
                    path={routes.newsPage}
                    element={
                        <RequireAuth>
                            <Header />
                            <Main title="Останні новини">
                                <NewsPage />
                            </Main>
                            <Footer />
                        </RequireAuth>
                    }
                />
                <Route
                    path={routes.profilePage}
                    element={
                        <RequireAuth>
                            <Header />
                            <Main title="Ваш профіль">
                                <ProfilePage />
                            </Main>
                            <Footer />
                        </RequireAuth>
                    }
                />
                <Route
                    path={routes.loginPage}
                    element={
                        <>
                            <Header />
                            <Main title="Авторезуйтеся">
                                {/* <LoginPage /> */}
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
