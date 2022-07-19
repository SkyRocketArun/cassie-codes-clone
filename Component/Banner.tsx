import React from 'react'
import { useTheme } from "next-themes";
import SvgComponent from './SvgComponent'
const Banner = () => {
    const { theme, setTheme } = useTheme();

    return (
        <section>
            <div className={theme === "dark" ? 'bg dark' : 'bg light'}>
                <div className='container' >
                    <div className='flex items-center'>
                        <div className='w-[680px]'>
                            {/* <img src="/cartoon.svg" alt="Logo" /> */}
                            <SvgComponent />
                        </div>
                        <div className='flex-1'>
                            <p className='font-Jenthill w-fit text-[30px] -rotate-12 text-[color:var(--P-D-color)] dark:text-[color:var(--P-L-color)]'>👋 Hi Im Delta</p>
                            <h1 className='font-Mosk-Ultra-Bold text-[color:var(--P-D-color)] dark:text-[color:var(--P-L-color)]'>I like making <span className={theme === "dark" ? 'transparent dark' : 'transparent light'}>fun</span>, interactive things with code. I also <span className={theme === "dark" ? 'transparent dark' : 'transparent light'}>talk</span> & <span className={theme === "dark" ? 'transparent dark' : 'transparent light'}>write</span> about those things.</h1></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
