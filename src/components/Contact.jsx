import React from 'react'

const Contact = () => {

        const config ={
                email:'ramanannamalai2019@gmail.com',
                phone:'9344359597'
        }

  return (
<section  id='contact' className='flex flex-col md:flex-row bg-white px-5 py-32 text-gray-900 justify-center'>
        
        <div className='flex flex-col items-center'>
                <h1 className='pb-3 text-4xl text-gray-900 border-b-4 border-[#073b34] mb-5  w-[136px] font-bold'>Contact</h1>
                <p className='pb-4'>If you want to discuss more to contact me </p>
                <p className='py-2'><span className='font-bold'>Email :</span>{config.email}</p>
                <p className='py-2 -ml-36'><span className='font-bold'>Phone :</span>{config.phone}</p>
            </div>
        
    </section>
)
}

export default Contact