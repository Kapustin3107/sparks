import { useState, useEffect } from "react"
import startPayment from "../../services/Payment/Payment"
import styles from "./Cart.module.css"
import Label from "../../components/Label/Label.js"
import CartItem from "../../components/CartItem/CartItem.js"

function Cart(){
    const addedItems = (localStorage.cart) ? JSON.parse(localStorage.cart) : null
    const [currentCart, setCurrentCart] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        if(addedItems){
            setCurrentCart(addedItems.products)
            calculateSumm(addedItems.products)
        }
    }, [])

    //calculate cart total price
    async function calculateSumm(items) {
        console.log("start")
        let total = 0

        for(const item of items){
            const API_URL = `https://stingray-app-qqjlx.ondigitalocean.app/api/products/${item.id}`
            const res =  await fetch(API_URL)
            const responceData = await res.json()
            const currentProductData = await responceData.data

            item.quantity ?
                total += (currentProductData.attributes.product_price) :
                total += (currentProductData.attributes.product_price * item.quantity)

            console.log(item.quantity)
        }
        setTotalAmount(total)
        console.log(totalAmount)
    }

    //delete items from cart function
    const deleteProductFromCart = ({target}) => {
        const currentCart = localStorage.getItem("cart")

        if (currentCart) {
            const cartData = JSON.parse(currentCart)
            const cardDataUpdated = []

            cartData.products.forEach(item => {
                const updatedData = {
                    id:item.id,
                    quantity: 0,
                }
                if(item.id !== target.id){
                    cardDataUpdated.push(updatedData)
                }
            })

            localStorage.setItem(
                "cart",
                JSON.stringify({
                    products: cardDataUpdated,
                })
            )
            setCurrentCart(cardDataUpdated)
            calculateSumm(cardDataUpdated)
        }
    }


    return(
        <div className={styles.Cart}>
            <Label title={"Basket"}/>
            <ul className={styles.Cart_wrapper}>
                    {
                        (currentCart && currentCart.length) ?
                            (currentCart.map((item, index) => <CartItem key={index} id={item.id} deleteProductFromCart={deleteProductFromCart} calculateSumm={calculateSumm}/>)):
                            <h1>Cart is empty</h1>
                    }
            </ul>
            <div className={styles.Cart_footer}>
                <div className={styles.Cart_footer_wrapper}>
                    <div className={styles.Cart_footer_label}>Subtotal</div>
                    <div className={styles.Cart_footer_amount}>{totalAmount}</div>
                </div>
                <button className={`${styles.Cart_checkout_btn} btn`} onClick={startPayment}>Pay</button>
            </div>
        </div>
    )
}

export default Cart