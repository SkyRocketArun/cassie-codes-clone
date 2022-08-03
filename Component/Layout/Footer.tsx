import React, { useState, useRef } from 'react'

import styled from 'styled-components';
import GsapTest from '../svg/MousePointSvg';
import Link from 'next/link'
// import Lottie from "lottie-react";
// import Celebration from "../../Assests/Animations/Celebration.json";
import Lottie from 'react-lottie';
import * as Celebration from '../../Assests/Animations/Celebration.json'

const Footer = () => {


    const lottieRef = useRef<any>(null)
    console.log('+++++++++++', lottieRef.current)
    const Control = () => {
        console.log('check play ')
        console.log('chchchchch', lottieRef.current)
        lottieRef.current?.play(true);
        setTimeout(PauseSvg, 3000);
    }
    const PauseSvg = () => {
        console.log('check pause ')
        console.log('chchchchch', lottieRef.current)
        lottieRef.current?.pause(false);
    }

    return (
        <FooterSection className="Footer bg-[#71ddbd] dark:bg-[#774069]" >
            <div className='container'>
                <div className='main_section bg-[#fff] dark:bg-[#2c2c2c]'>
                    <div>
                        <h1 className='font-Mosk-Ultra-Bold text-[color:var(--P-D-color)] dark:text-[color:var(--P-L-color)]'>Hey there!</h1>
                        {/* <Link href='mailto:arun7807224868@gmail.com'> */}
                        <a className='text-[22px] cursor-pointer relative z-50' onClick={Control}>Ping me a Message </a>
                        {/* </Link> */}
                    </div>
                    <div className='mouse_pointer'>
                        <GsapTest />
                    </div>
                </div>
            </div>

            <div className='animation' >
                <Lottie options={{
                    loop: false,
                    autoplay: false,
                    animationData: Celebration,
                }} ref={lottieRef} />
            </div>
        </FooterSection>
    )
}
export default Footer
const FooterSection = styled.section`
    position: sticky;
    height: 100vh;
    bottom: 0px;
    z-index: 1;

    display: flex;
    justify-content: center;
    flex-direction: column;
.main_section {
  width: 100%;
  height: 500px;

  align-items: center;
  justify-content: space-around;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
.mouse_pointer {
  width: 50%;
}
.animation {
    position: fixed;
    bottom: 0px;
    height: 100vh;
    width: 100%;
}
`