import { useState, useEffect } from "react"
import styles from "./CartItem.module.css"
import cart_image from "../../img/cart.jpg"
import { InputNumber } from 'antd';

const onChange = (value: number) => {
    console.log('changed', value);
};

function CartItem({ id, deleteProductFromCart}) {
    const [cartItemData, setCartItemData] = useState(null)

    const fetchCartItemData = async () => {
        const API_URL = `http://localhost:1337/api/products/${id}?populate=*`
        
        try {
            const res = await fetch(API_URL);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setCartItemData(data.data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        fetchCartItemData();
    }, [id]);

    if (!cartItemData) {
        return <div>Loading...</div>;
    }

    const productData = cartItemData.attributes;

    const onChange = (value) => {
        console.log('Changed:', value);
    };
    
    

    return (
        <li className={styles.Cart_item}>
            <div className={styles.Cart_item_image}>
                <img src={`http://localhost:1337${productData?.product_image.data.attributes.url}`} width="92" height="83" alt= {productData?.product_name} />
            </div>
            <div className={styles.Cart_item_content}>
                <div className={styles.Cart_item_title}>
                    <span> {productData?.product_name}</span>
                    <button id={productData?.product_id} className={styles.Cart_item_delete} onClick={deleteProductFromCart}></button>
                </div>
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
                    <InputNumber className={styles.Cart_input} min={1} max={10} defaultValue={1} onChange={onChange} />
                    <span className={styles.Cart_item_total}>
                        {productData?.product_price}
                    </span>
                </div>
            </div>
        </li>
    );
}

export default CartItem