import logo from "../../img/logo.svg"
import styles from "./Menu.module.css"
import { Link } from "react-router-dom"
import closeIcon from '../../img/close.svg'


function Menu({setIsOpenClass}){
    
    const closeMenu = () => {
        setIsOpenClass("closed")
    }

    return (
        <menu className={styles.Menu}>
            <button className={styles.Menu_close_btn} onClick={closeMenu}>
                <img src={closeIcon} width="40" height="40" alt="icon close"/>
            </button>
            <ul className={styles.Menu_list}>
                
                <li className={styles.Menu_item}>
                    <Link to="/profile">User details</Link>
                </li>
                
                <li className={styles.Menu_item}>
                    <Link to="/users">Search</Link>
                </li>

                <li className={styles.Menu_item}>
                    <Link to="/transfer">Transfer</Link>
                </li>

                <li className={styles.Menu_item}>
                    <Link to="/store">Store</Link>
                </li>

                <li className={styles.Menu_item}>
                    <Link to="/notifications">Notifications</Link>
                </li>

                <li className={styles.Menu_item + " " + styles.Menu_item_logout}>
                    <Link to="/logout">Log out</Link>
                </li>
            </ul>
        </menu>
    )
}
export default Menu