import React, { useState, useEffect } from 'react'

import styled from 'styled-components';
import GsapTest from '../svg/MousePointSvg';
import Link from 'next/link'
import Lottie from 'react-lottie';
import Celebration from '../../Assests/Animations/Celebration.json'

const Footer = () => {
    const [isPaused, setIsPaused] = useState(false)
    const [isStopped, setIsStopped] = useState(false)
    useEffect(() => {
        setIsStopped(true)
    }, [])
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: Celebration,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <FooterSection className="Footer bg-[#71ddbd] dark:bg-[#774069]" >
            <div className='container svg_box'>
                <div className='main_section bg-[#fff] dark:bg-[#2c2c2c]'>
                    <div>
                        <h1 className='font-Mosk-Ultra-Bold text-[color:var(--P-D-color)] dark:text-[color:var(--P-L-color)]'>Hey there!</h1>
                        {/* <Link href='mailto:arun7807224868@gmail.com'> */}
                        <a className='text-[22px] cursor-pointer relative z-50'
                        // onClick={Control}
                        >Ping me a Message </a>
                        {/* </Link> */}
                    </div>
                    <div className='mouse_pointer'>
                        <GsapTest />
                    </div>
                </div>
            </div>

            <div className='animation' >
                <Lottie options={defaultOptions}
                    // height={400}
                    // width={600}
                    isStopped={isStopped}
                    isPaused={isPaused}
                />
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
.svg_box{
    z-index: 999999;
    position: relative;
}

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
    z-index:1;
}
`