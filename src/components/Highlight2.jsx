import React from 'react'
import logo from '../assets/logo_plus.png'
import thumbnail from '../assets/PACK2.png'
import Button from './Button'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { MotionAnimate } from 'react-motion-animate'


const Highlight2 = () => {
  return(
    <div className='m-auto top-0 py-14 px-4 xl:px-16 h-screen w-full flex flex-col justify-between'>
      <div className='self-end'>
        <img src={logo} alt="" className='h-[40px] md:h-[60px] xl:h-[80px]'/> 
      </div>
      <div className='h-full flex items-end justify-end relative'>
        <MotionAnimate reset={true} animation={'fadeInUp'}>
          <img src={thumbnail} alt="" className='mb-24 md:mb-0 top-1/3 w-full h-[300px] md:h-[560px] xl:h-[646px]' />
        </MotionAnimate>
        <h1 className='absolute top-1/3 md:top-1/2 left-0 transform -translate-y-1/2 -z-10 text-8xl leading-[68px] md:text-[200px] md:leading-[140px] xl:text-[240px] xl:leading-[180px] font-cormorant font-extralight uppercase'>Shop,<br/>Love,<br/>Repeat</h1>
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

export default Highlight2;