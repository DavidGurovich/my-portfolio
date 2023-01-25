import React, {useEffect} from 'react';
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {FaGitAlt} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import osulogo from '../images/osulogo.png';
import oregonlogo from '../images/osu-logo.png'


function About() {
    

    const skills = [
        {
            logo: <AiOutlineHtml5/>,
            title: "HTML",
        },
        {
            logo: <IoLogoCss3/>,
            title: "CSS",
        },
        {
            logo: <IoLogoJavascript/>,
            title: "JavaScript",
        },
        {
            logo: <FaReact/>,
            title: "ReactJS",
        },
        {
            logo: <FaGitAlt/>,
            title: "Git",
        },
    
    ]

  return (
    
    <div className='bg-neutral-900 w-full mb-20' id='about'>
       
        
        <div className='flex flex-col items-center justify-center gap-16'>
        <h1 className='text-5xl font-bold text-white inline border-b-4 border-red-600'>
             About</h1>
              <div className=' flex md:flex-row flex-col gap-5 '>
              
                <p className='text-gray-300 md:w-3/5 md:px-32 px-5 md:text-lg'>
                    Hello! I'm David Gurovich, <br /> <br />
                    Originally a Pre-Med student, I graduated from The Ohio State University
                    with a B.S. of Pharmaceutical Sciences. 
                    In my final year I began to explore software development, fast-forward
                    to today, I'm a Computer Science student at Oregon State University. 
                    My courses have focused on Data Structures, Algorithms, Computer Architecture, 
                    and most importantly, collaborations with others through git and task management systems.
                    <br /> <br />Although it was a drastic career change, software development is where I belong and I haven't looked back.
                </p>
                <div className='flex items-center justify-center md:w-2/5 pr-12'>
                  <img src={osulogo} alt="Ohio State Logo" width={250}/>
                  <img src={oregonlogo} alt="Oregon State Logo" width={148}/>
              </div>
              </div>
              
        </div>
            
            <div className='flex flex-wrap items-center justify-center gap-10 mt-20'>
                {skills?.map((skill, i) => (
                    <div 
                    key={i}
                    className="text-gray-400 border-2 group border-red-600 min-w-[10rem] max-w-[16rem] p-10 rounded-2xl"
                    >
                        <div className="text-6xl w-28 h-28 rounded-full flex items-center justify-center group-hover:text-red-600">
                            {skill.logo}
                        </div> 
                        <p className='md:text-2xl text-lg text-center'>{skill.title}</p>
                    </div>
                ))}
                
            </div>
           
       
        
    </div>
  )
}

export default About