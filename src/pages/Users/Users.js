import Label from "../../components/Label/Label.js"
import Search from "../../components/Search/Search.js"
import styles from "./Users.module.css"

import { Carousel } from "antd"
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


function Users(){
    
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    
    return (
        <div className={styles.Users}>
            
            <Label title={"Users"}></Label>
            <Search></Search>
            
            <Carousel afterChange={onChange}>
                <div className={styles.Users_item}>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div className={styles.Users_item}>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div className={styles.Users_item}>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div className={styles.Users_item}>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    ) 
}

export default Users