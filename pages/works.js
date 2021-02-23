import React, { useState, useEffect } from 'react';

import Project from '../comps/Project';

export default function WorksPage({ }) {
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
                    />
                    <Project
                        maxWidth="835px"
                    />
                </div>
            </div>
        </div>
    )
}