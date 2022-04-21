import React from 'react'

const Rating = ({stars, reviews}) => {
  return (
      <div className='rating'>
        <span>
            <i style={{color : '#f8e825'}} className={
                stars >= 1 ? 'fas fa-star' 
                : stars >= 0.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }></i>
        </span>
        <span>
            <i style={{color : '#f8e825'}} className={
                stars >= 2 ? 'fas fa-star' 
                : stars >= 1.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }></i>
        </span>
        <span>
            <i style={{color : '#f8e825'}} className={
                stars >= 3 ? 'fas fa-star' 
                : stars >= 2.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }></i>
        </span>
        <span>
            <i style={{color : '#f8e825'}} className={
                stars >= 4 ? 'fas fa-star' 
                : stars >= 4.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }></i>
        </span>
        <span>
            <i style={{color : '#f8e825'}} className={
                stars >= 5 ? 'fas fa-star' 
                : stars >= 4.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }></i>
        </span>
        <span>{reviews && reviews}</span>
      </div>
  )
}

export default Rating