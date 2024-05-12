import {useState, useEffect} from "react";
import styles from "./Product.module.css"
import Label from "../../components/Label/Label.js"
import Search from "../../components/Search/Search.js"


function Product (){
    
    const [productData, setProductData] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const domain = "http://localhost:1337";
    const [addedState, setAddedState] = useState("Add to cart")
    

    useEffect( () => {
        const pathname = window.location.pathname;
        const pathSegments = pathname.split('/');
        const id = pathSegments[pathSegments.length - 1];
        
        const productURL = `http://localhost:1337/api/products/${id}?populate=*`;
        
        (async function fetchProductData() {
            try{
                const res =  await fetch(productURL);
                const responceData = await res.json();
                const currentProductData = await responceData.data;
                
                setProductData(currentProductData);

//               cart button state
//                const cartItems = localStorage.cart
//                console.log(addedState)
//                console.log(productData.attributes.product_id)

//                if(cartItems){
//
//                    const itemsArr = JSON.parse(cartItems).products
//                    itemsArr.forEach(item => {
//                        if(item === productData.attributes.product_id){
//                            setAddedState("Product is added")
//                        }
//                    })
//                } else {
//                    console.log("empty localStorage")
//                }

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

        const currentProductArray = []

        if(!localStorage.cart){
            localStorage.setItem(
                "cart",
                JSON.stringify({
                    products: [],
                })
            );

            currentProductArray.push(productData.attributes.product_id)

            localStorage.setItem(
                "cart",
                JSON.stringify({
                    products: currentProductArray,
                })
            );
            setAddedState("Product is added")
        } else {
            const addedInCart = localStorage.getItem("cart")
            const addedItems = JSON.parse(addedInCart).products
            addedItems.push(productData.attributes.product_id)

            localStorage.setItem(
                "cart",
                JSON.stringify({
                    products: addedItems,
                })
            )
        }
    }

    return (
        <div className={styles.Product}>
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
                            <button className="btn" onClick={addProduct}>
                                {addedState}
                            </button>
                       </div>
             }
            
        </div>
    )
}


export default Product