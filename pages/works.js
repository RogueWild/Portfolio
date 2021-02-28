import Router from 'next/dist/next-server/lib/router/router';
import React, { useState, useEffect } from 'react';

import Project from '../comps/Project';

export default function WorksPage({ }) {

    const HandleLink = (url) => {
        window.open(url, "_blank");
    }

    return (
        <div className="worksPageMain">
            <div className="worksPage">
                <div className="projects">
                    <Project
                        maxWidth="835px"
                    />
                    <Project

                    />
                </div>
                <div className="projects">
                    <Project
                        img="/tut.jpg"
                        headerText="Tutor Talk"
                        headerColor="black"
                        headerWeight="bold"
                        invisible3={true}
                        icon1="/social/github-b.png"
                        icon2="/social/app.png" 
                        onIcon1Click={() => HandleLink("https://github.com/RogueWild/tutor-talk")}
                        onIcon2Click={() => HandleLink("https://tutor-talk.vercel.app/")}
                    />
                    <Project
                        maxWidth="835px"
                    />
                </div>
            </div>
        </div>
    )
}