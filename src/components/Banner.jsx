import React from 'react'

import Image from '../assets/profile.png'
import {FaGithub, FaYoutube, FaDribbble, FaGit} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants' 

const Banner = () => {
  return (
    <section id='home' className=' flex items-center  lg:-mt-5 min-h-[85vh] lg:min-h-[78vh]'>
      <div className='container mx-auto flex flex-col lg:items-center'>

        <div className="flex flex-col  w-full gap-y-8 lg:flex-row lg:items-center lg:justify-between">

          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount:0.1 }}
            className='text-[50px] font-bold leading-[0.8] lg:text-[70px] lg:mb-4'>
              Ahmad <span>ilham B</span>
            </motion.h1>

            <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount:0.7 }}
            className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-1 '>
              <p className='lg:mb-2'>I am a</p>
              <TypeAnimation sequence={[
                'Front End Developer',
                2000,
                'UI/UX Designer',
                2000
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              ></TypeAnimation>
            </motion.div>

            <motion.p
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount:0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut libero esse quidem perferendis nulla iusto dignissimos nihil tempore dolore dolorum...</motion.p>

            <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount:0.7 }}
            className='flex gap-x-6 items-center mb-12 max-w-max mx-auto lg:mx-0 lg:mb-6'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>My Portofolio</a>
            </motion.div>

            {/* Social media */}
            <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount:0.7 }} className='flex lg:pl-3 mx-auto text-[20px] gap-x-6 max-w-max lg:mx-0'>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </motion.div>
          </div>

          <motion.div
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:false, amount:0.7 }} 
          className='hidden lg:flex lg:w-96 lg:h-96 font-secondary lg:text-left'>
            <img src={Image} alt="" className='mr-0' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner