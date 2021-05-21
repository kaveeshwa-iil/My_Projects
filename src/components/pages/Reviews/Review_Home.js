import React from 'react';
import Review from './Review';
import './Reviews.css';
import { Link } from 'react-router-dom';

function Review_Home() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
      <div className="back-container">
    <Link to='/'> <button className="button-back">Back</button></Link>
    </div>
    </main>
  );
}

export default Review_Home;
