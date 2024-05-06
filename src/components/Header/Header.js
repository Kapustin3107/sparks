import logo from "../../img/logo.svg"
import styles from "./Header.module.css"
import { Link } from 'react-router-dom';


function Header(){
    return (
        <header className={styles.Header}>
            <div className="center">
                <img className={styles.Header_logo} src={logo} width="200" height="100" alt="Sparks"/>
            </div>
        </header>
    )
}
export default Header