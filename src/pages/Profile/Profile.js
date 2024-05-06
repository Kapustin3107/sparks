import { useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode";
import Person from "../../components/Person/Person.js"


function Profile(){

    const userCredentials = localStorage.user;
    const [userData, setUserData] = useState({});
    const [userImagePath, setUserImagePath] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const API_URL = "http://localhost:1337/api/users?populate=*";

    useEffect(() => {
        const myobj = JSON.parse(userCredentials)
        const token = myobj.jwt
        const decodedResult = jwtDecode(token);


        (async function fetchData() {
            try{
                const res =  await fetch(`http://localhost:1337/api/users/${decodedResult.id}?populate=*`)
                const currentUserData = await res.json()
                setUserData(currentUserData)
                setUserImagePath(  `http://localhost:1337${userData.user_image.url}`)

                console.log(userImagePath)
            } catch{
                setError(error.message);
            }
            setIsLoading(false);
        })()
    }, [])

    if(error){
        return <div>Error: {error}</div>
    }

    return ( <div> {isLoading ? <h1>Loading...</h1> : <Person props={userData}/>} </div>)
}

export default Profile