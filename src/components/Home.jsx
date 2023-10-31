import React, {useEffect} from 'react'
import {motion} from 'framer-motion';
import {TypeAnimation} from 'react-type-animation'; 
import { fadeIn } from '../fade.js'
import {CgFileDocument} from 'react-icons/cg'
//icons

import {HiChevronDoubleDown, HiMail} from 'react-icons/hi';
import {SiGithub, SiLinkedin} from 'react-icons/si';
import {GiBlackBook} from 'react-icons/gi';
import {BiPaint} from 'react-icons/bi';



function Home() {

  
  
  return (
   
    <section 
    id='home'
    className='min-h-[85vh] h-screen flex items-center'
    >
      <div className='container mx-auto'>
          <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
              <div className='flex-1 text-center font-secondary lg:text-center'>
                  <motion.h1
                  className='text-[50px] font-bold leading-[0.8] lg:text-[110px] text-red-700'
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.7}}
                  variants={fadeIn('up', 0.3)}>
                      David Gurovich
                  </motion.h1>
                  <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='mb-6 text-[36px] lg:text-[60px] font-secondary 
                    font-semibold uppercase leading-[1] text-red-700 mt-6'
                    >
                        <span className='text-white mr-4'>I am a</span>
                        <TypeAnimation
                          sequence={[
                            'Software Developer.',
                            2000,
                            'Computer Science Graduate.',
                            2000,
                          ]}
                          speed={50}
                          className='text-accent '
                          wrapper='span'
                          repeat={Infinity}/>
                  </motion.div>
                  <motion.div
                  variants={fadeIn('up', 0.6)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
                  className='flex max-w-max gap-x-6 items-center mb-12 mx-auto'
                  >
                    <a className='text-white flex flex-row items-center justify-center gap-2 border-2 px-4 mt-6 py-2 rounded-lg hover:border-red-600 ' target= "_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1L9nIFawwNvmaubYv86krGduE1Wd4G0iK/view?usp=sharing'>
                   <CgFileDocument/>
                   Resume
                    </a>
                  </motion.div>

                  <motion.div
                    variants={fadeIn('up', 0.7)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='flex text-[25px] gap-x-8 max-w-max mx-auto pt-6 text-white'
                  >
                        <a target = "_blank" rel="noopener noreferrer" href="https://github.com/DavidGurovich" className='hover:text-red-600' >
                          <SiGithub/>
                        </a>
                        <a target= "_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/davidgurovich98/' className='hover:text-red-600'>
                          <SiLinkedin/>
                        </a>
                        <a target= "_blank" rel="noopener noreferrer" href='mailto: david.gurovich@outlook.com' className='hover:text-red-600'>   
                          <HiMail/>
                        </a>
                  </motion.div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Home