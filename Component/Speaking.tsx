import React from 'react'
import Link from 'next/link'
const Speaking = () => {
    return (
        <>
            <section className='speaking_section'>
                <div className="speaking container">
                    <div className='top_section'>
                        <div>
                            <h1 className='font-Mosk-Ultra-Bold text-[color:var(--P-D-color)] dark:text-[color:var(--P-L-color)]'>Speaking.</h1>
                            <p>The first time I got asked to speak at a conference, my gut reaction was “heck no. That sounds terrifying”.</p>
                            <p>So naturally I said yes. Since then I’ve spoken at conferences and meet-ups all over the world. It still terrifies me.</p>
                            <Link href="#">Check out my videos and upcoming talks.</Link>
                        </div>
                        <div className='img_section'>
                            <img src='./images/bg.jpg' />
                        </div>
                    </div>
                    <div className='bottom_section'>
                        <div className="speaking_content">
                            <h3>workshop</h3>
                            <div>
                                <Link href="#">
                                    <a>
                                        <h2>Getting started with SVG animation</h2>
                                        <p>Animation is one of the best ways to bring brand personality and character to an online experience, but in the busy world of front-end development, it can often be overlooked.</p>
                                        <p>In this workshop we cover everything you need to know to get started with, and master SVG animation.</p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="speaking_content">
                            <h3>talk</h3>
                            <div>
                                <Link href="#">
                                    <a>
                                        <h2>Getting started</h2>
                                        <p>Animation is one of the best ways to bring brand personality and character to an online experience, but in the busy world of front-end development, it can often be overlooked.</p>
                                        <p>In this workshop we cover everything you need to know to get started with, and master SVG animation.</p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="speaking_content">
                            <h3>talk</h3>
                            <div>
                                <Link href="#">
                                    <a>
                                        <h2>Getting started with SVG animation</h2>
                                        <p>Animation is one of the best ways to bring brand personality and character to an online experience, but in the busy world of front-end development, it can often be overlooked.</p>
                                        <p>In this workshop we cover everything you need to know to get started with, and master SVG animation.</p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="speaking_content">
                            <h3>talk</h3>
                            <div>
                                <Link href="#">
                                    <a>
                                        <h2>Getting started with SVG animation</h2>
                                        <p>Animation is one of the best ways to bring brand personality and character to an online experience, but in the busy world of front-end development, it can often be overlooked.</p>
                                        <p>In this workshop we cover everything you need to know to get started with, and master SVG animation.</p>
                                    </a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Speaking