import React, { useState, useEffect } from 'react';

import Nav from '../comps/Nav';
import Text from '../comps/Text';
import MainBoxCard from '../comps/MainBoxCard';

export default function HomePage({ color1, color2, color3, bg1, bg2, bg3, onCard1Click, onCard2Click, onCard3Click, onLogoClick, cColor, cBg, HomeClicked, AboutClicked, WorksClicked, ContactClicked, homeFontWeight, aboutFontWeight, worksFontWeight }) {
    return (
        <div className="homePageMain">
            <div className="homePage">
                <div className="nav">
                    <Nav
                        onLogoClick={onLogoClick}
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
                <div className="text">
                    <Text text="Hello I'm" size="30px" weight="normal" margin="0px 0px 5px 0px" />
                    <Text text="Mike" size="50px" weight="300" family="Comfortaa" bg="#FA574F" width="123px" height="49px" color="#1B1D23" />
                    <Text text="Uderevskyi" size="38px" weight="normal" margin="0px 0px 10px 0px" />
                    <Text text="UI/UX Designer" size="20px" color="#52ACFF" weight="normal" />
                    <Text text="Front-end Developer" size="20px" color="#86E490" weight="normal" />
                </div>
                <div className="mainBox">
                    <div className="cards">
                        <MainBoxCard onCardClick={onCard1Click}
                            bg={bg1}
                            color={color1}
                        >
                        </MainBoxCard>
                        <MainBoxCard onCardClick={onCard2Click}
                            bg={bg2}
                            color={color2}
                        >
                        </MainBoxCard>
                        <MainBoxCard onCardClick={onCard3Click}
                            bg={bg3}
                            color={color3}
                        >
                        </MainBoxCard>
                    </div>
                </div>
            </div>
        </div>
    )
}