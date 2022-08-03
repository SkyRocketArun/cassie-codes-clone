import React from 'react'
import { useTheme } from "next-themes";
import SvgComponent from './svg/LightBulb'
import styled from 'styled-components';
const Banner = () => {
    const { theme, setTheme } = useTheme();
    return (
        <BannerSection className='content_section'>
            <div className={theme === "dark" ? 'bg dark' : 'bg light'}>
                <div className='container' >
                    <div className='main_box flex items-center'>
                        <div className='light_box'>
                            <SvgComponent />
                        </div>
                        <div className='content_section flex-1'>
                            <p className='font-Jenthill w-fit text-[30px] -rotate-12 text-[color:var(--P-D-color)] dark:text-[color:var(--P-L-color)]'>👋 Hi Im Delta</p>
                            <h1 className=' font-Mosk-Ultra-Bold text-[color:var(--P-D-color)] dark:text-[color:var(--P-L-color)]'>I like making <span className={theme === "dark" ? 'transparent dark' : 'transparent light'}>fun</span>, interactive things with code. I also <span className={theme === "dark" ? 'transparent dark' : 'transparent light'}>talk</span> & <span className={theme === "dark" ? 'transparent dark' : 'transparent light'}>write</span> about those things.</h1></div>
                    </div>
                </div>
            </div>
        </BannerSection>
    )
}

export default Banner
const BannerSection = styled.section`
    .main_box{
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    .light_box{
        flex:1;
        width: 100%;
        @media (max-width: 768px) {
            width:80%;
        }
    }
    
    .content_section{
        flex:1;
        width: 100%;
        @media (max-width: 768px) {
            padding-bottom:146px;
        }
    }
    .content_section h1{
        font-size: 48px;
    }
`
