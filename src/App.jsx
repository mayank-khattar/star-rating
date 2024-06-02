import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './App.css'

function App() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  function onMouseLeaveHandler() {
    setRating(rating)
  }

  function onMouseMoveHandler(currentIndex) {
    setHover(currentIndex)
  }

  function onClickHandler(currentIndex) {
    setRating(currentIndex)
  }

  return (
    <>
      <div className='star-rating'>
        {
          [...Array(5)].map((_, index)=> {
            index +=1
            return <FaStar 
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            key={index} 
            onMouseMove={() => onMouseMoveHandler(index)} 
            onMouseLeave={() => onMouseLeaveHandler} 
            onClick={() => onClickHandler(index)} 
            size={40}
            />;
          })
        }
      </div>
    </>
  )
}

export default App
