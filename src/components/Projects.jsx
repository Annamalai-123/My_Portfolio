import React from 'react'
import ecommerceImg from '../assets/e-commerce.jpg'
import foodcommerceImg from '../assets/food-crud.png'
import nextstepImg from '../assets/next_step.jpeg'


const Projects = () => {
  const config = {
    projects : [
        {
            image: ecommerceImg,
            description: 'A Inventory Website. Built with MERN Stack.',
            link: 'https://github.com/Annamalai-123/Inventory_App'
        },
        {
            image: foodcommerceImg,
            description: 'CRUD post managing app built in react',
            link: 'https://github.com/Annamalai-123/Crud-post-app'
        },
        {
            image: nextstepImg,
            description: 'goal acheiving Website . Built with MERN STACK with Authentication',
            link: ''
        }
    ]
}


return (
<section id='projects' className="flex  flex-col py-20 px-5 justify-center text-white">
<div className="w-full">
    <div className="flex flex-col px-10 py-5">
        <h1 className="text-4xl border-b-4 border-[#073b34] mb-8 w-[136px] font-bold text-gray-800">Projects</h1>
        <p className='text-gray-800'>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
    </div>
</div>
<div className="w-full">
    <div className='flex flex-col md:flex-row px-10 gap-8'>
        {config.projects.map((project) => (
             <div className='relative'>
                <img className='h-[200px] w-[500px]' src={project.image}/>
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'>{project.description}</p>
                    <div className='flex justify-center'>
                        <div className='py-2'><a className='btn' target='_blank' href={project.link}>View Project</a></div>
                    </div>
                </div>
            </div>
        ))}
       
       
    </div>
</div>
</section>
)
}
  
export default Projects
