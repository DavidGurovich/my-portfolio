import React from 'react';
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {FaGitAlt} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'




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
    
    <div className='bg-gray-700 h-screen w-screen relative' id='about'>
       
        <h1 className='text-7xl text-center font-bold'>About</h1>
        <div className='flex flex-col'>
            <div className=''>
              <h4> Bachelor's of Computer Science </h4>
              <h4> Oregon State University </h4>
              <p> GPA 3.5 </p>
              <ion-icon name="logo-html5"></ion-icon>
              
            </div>
            <div className='flex flex-wrap items-center justify-center gap-10'>
                {skills?.map((skill, i) => (
                    <div 
                    key={i}
                    className="text-gray-400 border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
                    >
                        <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                            {skill.logo}
                        </div>
                            
                        <p className='text-center'>{skill.title}</p>
                    </div>
                ))

                }
                
            </div>
           
        </div>
        
    </div>
  )
}

export default About