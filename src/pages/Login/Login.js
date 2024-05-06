import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {storeUser} from "../../helpers.js"

import styles from "./Login.module.css"
import logo from "../../img/logo-colored.svg"
import axios from 'axios'




const initialUser = {
    identifier: "",
    password: "",
}

function Login(){

    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();
    const handleChange = ({target}) => {
        const {name, value} = target
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            if(user.identifier && user.password){
                const url = "http://localhost:1337/api/auth/local"
                const { data } = await axios.post(url, user);

                if (data.jwt) {
                    storeUser(data);
                    toast.success("Logged in successfully!", {
                        hideProgressBar: true,
                    });
                    setUser(initialUser);
                    navigate("/");
                }
            }
        } catch (error){
            toast.error(error.message, {
                hideProgressBar: true,
            });
        }
    }

    return (
        <div className={styles.Login}>
            <form className={styles.Login_form}>
                <div className={styles.Login_logo}>
                    <img src={logo} width="200" height="100" alt="Sparks"/>
                </div>
                <h3 className={styles.Login_title}>Login</h3>
                <fieldset className={styles.Login_column}>
                    <input type="email" id="email" name="identifier" placeholder="Enter your email*" value={user.identifier} onChange={handleChange}/>
                    <input type="password" id="phone_number" name="password" placeholder="Password*" value={user.password} onChange={handleChange}/>
                </fieldset>
                <button type="submit" className="btn" onClick={handleLogin}>Sign up</button>
            </form>
        </div>
        )
}

export default Login