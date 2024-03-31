import styles from "./Label.module.css"
import Home from "../../img/Home.svg"
import Bell from "../../img/Bell.svg"

function Label(props){
    const title = props.title;
    return(
        <div className={styles.Label}>
            <a href="#" className={styles.Label_btn}>
                <img src={Home} width="24" height="24" alt="Home"/>
            </a>
            <h2>{title}</h2>
            <a href="#" className={styles.Label_btn}>
                <img src={Bell} width="24" height="24" alt="Bell"/>
            </a>
        </div>
        )
}

export default Label