import React from 'react'
import logo from '../assets/logo_plus.png'
import thumbnail from '../assets/tshirt.png'
import Button from './Button'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { MotionAnimate } from 'react-motion-animate'


const Highlight = () => {
  return(
    <div className='m-auto top-0 py-14 px-4 xl:px-16 h-screen w-full flex flex-col justify-between'>
      <div className='self-end'>
        <img src={logo} alt="" className='h-[40px] xl:h-[80px]'/> 
      </div>
      <div className='h-full flex items-center justify-center relative'>
        <MotionAnimate reset={true} animation={'fadeInUp'}>
          <img src={thumbnail} alt="" className='justify-self-center h-[300px] md:h-[560px] xl:h-[646px] z-50' />
        </MotionAnimate>
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-center text-9xl leading-[88px] md:text-[260px] md:leading-[180px] xl:text-[330px] xl:leading-[220px] font-cormorant font-extralight uppercase'>Plus<br/>enam<br/>dua</h1>
      </div>
      <div className='row-span-2 justify-between flex'>
        <p className='text-xs md:text-xl xl:text-2xl w-[45%] xl:w-[25%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas sagittis dignissim.</p>
        <div>
          <Button text1="See Project" svg1={<AiOutlineArrowRight className='h-4' />}  text2='See Project' svg2={<AiOutlineArrowRight className='h-4' />} />
        </div>
      </div>
    </div>
  )
}

export default Highlight;