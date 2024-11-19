import React from 'react'
import './CardComponent.css'
import './task2card.webp'
function CardComponent() {
  return (
    
    <div className="container">
      
        <div className="card">
            <img src="https://i0.wp.com/www.asklabourproblem.com/wp-content/uploads/2017/06/IT-Industry-9-5-17.png?fit=500%2C344" alt='image' className='card-image'/>
            <div className="content">
              <h2 className='title'>Secrolis</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quae!</p>
              <button className='card-button'>Learn More</button>
            </div>
          </div>
    </div>
  
  )
}

export default CardComponent