import React from 'react'

const MainProject = ({ title, thumbnail, year }) => {
  return (
    <div className=''>
      <div className='aspect-9/16 md:aspect-square overflow-hidden rounded-3xl'>
        <img className='w-full h-full hover:scale-105 transition duration-500 cursor-pointer object-cover' src={require(`../assets/${thumbnail}`)} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default MainProject