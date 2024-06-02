import React from 'react';

import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

const services = [
  {
    role: 'UI/UX Designer',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius aperiam sint quas illo quaerat quos error fugiat repellat officiis aliquid.',
    link: 'view more'
  },
  {
    role: 'Front End Developer',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius aperiam sint quas illo quaerat quos error fugiat repellat officiis aliquid.',
    link: 'view more'
  },
  {
    role: 'Graphic Designer',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius aperiam sint quas illo quaerat quos error fugiat repellat officiis aliquid.',
    link: 'view more'
  }
]
const Services = () => {
  return (

    <div id="services" className="section">
      <div className="container mx-auto">
        <div className='gap-y-4 flex flex-col lg:flex-row lg:items-center'>
          <motion.div 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:false, amount: 0.7 }}
          className='bg-contain bg-services bg-no-repeat h-96 mix-blend-lighten'>
            <motion.h2
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.7 }}
            className='font-teritary uppercase h2 font-bold text-accent'>What i do</motion.h2>
            <motion.h3
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.7 }}
            className='h3'>I'm Freelance Front End Developer with 3 Years Experience</motion.h3>
            <motion.button
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.7 }}
            className='btn btn-sm'>View my work</motion.button>
          </motion.div>

          {/* Text */}
          <div className='flex flex-col'>
            {services.map((service, index) => {
              const {role, description, link} = service;
              return (
              <motion.div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount:0.7 }}
               key={index}
               className='border-b mb-6 pb-2 border-white/50'>
                <div className='flex justify-between items-center mb-2'>
                  <h3 className='font-bold text-xl font-primary'>{role}</h3>
                  <a href="#" className='btn px-6 py-1 flex items-center gap-x-2'>
                    <span>More</span>
                    <button><BsArrowUpRight /></button>
                  </a>
                </div>
                <div>
                  <p>{description}</p>

                </div>
                <p></p>
              </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
