import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeAuthorization } from "../../assets/dataForAuthorization";
import routes from "../../assets/routes";
import { session } from "../../utils/sessionStorage";

export default function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const handleSubmit = () => {
        if (username === fakeAuthorization.username && password === fakeAuthorization.password) {
            session.createSession();
            navigate(routes.homePage);
        } else {
            alert("Ім'я користувача або пароль введено неправильно");
        };
        setUsername("");
        setPassword("");
    };

    return (
        <FormControl>
            <TextField id="outlined-basic" label="User name" variant="outlined" onChange={event => { setUsername(event.target.value); }} />
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={event => { setPassword(event.target.value); }} />
            <Button onClick={() => handleSubmit()} variant="contained">Увійти</Button>
        </FormControl>
    );
}