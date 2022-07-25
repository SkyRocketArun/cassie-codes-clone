import Link from 'next/link'
import React from 'react'
import Icon from '../MouseSvgComponent'
import GsapTest from './MousePoint'


const Footer = () => {
    return (
        <div className="Footer">
            <div className='container'>
                <div className='main_section'>
                    <div>
                        <h1 className='font-Mosk-Ultra-Bold text-[color:var(--P-D-color)] dark:text-[color:var(--P-L-color)]'>Hey there!</h1>
                    </div>
                    <div className='mouse_pointer'>
                        <Icon />
                        <Link href='/gsap'>
                            Mouse Tracker
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer