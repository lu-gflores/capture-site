import React from 'react'
import home1 from '../img/home1.png'
import {About, Description, Image, Hide} from '../styles'
//framer motion
import { motion } from 'framer-motion'


const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div className="title">
                
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2>your <span>dreams</span> come</motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                    <p>Contact us for any photography or videos ideas that you have. We have professionals with awesome skills!</p>
                    <button>Contact Us</button>
                </motion.div>
            </Description>
            <Image>
                <img src={home1} alt="man with a camera"/>
            </Image>
        </About>
    )
}


export default AboutSection
