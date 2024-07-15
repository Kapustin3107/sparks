import { useState, useEffect } from "react"

import styles from "./Store.module.css"
import Header from "../../components/Header/Header.js";
import Label from "../../components/Label/Label.js"
import Search from "../../components/Search/Search.js"
import Product from "../../components/Product/Product.js"



const API_URL = "https://stingray-app-qqjlx.ondigitalocean.app/api/products?populate=*";

function Store(){

    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        (async function fetchData() {
            try{
                const res =  await fetch(API_URL);
                const responceData = await res.json();
                const products = await responceData.data;
                setProducts(products);
            } catch{
                setError(error.message);
            }
            setIsLoading(false);
        })()
    }, [])

    if(error){
        return <div>Error: {error}</div>
    }

    return (
        <div className={styles.Store}>
            
            <Header/>
            <Label title={"Sparks Store"}></Label>

            <div className={styles.Store_inner}>
                <Search></Search>
            </div>

            <ul className={styles.Store_wrapper}>
                {
                    isLoading ?
                        <h1>Loading...</h1> :
                        (products.map((product) => <Product key={product.id} props={product.attributes}/>))
                }
            </ul>
        </div>
    )
}

export default Store