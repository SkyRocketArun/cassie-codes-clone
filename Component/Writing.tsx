import React, { useRef } from 'react'
import { motion } from "framer-motion";
import { GoPrimitiveDot } from 'react-icons/go'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link';

const Writing = () => {
    const constraintsRef = useRef(null);
    return (
        <section className="writing_section content_section">
            <div className="container">
                <motion.div className="drag_container" ref={constraintsRef}>
                    <h1 className='font-Mosk-Ultra-Bold text-[color:var(--P-D-color)] dark:text-[color:var(--P-L-color)]'>Writing.</h1>
                    <motion.div className="items item1" drag dragConstraints={constraintsRef} style={{ background: "#4e3668" }}>
                        <div className="dot_section"><GoPrimitiveDot /><GoPrimitiveDot /><GoPrimitiveDot /></div>
                        <div className="box_content">
                            <h2>The many ways to change an  SVG fill on hover</h2>
                            <p>How do you go about adding a colored hover effect to an icon if it’s not an inline SVG? Let’s dive into what’s possible with CSS and SVG filters. </p>
                            <div className="btns">
                                <Link href='#'>
                                    CSS tricks
                                </Link>
                                <Link href='#'>
                                    <a>Read post <BsArrowRight /></a>
                                </Link>

                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="items item2" drag dragConstraints={constraintsRef} style={{ background: "#4e3668" }} >
                        <div className="dot_section"><GoPrimitiveDot /><GoPrimitiveDot /><GoPrimitiveDot /></div>
                        <div className="box_content">
                            <h2 className="underline_line">The many ways to change an  SVG fill on hover</h2>
                            <p>How do you go about adding a colored hover effect to an icon if it’s not an inline SVG? Let’s dive into what’s possible with CSS and SVG filters. </p>
                            <div className="btns">
                                <Link href='#'>
                                    CSS tricks
                                </Link>
                                <Link href='#'>
                                    <a>Read post <BsArrowRight /></a>
                                </Link>

                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="items item3" drag dragConstraints={constraintsRef} style={{ background: "#4e3668" }} >
                        <div className="dot_section"><GoPrimitiveDot /><GoPrimitiveDot /><GoPrimitiveDot /></div>
                        <div className="box_content">
                            <h2>The many ways to change an  SVG fill on hover</h2>
                            <p>How do you go about adding a colored hover effect to an icon if it’s not an inline SVG? Let’s dive into what’s possible with CSS and SVG filters. </p>
                            <div className="btns">
                                <Link href='#'>
                                    CSS tricks
                                </Link>
                                <Link href='#'>
                                    <a>Read post <BsArrowRight /></a>
                                </Link>

                            </div>
                        </div>
                    </motion.div>
                    <button className="write_button">visit my blog...</button>
                </motion.div>
            </div>
        </section>

    )
}
export default Writing
