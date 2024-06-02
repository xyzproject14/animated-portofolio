// import React, { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion'
import {fadeIn} from '../variants'
import React, {useEffect} from 'react'

import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'
import { Description } from '@headlessui/react';

const pageComponent = () => {
  
}
const projects = [
  {
    title: 'Webgis Pemetaan Desa Benteng Gajah',
    role: 'Front End Developer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, inventore ab? Sed voluptatibus impedit tempora?',
    link: 'link',
    img: img1
  },
  {
    title: 'Emotional Fest 2023',
    role: 'Graphic Designer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, inventore ab? Sed voluptatibus impedit tempora?',
    link: 'link',
    img: img2
  },
  {
    title: 'Wedding Invitation',
    role: 'UI/UX Designer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, inventore ab? Sed voluptatibus impedit tempora?',
    link: 'link',
    img: img3
  },
  {
    title: 'Absensi Pegawai',
    role: 'Front End Developer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, inventore ab? Sed voluptatibus impedit tempora?',
    link: 'link',
    img: img1
  }
]
const Projects = () => {

  const control = useAnimation();

  useEffect(() => {
    control.start('show')
  }, [control])

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <motion.h2 
        variants={fadeIn('down', 0.6)}
        initial='hidden'
        animate={control}
        className='h2 text-accent font-primary font-bold text-center '>My Projects</motion.h2>
        <div className="flex flex-col relative lg:grid lg:grid-cols-2 gap-x-6">
          {projects.map((project, index) => {
            const {title, role, description, link, img} = project;
            return (
              <motion.a
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once:false, amount: 0.7 }}
              href="#"
              className='mb-6 border hover:cursor-pointer border-white/50 relative rounded-xl group overflow-hidden lg:h-60'>
                <div className="absolute w-full h-full top-0 group-hover:bg-black/40 z-30 transition-all duration-300"></div>
                <img className='relative top-0 group-hover:scale-125 transition-all duration-500' src={img} alt="" />
                <h3 className='group-hover:bottom-20 absolute transition-all duration-500 -bottom-full z-40 left-4'>{title}</h3>
                <h4 className='group-hover:bottom-14 absolute -bottom-full z-40 transition-all duration-700 left-4 text-gradient font-bold'>{role}</h4>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects