
import React, { Component, useEffect, useState } from 'react'
import Lottie from 'react-lottie'
// import Dark_mode from '../Assests/Animations/Dark_mode.json'
import Celebration from '../Assests/Animations/Celebration.json'
import styled from 'styled-components'

function TestLottie() {
    const [isPaused, setIsPaused] = useState(false)
    const [isStopped, setIsStopped] = useState(false)
    // useEffect(() => {
    //     setIsStopped(true)
    // }, [])
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Celebration,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const play = () => {
        console.log('Play');
        setIsStopped(false);
        // setIsPaused(false);
        // setTimeout(stops, 5000);
    }
    const pause = () => {
        console.log('Pause');
        setIsPaused(true)
    }
    const stops = () => {
        console.log('Stop');
        setIsStopped(true)
    }
    return (
        <TestSection>
            <div className="controlled">
                <h1>Controlled Lottie</h1>
                <p>Uses state manipulation to start, stop and pause animations</p>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={600}
                    isStopped={isStopped}
                    isPaused={isPaused}
                />
                <div className='buttons'>

                    <button onClick={stops}>Stop</button>

                    <button onClick={play}>Play</button>

                    <button onClick={pause}>Pause</button>

                </div>
            </div >
        </TestSection>

    )

}

export default TestLottie
const TestSection = styled.section`
    /* background-color:green; */
h1 , p{
 text-align:center;
}
.buttons{
    display:flex;
    gap:20px;
    justify-content: center;
}
.buttons button {
    border: 2px solid #000;
    border-radius: 10px;
    padding: 4px 20px;
    background: grey;
    color: #fff;
}
`