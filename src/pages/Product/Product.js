import {useState, useEffect} from "react";
import styles from "./Product.module.css"
import Label from "../../components/Label/Label.js"
import Search from "../../components/Search/Search.js"


function Product (){
    
    const [productData, setProductData] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const domain = "http://localhost:1337";
    
    
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
                console.log("1")

            } catch{
                setError(error.message);
            }
            setIsLoading(false);
        })()
        
    }, []);
    
    if(error){
        return <div>Error: {error}</div>
    }
    
    return (
        <div className={styles.Product}>
            {
                !isLoading ?  <Label title={productData.attributes.product_name}></Label> : null
            }
            
            <div className={styles.Product_inner}>
                <Search></Search>
            </div>
            
            {
                   isLoading ?
                       <h1>Loading...</h1> :

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
             }
            
        </div>
    )
}


export default Product