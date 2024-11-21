import { useState } from "react"


export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggerdIn] = useState(false);

    const handleLogin = () =>{
        setIsLoggerdIn(true);
    }

    const handleLogout = () =>{
        setIsLoggerdIn(false);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>

            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}