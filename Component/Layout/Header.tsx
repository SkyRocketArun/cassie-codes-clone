import React from 'react'
import { useTheme } from "next-themes";
import Lottie from "lottie-react";
import Dark from "../../Assests/Animations/Dark.json";
import Light from "../../Assests/Animations/Light.json";
import styled from 'styled-components';

const Header = () => {
    const { theme, setTheme } = useTheme();
    const MenuItems = [{
        id: 1,
        name: 'writing',
        link: '#'
    },
    {
        id: 2,
        name: 'speaking',
        link: '#'
    },
    {
        id: 3,
        name: 'workshop',
        link: '#'
    },
    {
        id: 4,
        name: 'playing',
        link: '#'
    }]
    return (
        <HeaderSection className='-mb-[90px] relative z-10'>
            <div className='container '>
                <div className='flex justify-end py-5 items-center'>
                    <div className='logo mr-auto font-Jenthill text-[30px] dark:text_dark '>Delta</div>
                    <div className='menu flex gap-5 mobile_menu'>
                        {MenuItems.map((i, ix) => {
                            return (
                                <div key={ix}>
                                    <h1 className='text-red dark:text-[color:var(--P-L-color)] text-[18px] font-Mosk-Bold cursor-pointer '>{i.name}</h1>
                                </div>
                            )
                        })}
                    </div>

                    <div className='btn cursor-pointer theme_button' onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {theme === "light" ? <Lottie animationData={Light} loop={true} /> : <Lottie animationData={Dark} loop={true} />}
                    </div>
                </div>
            </div >
        </HeaderSection>
    )
}
export default Header
const HeaderSection = styled.section`
.theme_button {
  width: 50px;
  margin-left: 30px;
}
.mobile_menu{
    @media (max-width:768px){
        display: none;
    }
}
`