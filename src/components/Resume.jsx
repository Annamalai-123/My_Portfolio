import React from 'react'
import Resumeimg from '../assets/resume.png'

const Resume = () => {

    const config ={
        link:'https://jumpshare.com/s/TX6xDuHqCObzCH8TqwGw'
    }

  return (
<section id='resume' className='flex flex-col md:flex-row bg-primary px-5 py-20'>
        <div className='py-4 md:w-1/2 flex justify-center'>
            <img className='w-[250px]' src={Resumeimg} alt="resume_image" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='pb-4 text-4xl border-b-4 border-[#073b34] mb-5  w-[143px] font-bold'>RESUME</h1>
                <p className='pb-4 '>You can view my resume <br/><br/><a className='btn' target='_blank' href={config.link} >Download</a></p>
            </div>
        </div>
    </section>
)
}

export default Resume