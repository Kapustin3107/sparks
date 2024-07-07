import logo from "../../img/logo.svg"
import burgerIcon from '../../img/burger.svg'
import basketIcon from '../../img/basket.svg'
import styles from "./Header.module.css"
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu.js'
import { useState } from 'react'


function Header(){

    const [isOpenClass, setIsOpenClass] = useState("closed");

    function changeOpenState() {
        setIsOpenClass("opened");
    }

    return (
        <header className={`${styles.Header} ${isOpenClass}`}>
            <div className={ `${styles.Header_wrapper} center`}>
                <div className={styles.Header_burger} onClick={changeOpenState}>
                    <img src={burgerIcon} alt="burger icon"/>
                </div>
                <img className={styles.Header_logo} src={logo} width="200" height="100" alt="Sparks"/>
                <div className={styles.Header_cart}>
                    <img src={basketIcon} alt="burger icon"/>
                </div>
            </div>

            <Menu setIsOpenClass={setIsOpenClass}/>
        </header>
    )
}
export default Header