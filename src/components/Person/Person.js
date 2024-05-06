

import Label from "../Label/Label.js"

import styles from "./Person.module.css"

import instagram from "../../img/instagram.svg"
import telegram from "../../img/telegram.svg"
import twitter from "../../img/twitter.svg"
import link from "../../img/subtract.svg"

function Person(props){
    
    console.log(props.props)
    
    return (
        <div className={styles.Person}>
            <Label title={props.props.user_fullname}></Label>
        
            <div className={styles.Person_wrapper}>
                <div className={styles.Person_image}>
                    <img src={`http://localhost:1337${props.props.user_image.url}`} width="300" height="100" alt="profile photo"/>
                </div>
        
                <div className={styles.Person_content}>
                    <div className={styles.Person_content_row}>
                        <div className={styles.Person_content_column}>
                            <button className="btn">Edit profile</button>
                        </div>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_wallet_value}>{props.props.user_coins}</span>
                        </div>
                    </div>
        
                    <div className={styles.Person_content_row}>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_label}>Nickname</span>
                        </div>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_nickname}>{props.props.user_nickname}</span>
                        </div>
                    </div>
                    
                    <div className={styles.Person_content_row}>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_label}>Full name</span>
                        </div>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_name}>{props.props.user_fullname}</span>
                        </div>
                    </div>
                    
                    <div className={styles.Person_content_row}>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_label}>Title / company role</span>
                        </div>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_role}>{props.props.user_role}</span>
                        </div>
                    </div>
                    
                    <div className={styles.Person_content_row}>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_label}>Department</span>
                        </div>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_department}>{props.props.user_department}</span>
                        </div>
                    </div>
                    
                    <div className={styles.Person_content_row}>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_label}>Birthday</span>
                        </div>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_birthday}>{props.props.user_dob}</span>
                        </div>
                    </div>
                    
                    <div className={styles.Person_content_row}>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_label}>TL</span>
                        </div>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_tl}>{props.props.user_tl}</span>
                        </div>
                    </div>
                    
                    <div className={styles.Person_content_row}>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_contact_label}>Contact</span>
                        </div>
                        <div className={styles.Person_content_column}></div>
                    </div>
                    
                    <div className={styles.Person_content_row}>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_label}>Mail</span>
                            <span className={styles.Person_email}></span>
                        </div>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_phone}>{props.props.email}</span>
                        </div>
                    </div>
                    
                    <div className={styles.Person_content_row}>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_label}>Phone</span>
                            <span className={styles.Person_email}></span>
                        </div>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_phone}>{props.props.user_phone}</span>
                        </div>
                    </div>
                  
        
                    <div className={styles.Person_content_row}>
                        <div className={styles.Person_content_column}>
                            <span className={styles.Person_label}>Social links</span>
                        </div>
                        <div className={styles.Person_content_column}>
                            <ul className={styles.Person_socials}>
                                <li>
                                    <a className={styles.Person_socials_link} href="#">
                                        <img src={instagram} width="32" height="32" alt="instagram"/>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.Person_socials_link} href="#">
                                        <img src={telegram} width="32" height="32" alt="telegram"/>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.Person_socials_link} href="#">
                                        <img src={twitter} width="32" height="32" alt="twitter"/>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.Person_socials_link} href="#">
                                        <img src={link} width="32" height="32" alt="link"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Person