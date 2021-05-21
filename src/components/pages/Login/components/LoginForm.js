import React,{ useState } from 'react'
import '../Login.css';

function LoginForm({Login,error}) {

    const [details,setDetails] = useState({name:"",email:"",password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="header-x">
                <h2>Login</h2>
                </div>
                {(error!="") ? (<div className="error">{error}</div>):""}
                <div className="form-group">
                    <label htmlFor="name">Name : </label>
                    <input className="inputs" type="text" name ="name" id="name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email : </label>
                    <input className="inputs" type="email" name ="email" id="email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password : </label>
                    <input className="inputs" type="password" name ="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>
                </div>
                <div className="btn-div">
                <input className="btn-login"  type="submit" value="Login"/>
                </div>
            </div>
            <div className="back-container">
    <Link to='/'> <button className="button-back">Back</button></Link>
    </div>
        </form>
    )
}

export default LoginForm
