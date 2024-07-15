import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'

import Header from "../../components/Header/Header.js"
import Label from "../../components/Label/Label.js"
import Search from "../../components/Search/Search.js"
import styles from "./Users.module.css"
import User from "../../components/User/User.js"

import 'swiper/css';
import 'swiper/css/effect-cards';
import "./Users.css"



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

    const carouselSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
      };

    return (
        <div className={styles.Users}>
            <Header/>
            <Label title={"Users"}></Label>
            <div className={styles.Users_inner}>
                <Search></Search>
                {/* <Carousel className="carousel" afterChange={onChange} {...carouselSettings}>
                    { isLoading ? <h1>Loading...</h1> : (users.map((user) => <User key={user.id} props={user}/>)) }
                </Carousel> */}

                <Swiper
                     effect={'cards'}
                     grabCursor={true}
                     modules={[EffectCards]}
                     className="Users-slider"
                     rotate={true}
                    >

                    { isLoading ? <h1>Loading...</h1> : (users.map((user) =><SwiperSlide><User key={user.id} props={user}/></SwiperSlide>)) }
                    
                </Swiper>

                
            </div>
        </div>
    ) 
}

export default Users