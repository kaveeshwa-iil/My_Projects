import React, { useState } from 'react';
import LoginForm from './components/LoginForm'

function Login() {

    const adminUser = {
        email:"kavishwa@abc.com",
        password:"abc123"
    }

    const [user,setUser] = useState({name:"",email:""});
    const [error,setError] = useState("");
    
    const Login = details => {
        console.log(details);
        if (details.email == adminUser.email && details.password==adminUser.password){
            console.log("Logged in");
            setUser({
                name:details.name,
                email:details.email
            });
        }
        else {
            console.log("Details don't match")
            setError("Details don't match")
        }
    }
    const Logout = details => {

        setUser({name:"",email:""});

    }

    return (
        <div>
            {(user.email !="") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button className="btn-logout" onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}
        </div>
    )
}

export default Login
