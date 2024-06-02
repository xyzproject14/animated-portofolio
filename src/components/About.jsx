import React from 'react';
import AnimatedSection from './AnimatedSection';

import aboutimg from "../assets/aboutme.png"
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });
  return (
    <section className='section ' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='lg:flex lg:items-center'>
          {/* image */}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount:0.3 }}
          className='relative flex-1 flex justify-center mb-6'
          >
                <img className='bg-contain bg-no-repeat h-80 mix-blend-lighten bg-top lg:h-96' src={aboutimg} alt="" />
                {/* <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-transparent to-transparent"></div> */}

            {/* <img src={mypic} alt="" /> */}
          </motion.div>
          {/* text */}
          <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount:0.3 }}
          className='flex-1'>
            <h2 className='h2 font-bold text-accent text-center'>About me</h2>
            <h3 className='font-bold'>I am a freelancer with over 5 years experienc</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae libero fugit magnam laudantium quis id laboriosam ullam ad culpa!</p>

            {/* Experiences */}
            <div className='flex w-full justify-around my-5 mb-7'>
              <div>
                <div className='text-4xl font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3}/> : null}+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of<br />
                  experiences
                </div>
              </div>

              <div>
                <div className='text-4xl font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={20} duration={3}/> : null}+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects<br />
                  Completeds
                </div>
              </div>

              <div>
                <div className='text-4xl font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={8} duration={3}/> : null}+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied<br />
                  Clients
                </div>
              </div>

            </div>

            {/* button grup */}
            <div className='flex gap-x-8 items-center justify-center lg:justify-normal'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>My Projects</a>
            </div>
            
          </motion.div>
        </div>
      </div>

    </section>
  );
}

export default About;
