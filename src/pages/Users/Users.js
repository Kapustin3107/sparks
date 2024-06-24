import { useState, useEffect } from "react"

import Label from "../../components/Label/Label.js"
import Search from "../../components/Search/Search.js"
import styles from "./Users.module.css"
import User from "../../components/User/User.js"

import { Carousel } from "antd"
const API_URL = "https://stingray-app-qqjlx.ondigitalocean.app/api/users?populate=*";

function Users(){
    
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        (async function fetchData() {
            try{
                const res =  await fetch(API_URL)
                const usersData = await res.json()
                setUsers(usersData)
            } catch{
                setError(error.message);
            }
            setIsLoading(false);

        })()
    }, [])

    if(error){
        return <div>Error: {error}</div>
    }

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <div className={styles.Users}>
            <Label title={"Users"}></Label>
            <div className={styles.Users_inner}>
                <Search></Search>
                <Carousel afterChange={onChange}>
                    { isLoading ? <h1>Loading...</h1> : (users.map((user) => <User key={user.id} props={user}/>)) }
                </Carousel>
            </div>
        </div>
    ) 
}

export default Users