import React, { useState, useEffect } from 'react';
import SkillBox from '../comps/SkillBox';

import Image from 'next/image';

import { motion } from 'framer-motion';

const SkillBoxMotion = ({ text, Const }) => {
    return <motion.div
        drag
        dragPropagation
        dragListener
        dragConstraints={Const}
        dragPropagation={true}
    >
        <SkillBox text={text} />
    </motion.div>
}

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
                    <div className="skillsText">
                        <h1 style={{ fontWeight: "normal", fontSize: "36px", color: "white" }}>My Skills</h1>
                        <p style={{ fontWeight: "300", fontSize: "18px", color: "white" }}>My skillset combines both Design, Front-end Development, and artistic experience. Design a User Interface? Sure. Implement it into usable components? No problem. Make a professional photo manipulation? With pleasure!</p>
                    </div>

                </div>
                <div className="skills">
                    <div className="aboutText">
                        <h1 style={{ fontWeight: "normal", fontSize: "48px", color: "white", marginTop: "0" }}>About me</h1>
                        <p style={{ fontWeight: "300", fontSize: "18px", color: "white" }}>I am a highly motivated UI/UX Designer and React Front-End Developer skilled at Adobe Suite as well as React/Next seeking to share my creative skills. With more than 2 years of experience in the UI/UX and digital design team-based environment, eager to help with accomplishing the company’s goals through design and development.
                        <br /><br />I was born in Crimea, Ukraine, and spent most of my life there. My interests include Computer Graphics, Music Production as well as listening to it, Computer Games, Traveling, and sometimes simply chilling.</p>
                        <div className="skillBoxes">
                            <SkillBoxMotion text="UI/UX" Const={{ left: 0, right: 300, top: 0, bottom: 260 }} />
                            <SkillBoxMotion text="Front-end Development" Const={{ left: -100, right: 200, top: 0, bottom: 260 }} />
                            <SkillBoxMotion text="React" Const={{ left: -340, right: 100, top: 0, bottom: 260 }} />
                            <SkillBoxMotion text="Next.js" Const={{ left: -440, right: -15, top: 0, bottom: 260 }} />
                        </div>
                        <div className="skillBoxes">
                            <SkillBoxMotion text="Photoshop" Const={{ left: 0, right: 300, top: -60, bottom: 200 }} />
                            <SkillBoxMotion text="After Effects" Const={{ left: -135, right: 200, top: -60, bottom: 200 }} />
                            <SkillBoxMotion text="Illustrator" Const={{ left: -305, right: 90, top: -60, bottom: 200 }} />
                            <SkillBoxMotion text="Figma" Const={{ left: -460, right: -10, top: -60, bottom: 200 }} />
                        </div>
                        <div className="skillBoxes">
                            <SkillBoxMotion text="Computer Graphics" Const={{ left: 0, right: 300, top: -120, bottom: 140 }} />
                            <SkillBoxMotion text="3D Modeling" Const={{ left: -205, right: 200, top: -120, bottom: 140 }} />
                            <SkillBoxMotion text="Digital Sculpting" Const={{ left: -355, right: -20, top: -120, bottom: 140 }} />
                        </div>
                        <div className="skillBoxes">
                            <SkillBoxMotion text="Photo Manipulation" Const={{ left: 0, right: 320, top: -180, bottom: 80 }} />
                            <SkillBoxMotion text="Photography" Const={{ left: -212, right: 190, top: -180, bottom: 80 }} />
                            <SkillBoxMotion text="Concept Art" Const={{ left: -365, right: 20, top: -180, bottom: 80 }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}