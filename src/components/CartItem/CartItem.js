import { useState, useEffect } from "react"
import styles from "./CartItem.module.css"
import { InputNumber } from 'antd';


function CartItem({ id, deleteProductFromCart, calculateSumm}) {
    const [cartItemData, setCartItemData] = useState(null)
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const currentCart = localStorage.getItem("cart")
    const cartData = JSON.parse(currentCart)
    const fetchCartItemData = async () => {
        const API_URL = `https://stingray-app-qqjlx.ondigitalocean.app/api/products/${id}?populate=*`
        
        try {
            const res = await fetch(API_URL);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setCartItemData(data.data)

            setTotalPrice(data.data.attributes.product_price)
//            quantityHandler()
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        fetchCartItemData()
    }, [id]);

    if (!cartItemData) {
        return <div>Loading...</div>;
    }

    const productData = cartItemData.attributes;


    function quantityHandler(){
        cartData.products.forEach(item => {
            if(item.id === productData?.product_id){
                setQuantity(item.quantity)
            }
        })
    }

    //price amount handler
    function totalPriceHandler(value){
        if(value){
            const updatedCartArray = [];
            cartData.products.forEach(item => {
                if(item.id === productData.product_id){
                    item.quantity = value.toString()
                }

                updatedCartArray.push(item);
            })

            localStorage.setItem(
                "cart",
                JSON.stringify({
                    products: updatedCartArray,
                })
            )

            setQuantity(value)
            setTotalPrice(value * productData?.product_price)

            calculateSumm(updatedCartArray)
        }
    }

    return (
        <li className={styles.Cart_item}>
            <div className={styles.Cart_item_image}>
                <img src={`https://stingray-app-qqjlx.ondigitalocean.app${productData?.product_image.data.attributes.url}`} width="92" height="83" alt= {productData?.product_name} />
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
                    <InputNumber className={styles.Cart_input} min={1} max={100} defaultValue={quantity} onChange={totalPriceHandler} />
                    <span className={styles.Cart_item_total}>
                        {totalPrice}
                    </span>
                </div>
            </div>
        </li>
    );
}

export default CartItem