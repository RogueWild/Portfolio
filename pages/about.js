import React, { useState, useEffect } from 'react';

import Image from 'next/image';

export default function AboutPage({ }) {

    const imgSize = 400;
    return (
        <div className="aboutPageMain">
            <div className="aboutPage">
                <div className="about">
                    <Image src={"/me.png"}
                        width={imgSize}
                        height={imgSize}
                        quality={100}
                    />
                    <div className="aboutText">
                        <h1 style={{ fontWeight: "normal", fontSize: "48px", color: "white" }}>About me</h1>
                        <p style={{ fontWeight: "300", fontSize: "18px", color: "white" }}>I am a highly motivated UI/UX Designer and React Front-End Developer skilled at Adobe Suite as well as React/Next seeking to share my creative skills. With more than 2 years of experience in the UI/UX and digital design team-based environment, eager to help with accomplishing the company’s goals through design and development.
                        <br /><br />I was born in Crimea, Ukraine, and spent most of my life there. My interests include Computer Graphics, Music Production as well as listening to it, Computer Games, Traveling, and sometimes simply chilling.</p>
                    </div>
                </div>
                <div className="skills">
                    <div className="skillsText">
                        <h1 style={{ fontWeight: "normal", fontSize: "36px", color: "white" }}>My Skills</h1>
                        <p style={{ fontWeight: "300", fontSize: "18px", color: "white" }}>
                            <br /><br />My skillset combines both Design, Front-end Development, and artistic experience. Design a User Interface? Sure. Implement it into usable components? No problem. Make a professional photo manipulation? With pleasure!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}