import React from 'react';
import reactLogo from '../images/reactlogo.png';
import javaScriptLogo from '../images/jslogo.png';
import htmlLogo from '../images/htmllogo.png';
import gitLogo from '../images/gitlogo.png';
import cssLogo from '../images/csslogo.png';

function About() {
  return (
    <div className='h-screen w-screen' id='about'>
        <h1 className='text-7xl text-center font-bold'>About</h1>
        <div className='flex flex-row'>
            <div className=''>
              <p className='text-2xl'> 
              Originally a Pharmaceutical Sciences graduate, I'm a Computer Science 
              student with a passion for w
              </p>   
            </div>
            <div className='flex flex-grid justify-center items-center'>
                <div className='text-center'>
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
                    <p>HTML</p>
                </div>
            </div>
           
        </div>
        
    </div>
  )
}

export default About