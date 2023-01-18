import React from 'react';
import reactLogo from '../images/reactlogo.png';
import javaScriptLogo from '../images/jslogo.png';
import htmlLogo from '../images/htmllogo.png';
import gitLogo from '../images/gitlogo.png';
import cssLogo from '../images/csslogo.png';

const skills = [
    {
        logo: htmlLogo,
        title: "HTML"
    },
    {
        logo: cssLogo,
        title: "CSS"
    },
    {
        logo: javaScriptLogo,
        title: "JavaScript"
    },
    {
        logo: reactLogo,
        title: "ReactJS"
    },
    {
        logo: gitLogo,
        title: "Git"
    },

]


function About() {
  return (
    <div className='bg-gray-700 h-screen w-screen relative' id='about'>
        <h1 className='text-7xl text-center font-bold'>About</h1>
        <div className='flex flex-col'>
            <div className=''>
              <h4> Bachelor's of Computer Science </h4>
              <h4> Oregon State University </h4>
              <p> GPA 3.5 </p>

            </div>
            <div className='flex flex-wrap items-center'>
                {/* <div className='text-center'>
                    <img src={reactLogo} width={85}/>
                    <p>React</p>
                </div>
                <div className='text-center'>
                    <img src={javaScriptLogo} width={85}/>
                    <p>JavaScript</p>
                </div >
                <div className='text-center'>
                    <img src={gitLogo} width={85}/>
                    <p>Git</p>
                </div>
                <div className='text-center'>
                    <img src={cssLogo} width={85}/>
                    <p>CSS</p>
                </div>
                <div className='text-center'>
                    <img src={htmlLogo} width={85}/>
                    <p>HTML</p> */}
                {/* </div> */}
            </div>
           
        </div>
        
    </div>
  )
}

export default About