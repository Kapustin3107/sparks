import styles from "./Label.module.css"
import Home from "../../img/Home.svg"
import Bell from "../../img/Bell.svg"

import { Link } from "react-router-dom";

function Label(props){
    const title = props.title;
    return(
        <div className={styles.Label}>
            <Link to="/" className={styles.Label_btn}>
                <img src={Home} width="24" height="24" alt="Home"/>
            </Link>
            <h2>{title}</h2>
            <Link to="/notifications" className={styles.Label_btn}>
               <img src={Bell} width="24" height="24" alt="Bell"/>
            </Link>
        </div>
        )
}

export default Label