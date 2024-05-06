import styles from "./Transfer.module.css"
import Label     from "../../components/Label/Label"
import Search     from "../../components/Search/Search"
import Image from "../../img/transaction-1.jpg"

import { InputNumber } from 'antd';

const onChange = (value) => {
    console.log('changed', value);
};

function Transfer(){
    return(
        <div className={styles.Transfer}>
            <Label title={"Transfer"}/>
            <div className={styles.Transfer_inner}>
                <Search/>
            </div>
            <div className={styles.Transfer_wrapper}>
                <div className={styles.Transfer_user_img}>
                    <img src={Image} width="80" height="100" alt="User"/>
                </div>
                <div className={styles.Transfer_form}>
                    <div className={styles.Transfer_select}>
                        <select className="input" name="transfer" id="transfer" placeholder="member">
                            <option value="">member</option>
                            <option value="user-1">user-1</option>
                            <option value="user-2">user-2</option>
                            <option value="user-3">user-3</option>
                            <option value="user-4">user-3</option>
                        </select>
                    </div>
                    <div className={styles.Transfer_stars}>
                        <span>Sending stars</span>
                        <InputNumber className={styles.Cart_input} min={1} max={10} defaultValue={3} onChange={onChange} />
                    </div>
                    <div className={styles.Transfer_message}>
                        <label>Sending stars</label>
                        <textarea className="input" name="message" id="message" cols="30" rows="5"></textarea>
                    </div>
                    
                    <div className={styles.Transfer_btn}>
                        <button className="btn" type="button">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfer
