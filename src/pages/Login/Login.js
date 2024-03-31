import styles from "./Login.module.css"
import logo from "../../img/logo-colored.svg"

function Login(){
    return (
        <div className={styles.Login}>
            <form className={styles.Login_form}>
                
                <div className={styles.Login_logo}>
                    <img src={logo} width="200" height="100" alt="Sparks"/>
                </div>
                
                <h3 className={styles.Login_title}>Register now</h3>
                
                <fieldset className={styles.Login_column}>
                    <input type="text" id="first_name" name="first_name" placeholder="First name*"/>
                    <input type="text" id="last_name" name="first_name" placeholder="Last name*"/>
                    <input type="tel" id="phone_number" name="phone_number" placeholder="Phone number*"/>
                    <input type="password" id="phone_number" name="password" placeholder="Password*"/>
                </fieldset>
                
                <button type="submit" className="btn">Sign up</button>
                
            </form>
        </div>
        )
}

export default Login