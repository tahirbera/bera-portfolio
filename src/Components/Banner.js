import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { PiWebhooksLogo } from "react-icons/pi";

import { SiMysql } from "react-icons/si";





const Banner = () => {
  return (
    <div className='banner'>
        <div>
        <h2 className='upper-h2'>
            Hi my name is Tahir Bera
        </h2>
        <h2 className='bottom-h2'>
        I am Web Developer

        </h2>
        <div>
            <h2 className='history-h2'>
                Short History of Me:    
            </h2>
            <p className='history-p'>
                I born 10 Agust 1997. So, I'am 26 years old. I graduated Duzce University Computer Engineering Depertmant at May 2023.
                <br></br>
                When since that day, I try to be a good front-end web developer.
                <br></br>
                I am still making new projects to improve my knowledge.
                <br></br>
                Here are my skills;
                <br></br>
                <div className='skills-list'>
                 <ol>
                    <li>1. HTML <FaHtml5 />                    
                    </li>
                    <li>2. CSS <FaCss3Alt />
                    </li>
                    <li>3. JavaScript <IoLogoJavascript />
                    </li>
                    <li>4. React.JS <FaReact />
                    </li>
                    <li>4.1. Redux <SiRedux />
                    </li>
                    <li>4.2. React Hooks <PiWebhooksLogo />
                    </li>
                    <li>5. MySQL  <SiMysql />
                    </li>
                    <li>6. Next.JS  
                    </li>
                </ol>   
                
                
                </div>
            </p>
            
        </div>
       
        </div>
        
        
    </div>
  )
}

export default Banner