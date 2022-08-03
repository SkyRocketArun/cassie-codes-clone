import React from 'react'
import { useTheme } from "next-themes";
import styled from 'styled-components';
import GsapTest from '../svg/MousePointSvg';
const Footer = () => {
    const { theme, setTheme } = useTheme();
    return (
        <FooterSection className="Footer" theme={theme}>
            <div className='container'>
                <div className='main_section'>
                    <div>
                        <h1 className='font-Mosk-Ultra-Bold text-[color:var(--P-D-color)] dark:text-[color:var(--P-L-color)]'>Hey there!</h1>
                    </div>
                    <div className='mouse_pointer'>
                        <GsapTest />
                    </div>
                </div>
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
    background: ${props => props.theme === 'light' ? '#71ddbd' : '#774069'};
    display: flex;
    justify-content: center;
    flex-direction: column;
.main_section {
  width: 100%;
  height: 500px;
  background: ${props => props.theme === 'light' ? '#fff' : '#2c2c2c'};
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
`