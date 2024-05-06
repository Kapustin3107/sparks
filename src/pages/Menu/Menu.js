import styles from "./Menu.module.css"
import Label from "../../components/Label/Label.js"

import icon_1 from "../../img/menu-1.svg"
import icon_2 from "../../img/menu-2.svg"
import icon_3 from "../../img/menu-3.svg"
import icon_4 from "../../img/menu-4.svg"

import { Link } from "react-router-dom";

function Menu(){

    return(
        <div className={styles.Menu}>
            <Label title={"Menu"}></Label>
            <ul className={styles.Menu_list}>
                <li>
                    <Link className={styles.Menu_item} to={'/profile'}>
                        <div className={styles.Menu_icon}>
                            <img src={icon_1} width="92" height="83" alt="Profile"/>
                        </div>
                        <div className={styles.Menu_text}>
                            <div className={styles.Menu_text_content}>
                                <span>Profile</span>
                                <p>Your own profile</p>
                            </div>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link className={styles.Menu_item} to={'/users'}>
                        <div className={styles.Menu_icon}>
                            <img src={icon_2} width="100" height="100" alt="Search"/>
                        </div>
                        <div className={styles.Menu_text}>
                            <div className={styles.Menu_text_content}>
                                <span>Search</span>
                                <p>Guys from our workspace</p>
                            </div>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link className={styles.Menu_item} to={'/transfer'}>
                        <div className={styles.Menu_icon}>
                            <img src={icon_3} width="100" height="100" alt="Transfer"/>
                        </div>

                        <div className={styles.Menu_text}>
                            <div className={styles.Menu_text_content}>
                                <span>Transfer</span>
                                <p>Send your stars</p>
                            </div>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link className={styles.Menu_item} to={'/store'}>
                        <div className={styles.Menu_icon}>
                            <img src={icon_4} width="100" height="100" alt="Store"/>
                        </div>
                        <div className={styles.Menu_text}>
                            <div className={styles.Menu_text_content}>
                                <span>Store</span>
                                <p>But something spicial</p>
                            </div>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link className={styles.Menu_out} to={'/logout'}>
                        <div className={styles.Menu_text}>
                            <div className={styles.Menu_text_content}>
                                <span>Log out</span>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul> 
        </div>
    )
}

export default Menu