import React from 'react'
import HeroImg from '../assets/hero.png'
import { GrLinkedin  } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";




const Hero = () => {

  const config = {
      subtitle:"I'm a Full Stack Developer and Data Engineer",
      social: {
        linkedin:'https://www.linkedin.com/in/annamalai-r123/',
        instagram:'',
        github:'https://github.com/Annamalai-123'
      }
  }



  return (
    <section className='flex flex-col md:flex-row px-5 py-32 justify-center'>
       <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-gray-800 text-5xl font-hero-font'>Hi,<br/> I'm Annamalai  <span className='text-red-700'>R</span>
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
          <a href={config.social.linkedin} className='pr-5 transition-transform duration-200 hover:scale-110 hover:text-[#127BB6] hover:shadow-[0_0_10px_#127BB6]'><GrLinkedin size={40} color='#0A66C2' /></a>
          <a href={config.social.instagram} className='pr-5 transition-transform duration-200 hover:scale-110 hover:text-[#FF6E96] hover:shadow-[0_0_10px_#FF6E96]'><FaInstagram size={40} color='#E4405F' /></a>
          <a href={config.social.github} className='pr-5 className="pr-5 transition-transform duration-200 hover:scale-110 hover:text-[#6e5494] hover:shadow-[0_0_10px_#6e5494]'><ImGithub size={40} /></a>
        </div>
        </div>
        <img className="md:w-1/3" src={HeroImg} alt='Annamalai photo'/>
</section>
 )
}

export default Hero