import React, { useState, useEffect } from 'react';

import Nav from '../comps/Nav';

export default function HomePage({ HomeClicked, AboutClicked, WorksClicked, homeFontWeight, aboutFontWeight, worksFontWeight }) {
    return (
        <div className="homePageMain">
            <div className="homePage">
                <div className="nav">
                    <Nav
                        HomeClicked={HomeClicked}
                        AboutClicked={AboutClicked}
                        WorksClicked={WorksClicked}
                        homeFontWeight={homeFontWeight}
                        aboutFontWeight={aboutFontWeight}
                        worksFontWeight={worksFontWeight}
                    />
                </div>
                <div className="mainBox">

                </div>
            </div>
        </div>
    )
}