import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"
import { FaArrowRight } from 'react-icons/fa'


const Services = () => {
    return (
        <motion.div 
         initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        {/* <div id='services' className='w-full px-[12%] py-10 scroll-mt-20 bg-white dark:bg-[#11001F]'> */}
            <motion.h4 
             initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            className='text-center mb-2 text-lg font-Ovo'>
                What I Offer
            </motion.h4>
            <motion.h2
            initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
             className='text-center text-5xl font-Ovo'>My Services</motion.h2>
            <motion.p 
            initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>We offer complete apparel manufacturing solutions, including custom clothing, sublimation printing, embroidery, DTG/DTF, screen printing, and cut & sew services all with premium quality and worldwide shipping to bring your vision to life.
            </motion.p>
            <motion.div 
            initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            className='grid grid-cols-4 gap-6 my-8 grid-auto'>
    {serviceData.map(({ image, title, description, link }, index) => (
  <motion.div 
    whileHover={{ scale: 1.05 }} 
    key={index} 
    className='border  border-gray-300 dark:shadow-gray-800 dark:hover:bg-gray-900 rounded-xl overflow-hidden cursor-pointer ease-in-out hover:shadow-md hover:shadow-gray-400 hover:scale-[0.98] flex flex-col'
  >
    {/* Image Section */}
    <div className="w-full h-48 relative">
      <Image 
        src={image} 
        alt={title} 
        fill
        className="object-cover rounded-t-xl"
      />
    </div>

    {/* Content Section */}
    <div className="p-6 flex flex-col flex-1">
      <h3 className='text-lg mb-3 font-semibold'>{title}</h3>
      <p className='text-sm leading-5 text-gray-600 dark:text-gray-400 flex-1'>
        {description}
      </p>
      <a 
  href='#products' 
  className='flex items-center gap-2 text-m mt-5 text-green-600 dark:text-green-400 hover:underline'
>
  Explore Our Collection <FaArrowRight />
</a>

    </div>
  </motion.div>
))}



            </motion.div>
        </motion.div>
    );
}

export default Services;
