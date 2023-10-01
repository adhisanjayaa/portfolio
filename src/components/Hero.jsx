import React from 'react'
import Marquee from "react-fast-marquee"
import { MotionAnimate } from 'react-motion-animate'
import background from '../assets/bg_hero.webp'

const Hero = () => {
  return (
    <div className='bg-fixed bg-top m-auto py-36 px-4 xl:px-16 h-screen w-full flex flex-col items-center justify-center gap-10 xl:gap-10 relative overflow-hidden text-primary'>
      <div style={{ backgroundImage: `url(${background})` }} className='xl:py-20 w-full h-full bg-cover bg-scroll bg-center rounded-[50px] text-secondary flex items-center justify-center'>
        <h1 className='text-5xl md:text-9xl xl:text-[200px] font-bold uppercase'>Portfolio</h1>
      </div>
      <h3 className='self-start text-base md:text-2xl xl:text-4xl xl:leading-tight font-thin uppercase'>
        Elevating Brands <br />
        Through Visual <br /> 
        Excellence.
      </h3>
      <div className='absolute bottom-16 left-0 w-full font-bold uppercase rotate-2 bg-primary text-secondary py-2'>
          <Marquee pauseOnClick>
            <h1 className='mx-6'>Logo Designer</h1>
            <h1 className='mx-6'>Graphic Designer</h1>
            <h1 className='mx-6'>UI/UX Designer</h1>
            <h1 className='mx-6'>Brand Designer</h1>
            <h1 className='mx-6'>Logo Designer</h1>
            <h1 className='mx-6'>Graphic Designer</h1>
            <h1 className='mx-6'>UI/UX Designer</h1>
            <h1 className='mx-6'>Brand Designer</h1>
            <h1 className='mx-6'>Logo Designer</h1>
            <h1 className='mx-6'>Graphic Designer</h1>
            <h1 className='mx-6'>UI/UX Designer</h1>
            <h1 className='mx-6'>Brand Designer</h1>
          </Marquee>
      </div>
    </div>
  )
}

export default Hero