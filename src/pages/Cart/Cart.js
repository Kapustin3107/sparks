import styles from "./Cart.module.css"
import Label from "../../components/Label/Label.js"
import Search from "../../components/Search/Search.js"
import cart_image from "../../img/cart.jpg"
import { InputNumber } from 'antd';


const onChange = (value: number) => {
    console.log('changed', value);
};
function Cart(){
    return(
        <div className={styles.Cart}>
            <Label title={"Basket"}></Label>
            <Search></Search>
            
            <ul className={styles.Cart_wrapper}>
                <li className={styles.Cart_item}>
                    <div className={styles.Cart_item_image}>
                        <img src={cart_image} width="92" height="83" alt="Cart"/>
                    </div>
                    <div className={styles.Cart_item_content}>
                        <div className={styles.Cart_item_title}>Hudi Sparks</div>
                        <div className={styles.Cart_item_options}>
                            <div className={styles.Cart_item_option}>
                                <span className={styles.Item_option_name}>Size: </span>
                                <span className={styles.Item_option_value}>M</span>
                            </div>
                            <div className={styles.Cart_item_option}>
                                <span className={styles.Item_option_name}>Color: </span>
                                <span className={styles.Item_option_value}>Orange</span>
                            </div>
                        </div>
                        <div className={styles.Cart_item_footer}>
                            <InputNumber className={styles.Cart_input} min={1} max={10} defaultValue={3} onChange={onChange} />
                            <span className={styles.Cart_item_total}>200</span>
                        </div>
                    </div>
                </li>
                
                <li className={styles.Cart_item}>
                    <div className={styles.Cart_item_image}>
                        <img src={cart_image} width="92" height="83" alt="Cart"/>
                    </div>
                    <div className={styles.Cart_item_content}>
                        <div className={styles.Cart_item_title}>Hudi Sparks</div>
                        <div className={styles.Cart_item_options}>
                            <div className={styles.Cart_item_option}>
                                <span className={styles.Item_option_name}>Size: </span>
                                <span className={styles.Item_option_value}>M</span>
                            </div>
                            <div className={styles.Cart_item_option}>
                                <span className={styles.Item_option_name}>Color: </span>
                                <span className={styles.Item_option_value}>Orange</span>
                            </div>
                        </div>
                        <div className={styles.Cart_item_footer}>
                            <InputNumber className={styles.Cart_input} min={1} max={10} defaultValue={3} onChange={onChange} />
                            <span className={styles.Cart_item_total}>200</span>
                        </div>
                    </div>
                </li>
                
                <li className={styles.Cart_item}>
                    <div className={styles.Cart_item_image}>
                        <img src={cart_image} width="92" height="83" alt="Cart"/>
                    </div>
                    <div className={styles.Cart_item_content}>
                        <div className={styles.Cart_item_title}>Hudi Sparks</div>
                        <div className={styles.Cart_item_options}>
                            <div className={styles.Cart_item_option}>
                                <span className={styles.Item_option_name}>Size: </span>
                                <span className={styles.Item_option_value}>M</span>
                            </div>
                            <div className={styles.Cart_item_option}>
                                <span className={styles.Item_option_name}>Color: </span>
                                <span className={styles.Item_option_value}>Orange</span>
                            </div>
                        </div>
                        <div className={styles.Cart_item_footer}>
                            <InputNumber className={styles.Cart_input} min={1} max={10} defaultValue={3} onChange={onChange} />
                            <span className={styles.Cart_item_total}>200</span>
                        </div>
                    </div>
                </li>
            </ul>
            
            <div className={styles.Cart_footer}>
                <div className={styles.Cart_footer_label}>Subtotal</div>
                <div className={styles.Cart_footer_amount}>820</div>
            </div>
        </div>
    )
}

export default Cart