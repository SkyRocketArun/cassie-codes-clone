import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function GsapTest() {
    // store a reference to the box div
    const boxRef = useRef();

    // wait until DOM has been rendered
    useEffect(() => {
        gsap.to(boxRef.current, { rotation: "+=360" });
    });
    let xPosition;
    let yPosition;

    // updating the mouse coordinates
    function updateMouseCoords(event) {
        xPosition = event.clientX;
        yPosition = event.clientY;
    }
    window.addEventListener('mousemove', updateMouseCoords);
    return (
        <div style={{ height: '100%', width: '100%', margin: 'auto', textAlign: 'center' }}>
            <div className="box">Hello</div>
            <div className="box" ref={boxRef}>Hello</div>
            <div className="box" ref={boxRef}>Hello</div>
        </div>
    );
}

