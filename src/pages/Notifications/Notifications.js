import styles from "./Notifications.module.css"
import Label from "../../components/Label/Label.js"
import Search from "../../components/Search/Search.js"

function Notifications(){
    return(
        <div className={styles.Notifications}>
            <Label title={"Notifications"}></Label>
            <Search></Search>
            <ul className={styles.Notifications_wrapper}>
                <li className={styles.Notifications_item}>
                   
                </li>
            </ul>
        </div>
    )
}

export default Notifications