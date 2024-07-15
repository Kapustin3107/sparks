import {useState, useEffect} from "react"
import styles from "./Product.module.css"
import Header from "../../components/Header/Header.js"
import Label from "../../components/Label/Label.js"



function Product (){
    
    const [productData, setProductData] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const domain = "https://stingray-app-qqjlx.ondigitalocean.app";
    const [addedState, setAddedState] = useState("Add to cart")
    

    useEffect( () => {
        const pathname = window.location.pathname;
        const pathSegments = pathname.split('/');
        const id = pathSegments[pathSegments.length - 1];
        
        const productURL = `https://stingray-app-qqjlx.ondigitalocean.app/api/products/${id}?populate=*`;
        
        (async function fetchProductData() {
            try{
                const res =  await fetch(productURL);
                const responceData = await res.json();
                const currentProductData = await responceData.data;
                
                setProductData(currentProductData);
//               cart button state
                const cartItems = localStorage.cart

                if(cartItems){

                    const itemsArr = JSON.parse(cartItems).products
                    itemsArr.forEach(item => {
                        if(item.id == currentProductData.id){
                            setAddedState("Product is added")
                        }
                    })
                } else {
                    console.log("empty localStorage")
                }

            } catch{
                setError(error.message);
            }
            setIsLoading(false);
        })()

    }, []);
    
    if(error){
        return <div>Error: {error}</div>
    }
    
    function addProduct(){

        if(addedState === "Product is added") return

        const currentProductArray = []

        if(!localStorage.cart){
            localStorage.setItem(
                "cart",
                JSON.stringify({
                    products: [],
                })
            );

            const cartItemData = {
                id: productData.attributes.product_id,
                quantity: "1"
            }

            currentProductArray.push(cartItemData)

            localStorage.setItem(
                "cart",
                JSON.stringify({
                    products: currentProductArray,
                })
            );
            setAddedState("Product is added")

        } else {

            const cartItemData = {
                id: productData.attributes.product_id,
                quantity: "1"
            }

            const addedInCart = localStorage.getItem("cart")
            const addedItems = JSON.parse(addedInCart).products

            addedItems.push(cartItemData)

            localStorage.setItem(
                "cart",
                JSON.stringify({
                    products: addedItems,
                })
            )
            setAddedState("Product is added")
        }
    }

    return (
        <div className={styles.Product}>
            <Header/>
            {
                !isLoading ?  <Label title={productData.attributes.product_name}></Label> : null
            }
            
            {
                   isLoading ?
                       <h1>Loading...</h1> :

                       <div className={styles.Product_container}>
                           <div className={styles.Product_wrapper}>
                               <div className={styles.Product_image}>
                                <img src={domain + productData.attributes.product_image.data.attributes.url} alt="Product image"/>
                                </div>
                                <div className={styles.Product_info}>
                                    <h2 className={styles.Product_title}>{productData.attributes.product_name}</h2>
                                    <p className={styles.Product_description}>{productData.attributes.product_description}</p>
                                    <div className={styles.Product_info_footer}>
                                        <span className={styles.Product_shortname}>{productData.attributes.product_shortname}</span>
                                        <span className={styles.Product_price}>{productData.attributes.product_price}</span>
                                    </div>
                                </div>

                            </div>
                            <button className={"btn"} onClick={addProduct}>
                                {addedState}
                            </button>
                       </div>
             }
            
        </div>
    )
}


export default Product