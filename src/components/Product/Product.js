import styles from "./Product.module.css"
import { Link } from "react-router-dom";

function Product(props){
    
    const {
        product_name,
        product_description,
        product_id,
        product_image,
        product_shortname,
        stock
    } = props.props;
    
    const imageSrcPath = product_image.data.attributes.url;
    
    //USE TO BE CHANGED TO ANOTHER DOMAIN NAME
    const domain = "http://localhost:1337";
    
    return (
        
        <li className={styles.Store_item}>
            <Link to={'/product/' + product_id}>
                <div className={styles.Store_item_id}>ID: {product_id}</div>
                <div className={styles.Store_item_image}>
                    <img src={domain + imageSrcPath} width="92" height="83" alt="Cart"/>
                </div>
                <div className={styles.Store_item_description}>
                    <h3>{product_name}</h3>
                    <div className={styles.Store_item_price}>
                        <span>{product_shortname}</span>
                        <span className={styles.Store_item_summ}>{stock}</span>
                    </div>
                </div>
            </Link>
        </li>
        )
}

export default Product