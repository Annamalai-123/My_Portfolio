import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {
  const config = {
    line1:"Hi, i'm a full stack web Developer and i have experiance in creating websites and Data Engineer with hands on experiance",
    line2:'the tools and programming languages which i know for development such as html,css,js,react,nodejs,expressjs,sql,mongodb',
    line3:'the tools and languages which i use for data engineering such as python,sql,statistic etc'
  }
  return (
    <section className='flex flex-col md:flex-row bg-primary px-5' id='about'>
        <div className='py-4 md:w-1/2'>
            <img src={AboutImg} alt="about_image" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='pb-4 text-4xl border-b-4 border-[#073b34] mb-5  w-[170px] font-bold'>About Me</h1>
                <p className='pb-4'>{config.line1}</p>
                <p className='pb-4'>{config.line2}</p>
                <p className='pb-4'>{config.line3}</p>

            </div>
        </div>
    </section>
  )
}

export default About