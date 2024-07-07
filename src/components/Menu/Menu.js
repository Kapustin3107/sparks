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
                <li className={styles.Menu_item}>User details</li>
                <li className={styles.Menu_item}>Search</li>
                <li className={styles.Menu_item}>Transfer</li>
                <li className={styles.Menu_item}>Store</li>
                <li className={styles.Menu_item}>Shoping basket(1)</li>
                <li className={styles.Menu_item}>Profiles</li>
                <li className={styles.Menu_item}>Notifications (<span>2</span>)</li>
            </ul>
        </menu>
    )
}
export default Menu