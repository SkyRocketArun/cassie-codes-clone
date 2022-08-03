import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { GoPrimitiveDot } from 'react-icons/go'
import { BsArrowRight } from 'react-icons/bs'
import { useTheme } from "next-themes";
import Link from 'next/link';
import styled from 'styled-components';
const Writing = () => {
  const constraintsRef = useRef(null);
  const { theme, setTheme } = useTheme();
  // const [theme, setTheme] = useState();
  // const func = () => {
  //   setTheme(useTheme)
  // }
  // useEffect(() => {
  //   func()
  // }, [theme])
  // console.log('Themeeee', theme.theme)
  console.log('Themeeee', theme)
  return (
    <WritingSection theme={theme}>
      <div className="container">
        <motion.div className="drag_container" ref={constraintsRef}>
          <h1 className='font-Mosk-Ultra-Bold text-[color:var(--P-D-color)] dark:text-[color:var(--P-L-color)]'>Writing.</h1>
          <motion.div className="items item1" drag dragConstraints={constraintsRef} >
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
          <motion.div className="items item2" drag dragConstraints={constraintsRef}  >
            <div className="dot_section"><GoPrimitiveDot /><GoPrimitiveDot /><GoPrimitiveDot /></div>
            <div className="box_content">
              <h2 >The many ways to change an  SVG fill on hover</h2>
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
          <motion.div className="items item3" drag dragConstraints={constraintsRef} >
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
    </WritingSection>

  )
}
export default Writing
const WritingSection = styled.section`
  background: ${props => props.theme === 'light' ? '#b289da' : '#4e3668'};
  z-index: 9;
  position: relative;
  overflow: hidden;
  /* height: 100vh; */
  display: flex;
  align-items: center;

.drag_container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2rem 0.33fr 0.33fr 0.33fr 0.33fr;
  grid-template-rows: auto 1fr 2rem 0.5fr 1fr;
  padding: 52px 0px;

  @media (max-width:450px){
    display: block;
    height: auto;
  }
}
.items {
  width: auto;
  height: fit-content;
  border: ${props => props.theme === 'light' ? '2px solid #404040' : '2px solid #fff'};
  border-radius: 20px;
  cursor: grab;
  background: ${props => props.theme === 'light' ? '#f7f7f7' : '#4e3668'};
  @media (max-width: 450px){
    margin:20px 0px;
  }
}
.items:active {
  cursor: grabbing;
}
.item1 {
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row: 1 / span 2;
  color: ${props => props.theme === 'light' ? '#404040' : '#fff'};
}
.item2 {
  grid-column: 1 / span1;
  grid-column-end: 2;
  grid-row: 2 / span3;
  grid-row-end: 5;
  color: ${props => props.theme === 'light' ? '#404040' : '#fff'};
}
.item3 {
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 6;
  color: ${props => props.theme === 'light' ? '#404040' : '#fff'};
}
.write_button {
  grid-column-start: 1;
  grid-row-start: 5;
  border: ${props => props.theme === 'light' ? '2px solid #404040' : '2px solid #fff'};
  background: ${props => props.theme === 'light' ? '#f7f7f7' : '#4e3668'};
  width: fit-content;
  margin: auto;
  padding: 12px 30px;
  box-shadow: 6px 6px 0px 0px #fff;
  box-shadow:   ${props => props.theme === 'light' ? '6px 6px 0px 0px #404040' : '6px 6px 0px 0px #fff'};

  font-size: 20px;
}
.items .btns {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}
.dot_section {
  display: flex;
  border-bottom: ${props => props.theme === 'light' ? '2px solid #404040' : '2px solid #fff'};
  padding-left: 10px;
}
.dot_section svg {
  font-size: 34px;
  width: 24px;
}
.items h2 {
  font-size: 26px;
  line-height: initial;
  font-family: "Mosk-Extra-Bold";
  position: relative;
}
.items p {
  font-size: 20px;
}
.box_content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 88%;
}
.items .btns a {
  display: flex;
  align-items: center;
  gap: 4px;
}
`