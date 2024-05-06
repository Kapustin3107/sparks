import styles from "./User.module.css"


function User(props){
    
    const userData = props.props
    const imageSrc = `http://localhost:1337${userData.user_image.url}`
    
    console.log(userData)
    
    return (
        <div className={styles.User_item}>
            <div className={styles.User_bg}>
                <img src={imageSrc} alt="User image"/>
            </div>
           
            <div className={styles.User_coins}>{userData.user_coins}</div>
            <h3 className={styles.User_nickname}>{userData.user_nickname}</h3>
        </div>
    )
}

export default User