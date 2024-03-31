import Label from "../../components/Label/Label.js"

import styles from "./Profile.module.css"
import avatar from "../../img/avatar.jpg"

import instagram from "../../img/instagram.svg"
import telegram from "../../img/telegram.svg"
import twitter from "../../img/twitter.svg"
import link from "../../img/subtract.svg"


function Profile(){

    return(
        <div className={styles.Profile}>
            
            <Label title={"Profile"}></Label>
            
            <div className={styles.Profile_image}>
                <img src={avatar} width="300" height="100" alt="profile photo"/>
            </div>
            
            <div className={styles.Profile_content}>
                <div className={styles.Profile_content_row}>
                    <div className={styles.Profile_content_column}>
                        <button className="btn" >Edit profile</button>
                    </div>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_wallet_value}>1098</span>
                    </div>
                </div>
                
                <div className={styles.Profile_content_row}>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_label}>Nickname</span>
                    </div>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_nickname}>@angy</span>
                    </div>
                </div>
                
                <div className={styles.Profile_content_row}>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_label}>Full name</span>
                    </div>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_name}>Angelika Halushka</span>
                    </div>
                </div>
                
                <div className={styles.Profile_content_row}>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_label}>Title / company role</span>
                    </div>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_role}>Media buyer</span>
                    </div>
                </div>
                
                <div className={styles.Profile_content_row}>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_label}>Department</span>
                    </div>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_department}>Social</span>
                    </div>
                </div>
                
                <div className={styles.Profile_content_row}>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_label}>Birthday</span>
                    </div>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_birthday}>21/12/1998</span>
                    </div>
                </div>
                
                <div className={styles.Profile_content_row}>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_label}>TL</span>
                    </div>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_tl}>Igor Sirenko</span>
                    </div>
                </div>
                
                <div className={styles.Profile_content_row}>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_contact_label}>Contact</span>
                    </div>
                    <div className={styles.Profile_content_column}></div>
                </div>
                
                <div className={styles.Profile_content_row}>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_label}>Mail</span>
                        <span className={styles.Profile_email}></span>
                    </div>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_phone}>angy@sparks.com</span>
                    </div>
                </div>
                
                <div className={styles.Profile_content_row}>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_label}>Phone</span>
                        <span className={styles.Profile_email}></span>
                    </div>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_phone}>+38097234567</span>
                    </div>
                </div>
                
                <div className={styles.Profile_content_row}>
                    <div className={styles.Profile_content_column}>
                        <span className={styles.Profile_label}>Social links</span>
                    </div>
                    <div className={styles.Profile_content_column}>
                        <ul className={styles.Profile_socials}>
                            <li><a className={styles.Profile_socials_link} href="#">
                                <img src={instagram} width="32" height="32" alt="instagram"/>
                            </a></li>
                            <li><a className={styles.Profile_socials_link} href="#">
                                <img src={telegram} width="32" height="32" alt="telegram"/>
                            </a></li>
                            <li><a className={styles.Profile_socials_link} href="#">
                                <img src={twitter} width="32" height="32" alt="twitter"/>
                            </a></li>
                            <li><a className={styles.Profile_socials_link} href="#">
                                <img src={link} width="32" height="32" alt="link"/>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        )
}

export default Profile