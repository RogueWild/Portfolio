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

                    />
                    <Project
                        maxWidth="835px"
                    />
                </div>
            </div>
        </div>
    )
}