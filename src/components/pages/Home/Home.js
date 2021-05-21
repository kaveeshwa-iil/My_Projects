import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
    return (
        <>
        <h1 className="headline">My Projects</h1>
        <div className="container--main">
        
        <div className="button--container">
        
           <Link to='/quiz'> <button className="home-buttons">Quiz</button></Link>
           <Link to='/tours'> <button className="home-buttons">Tours</button></Link>
           <Link to='/reviews'> <button className="home-buttons">Reviews</button></Link>
           <Link to='/todo'> <button className="home-buttons">ToDos</button></Link>
           <Link to='/login'> <button className="home-buttons">Login</button></Link>
        </div>
        </div>
        </>
    )
}


export default Home

