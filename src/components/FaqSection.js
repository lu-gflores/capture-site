import React, {useState} from 'react'
import styled from 'styled-components'
import {About } from '../styles'
import Toggle from './Toggle'
const FaqSection = () => {


    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <Toggle title='How Do I Start?'>
    
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, expedita distinctio.</p>
                </div>           
          
            </Toggle>

            <Toggle title='Daily Schedule'>
                
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, expedita distinctio.</p>
                    </div>
                
            </Toggle>

            <Toggle title='Different Payment Methods'>
                
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, expedita distinctio.</p>
                    </div>    
                
            </Toggle>
            
            <Toggle title='What Products Do You Offer>'>
                 
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, expedita distinctio.</p>
                </div>
            
            </Toggle>
        </Faq>
    )
}
const Faq = styled(About)`
display: block;
span {
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0 rem;
    p{
        padding: 1rem 0rem;
    }
}

`;
export default FaqSection
