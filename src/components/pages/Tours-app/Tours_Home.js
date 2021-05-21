import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import './Tours_Home.css';
import { Link } from 'react-router-dom';

const url = 'https://course-api.com/react-tours-project'

function Tour_Home() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <>
      <main>
        <Loading />
      
      <div className="back-container">
      <Link to='/'> <button className="button-back">Back</button></Link>
      </div>
      </main>
      </>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
        <div className="back-container">
      <Link to='/'> <button className="button-back">Back</button></Link>
      </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
      <div className="back-container">
      <Link to='/'> <button className="button-back">Back</button></Link>
      </div>
    </main>
  )
}

export default Tour_Home
