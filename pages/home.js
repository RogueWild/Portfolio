import React, { useState, useEffect } from 'react';

import Nav from '../comps/Nav';

export default function HomePage({ cColor, cBg, HomeClicked, AboutClicked, WorksClicked, ContactClicked, homeFontWeight, aboutFontWeight, worksFontWeight }) {
    return (
        <div className="homePageMain">
            <div className="homePage">
                <div className="nav">
                    <Nav
                        HomeClicked={HomeClicked}
                        AboutClicked={AboutClicked}
                        WorksClicked={WorksClicked}
                        ContactClicked={ContactClicked}
                        homeFontWeight={homeFontWeight}
                        aboutFontWeight={aboutFontWeight}
                        worksFontWeight={worksFontWeight}
                        cColor={cColor} cBg={cBg}
                    />
                </div>
                <div className="mainBox">

                </div>
            </div>
        </div>
    )
}