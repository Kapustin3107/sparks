import styles from "./Notifications.module.css"
import Label from "../../components/Label/Label.js"
import Search from "../../components/Search/Search.js"
import user1 from "../../img/transaction-1.jpg"
import user2 from "../../img/transaction-2.jpg"

function Notifications(){
    return(
        <div className={styles.Notifications}>
            <Label title={"Notifications"}></Label>
            <Search></Search>
            <ul className={styles.Notifications_wrapper}>
                <li className={styles.Notifications_item}>
                    <div className={styles.Notifications_image}>
                        <img src={user1} width="80" height="100" alt="Cart"/>
                    </div>
                    <div className={styles.Notifications_data}>
                        <div className={styles.Notifications_top}>
                            <span className={styles.Notifications_from}>Alina</span>
                            <span>-></span>
                            <span className={styles.Notifications_from}>Paula</span>
                        </div>
                        <div className={styles.Notifications_bottom}>
                            <span>+</span>
                            <span>120</span>
                        </div>

                    </div>
                    <div className={styles.Notifications_image}>
                        <img src={user2} width="80" height="100" alt="Cart"/>
                    </div>
                </li>
                <li className={styles.Notifications_item}>
                    <div className={styles.Notifications_image}>
                        <img src={user1} width="80" height="100" alt="Cart"/>
                    </div>
                    <div className={styles.Notifications_data}>
                        <div className={styles.Notifications_top}>
                            <span className={styles.Notifications_from}>Alina</span>
                            <span>-></span>
                            <span className={styles.Notifications_from}>Paula</span>
                        </div>
                        <div className={styles.Notifications_bottom}>
                            <span>+</span>
                            <span>120</span>
                        </div>

                    </div>
                    <div className={styles.Notifications_image}>
                        <img src={user2} width="80" height="100" alt="Cart"/>
                    </div>
                </li>
                <li className={styles.Notifications_item}>
                    <div className={styles.Notifications_image}>
                        <img src={user1} width="80" height="100" alt="Cart"/>
                    </div>
                    <div className={styles.Notifications_data}>
                        <div className={styles.Notifications_top}>
                            <span className={styles.Notifications_from}>Alina</span>
                            <span>-></span>
                            <span className={styles.Notifications_from}>Paula</span>
                        </div>
                        <div className={styles.Notifications_bottom}>
                            <span>+</span>
                            <span>120</span>
                        </div>

                    </div>
                    <div className={styles.Notifications_image}>
                        <img src={user2} width="80" height="100" alt="Cart"/>
                    </div>
                </li>
                <li className={styles.Notifications_item}>
                    <div className={styles.Notifications_image}>
                        <img src={user1} width="80" height="100" alt="Cart"/>
                    </div>
                    <div className={styles.Notifications_data}>
                        <div className={styles.Notifications_top}>
                            <span className={styles.Notifications_from}>Alina</span>
                            <span>-></span>
                            <span className={styles.Notifications_from}>Paula</span>
                        </div>
                        <div className={styles.Notifications_bottom}>
                            <span>+</span>
                            <span>120</span>
                        </div>

                    </div>
                    <div className={styles.Notifications_image}>
                        <img src={user2} width="80" height="100" alt="Cart"/>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Notifications