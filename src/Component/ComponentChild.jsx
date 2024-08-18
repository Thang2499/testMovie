import React from 'react'

const ComponentChild = ({items,onClick}) => {
  const { movieName, description, image, episode } = items;
  return (
    <div className='width-child img-containers'>
      <div onClick={onClick} >
       <img className='img-child' src={image} alt=""  />
       <div className='text-white position-child'>Episode {episode}</div>
       <h2 className='text-white '>{movieName}</h2>

      </div>
    </div>
  )
}

export default ComponentChild