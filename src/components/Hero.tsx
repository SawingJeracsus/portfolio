import React, { useEffect, useState } from 'react'
import '../styles/hero.css'

//Importing of images

import dockerIMG from '../assets/docker-logo.png'
import mysqlIMG from '../assets/mysql-logo.png'
import nodeIMG from '../assets/nodejs-logo.png'
import pythonIMG from '../assets/python-logo.svg'
import reactIMG from '../assets/react-logo.png'
import reduxIMG from '../assets/redux-logo.png'
import telegramIMG from '../assets/telegram-logo.png'
import tsIMG from '../assets/ts-logo.png'

//End of importing images

const imagesARR = [
    dockerIMG,
    mysqlIMG,
    nodeIMG,
    pythonIMG,
    reactIMG,
    reduxIMG,
    telegramIMG,
    tsIMG,
]

const SkillBlock: React.FC<{img: string, id: number}> = ({img, id}) => {
    
    return(
        <div className={"skill-block skill-block-"+id}>
            <img src={img} alt="skill block"/>
        </div>
    )
}

export const Hero: React.FC = ({}) => {
    return(
        <div className="hero">
            <div className="hero-body">
                <h1 className="hero-title">Andriy Polishchuk </h1>
                <h1 className="hero-title">portfolio</h1>
                <h3 className="hero-subtitle">scroll down for more info</h3>
            </div>
            <div className="skills-wrapper">
                {imagesARR.map((img, i) => <SkillBlock img={img} key={'skill-key-'+i} id={i+1}/>)}
            </div>
        </div>
    )
}