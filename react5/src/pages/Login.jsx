import Navbar from "../ components/Navbar";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [notif, setNotif] = useState("");

    const navigate = useNavigate();
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    console.log(username, password);
    const payload = {   
        username: username, 
        password: password}
    const handleLogin = () => {
        axios
            .post("https://api.mudoapi.tech/login", payload)
            .then((res) => { 
                console.log(res);
                setNotif("Login Berhasil");
                const token = res?.data?.data?.token;
                if(token){
                    setNotif("Login Berhasil");
                    setTimeout(() => navigate("/menu"), 500); // Timeout untuk mengarahkan pengguna ke halaman menu setelah 2 detik
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <Navbar />
            <h1>Login</h1>
            {!!notif.length && <h1>{notif}</h1>}
            <input 
            type="text" 
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange} />
            <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange} />
    
            <button onClick={handleLogin}>Login</button>
        </div>
        
    )
}

export default Login;