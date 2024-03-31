import Label from "../../components/Label/Label.js"
import styles from "./Search.module.css"

function Search () {
    return (
        <div className={styles.Search}>
            <input id="search" type="text" className={styles.Search_input} placeholder="Search "></input>
        </div>
    )
}

export default Search