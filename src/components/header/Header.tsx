import { useEffect, useState } from "react";
import styles from "./styles/header/Header.module.css";
import { useNavigate } from "react-router-dom";

interface User {
    name: string;
    password: string;
    email: string;
}

const Header = () => {
    const [user, setUser] = useState<User>({name:'', password:'', email:''});
    const navigate = useNavigate();

    const fetchUser = async() => {
        try{
            const response = await fetch("/", {
                method: "POST",
                body: JSON.stringify({user}),
                headers: {
                    "Content-Type" : "application/json"
                }
            });
            if(response.ok) {
                console.log(response);
                const data = await response.json();
                setUser(data.user);
            }
        }catch(err) {
            console.log('사용자 정보 에러',err)
        }
    };

    useEffect(() => {
        fetchUser();
    },[]);

    return(
        <div className={styles.header}>
            {user ? (
                <div>
                    <h1 className={styles.logo}> E-Office </h1>
                    <button onClick={() => {navigate('/profile')}}>프로필</button>
                </div>
            ) : <div>
                    <h1 className={styles.logo}> E-Office </h1>
                </div>
            }
        </div>
    )
}

export default Header;