import styles from "./Store.module.css"
import Label from "../../components/Label/Label.js"
import Search from "../../components/Search/Search.js"
import product_img from "../../img/store.jpg"

function Store(){
    return (
        <div className={styles.Store}>
            
            <Label title={"Sparks Store"}></Label>
            <div className={styles.Store_inner}>
                <Search></Search>
            </div>

            <ul className={styles.Store_wrapper}>
                <li className={styles.Store_item}>
                    <div className={styles.Store_item_image}>
                        <img src={product_img} width="92" height="83" alt="Cart"/>
                    </div>
                    <div className={styles.Store_item_description}>
                        <h3>Hudi Sparks</h3>
                        <div className={styles.Store_item_price}>
                            <span>@sparks</span>
                            <span className={styles.Store_item_summ}>200</span>
                        </div>
                    </div>
                </li>
                <li className={styles.Store_item}>
                    <div className={styles.Store_item_image}>
                        <img src={product_img} width="92" height="83" alt="Cart"/>
                    </div>
                    <div className={styles.Store_item_description}>
                        <h3>Hudi Sparks</h3>
                        <div className={styles.Store_item_price}>
                            <span>@sparks</span>
                            <span className={styles.Store_item_summ}>200</span>
                        </div>
                    </div>
                </li>
                <li className={styles.Store_item}>
                    <div className={styles.Store_item_image}>
                        <img src={product_img} width="92" height="83" alt="Cart"/>
                    </div>
                    <div className={styles.Store_item_description}>
                        <h3>Hudi Sparks</h3>
                        <div className={styles.Store_item_price}>
                            <span>@sparks</span>
                            <span className={styles.Store_item_summ}>200</span>
                        </div>
                    </div>
                </li>
                <li className={styles.Store_item}>
                    <div className={styles.Store_item_image}>
                        <img src={product_img} width="92" height="83" alt="Cart"/>
                    </div>
                    <div className={styles.Store_item_description}>
                        <h3>Hudi Sparks</h3>
                        <div className={styles.Store_item_price}>
                            <span>@sparks</span>
                            <span className={styles.Store_item_summ}>200</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Store