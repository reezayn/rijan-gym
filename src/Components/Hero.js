import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../Assets/HeroBanner1.jpg'
import './Styles/Hero.css'
import Stop from '../Assets/Stop.png'

const Hero = () => {
  return (
      <div id='hero' className="hero-container h-screen w-full relative  text-white">
        <img className='h-full w-full object-cover absolute' src={banner} alt="bannererr" />
        <div className="hero-contents flex flex-col min-w-[100vw] absolute justify-center items-center top-32 md:items-start md:top-32 md:left-12">
          <div className='div-1 text-[18px] md:text-[21px] lg:text-[23px]'>SHAPE YOUR BODY</div>
          <div className='div-2 text-[40px] md:text-[55px] lg:text-[65px]'>BE <span className='text-red-600'>STRONG</span></div>
          <div className='div-2 text-[40px] md:text-[55px] lg:text-[65px] mb-[15px]'>TRAIN HARD</div>
          <button className='btn flex justify-center items-center p-1 m-1 w-[125px] h-[46px] lg:w-[150px] lg:text-[18px] lg:h-[50px] '><Link to='/exercises'>EXERCISES</Link></button>
        </div>
        <div className="desc flex flex-col absolute top-[500px] min-w-full justify-center items-center md:hidden ">
          <div className="description absolute  w-[350px]">
            <h3 className='text-center text-[23px]'>SITE UNDER <span className='text-red-400'>CONSTRUCTION</span></h3>
            <div className='flex flex-row'>
              <img className='h-[140px]' src={Stop} alt="stoperr" />
              <p>This is a prototpye of my gym website. For now it contains all exercises for all body parts, so you can use this site as your gym refrence. Check out exercises page for it.</p>
            </div> 
          </div>
        </div>
        <div className='hidden md:flex min-w-full absolute]'>
        <div className="description absolute top-[150px] right-[30px] w-[350px] lg:top-[140px] lg:right-[70px] lg:w-[400px]">
            <h3 className='text-center text-[23px] lg:text-[28px]'>SITE UNDER <span className='text-red-400'>CONSTRUCTION</span></h3>
            <div className='flex flex-row'>
              <img className='h-[140px] lg:h-[160px]' src={Stop} alt="stoperr" />
              <p className='lg:text-[18px]'>This is a prototpye of my gym website. For now it contains all exercises for all body parts, so you can use this site as your gym refrence. Check out exercises page for it.</p>
            </div> 
          </div>
        </div>
        
      </div>
  )
}

export default Hero