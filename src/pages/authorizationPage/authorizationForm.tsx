import { useState } from "react";
import Main from "../../layouts/main/main";

export default function LoginPage() {
    // const dispatch = useAppDispatch();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    // const grant_type = "password";
    // const client_id = "frontend";

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // Тут закидуем время и данные в локал сторидж!!!
        setUsername("");
        setPassword("");
    };
    // useEffect(() => cancelRefresh(), []);
    return (
        <Main title="">
            <form className="authorizationForm">
                {/* <InputField name="email" value={username} setValue={setUsername} label="Email" />
                <InputField name="password" value={password} setValue={setPassword} label="Password" type="password" />
                <Button className="loginBtn" type="submit" title="Login" onClick={handleSubmit} /> */}
            </form>
        </Main>
    );
}
