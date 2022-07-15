import React from 'react'
import { useTheme } from "next-themes";
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
        <div className='-mb-[90px] relative z-10'>
            <div className='container '>
                <div className='flex justify-end py-5'>
                    <div className='logo mr-auto font-Jenthill text-[30px] dark:text_dark '>Delta</div>
                    <div className='menu flex gap-5'>
                        {MenuItems.map((i, ix) => {
                            return (
                                <div key={ix}>
                                    <h1 className='text-red dark:text-[color:var(--P-L-color)] text-[18px] font-Mosk-Bold cursor-pointer '>{i.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                    <div className='btn cursor-pointer' onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Theme</div>
                </div>
            </div >
        </div>
    )
}

export default Header