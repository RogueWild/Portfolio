import React, { useState, useEffect } from 'react';

import Nav from '../comps/Nav';
import Text from '../comps/Text';
import MainBoxCard from '../comps/MainBoxCard';

export default function HomePage({ onLogoClick, cColor, cBg, HomeClicked, AboutClicked, WorksClicked, ContactClicked, homeFontWeight, aboutFontWeight, worksFontWeight }) {

    const [showDesignDesc, setShowDesignDesc] = useState(true)
    const [showDesignDev, setShowDesignDev] = useState(false)
    const [showDesignCg, setShowDesignCg] = useState(false)

    // Cards

    const [card1, setCard1] = useState(true);
    const [card2, setCard2] = useState(false);
    const [card3, setCard3] = useState(false);

    const HandleCard1 = () => {
        setCard1(true);
        setCard2(false);
        setCard3(false);
        setShowDesignDesc(true);
        setShowDesignDev(false);
        setShowDesignCg(false);
    }
    const HandleCard2 = () => {
        setCard1(false);
        setCard2(true);
        setCard3(false);
        setShowDesignDesc(false);
        setShowDesignDev(true);
        setShowDesignCg(false);
    }
    const HandleCard3 = () => {
        setCard1(false);
        setCard2(false);
        setCard3(true);
        setShowDesignDesc(false);
        setShowDesignDev(false);
        setShowDesignCg(true);
    }

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
                    <Text text="Mike" size="50px" weight="300" family="'Comfortaa'" bg="#FA574F" width="123px" height="49px" color="#1B1D23" />
                    <Text text="Uderevskyi" size="38px" weight="normal" margin="0px 0px 10px 0px" />
                    <Text text="UI/UX Designer" size="20px" color="#52ACFF" weight="normal" />
                    <Text text="Front-end Developer" size="20px" color="#86E490" weight="normal" />
                </div>
                <div className="welcome_cont">
                    <div className="welcome_text">Welcome</div>
                </div>
                <div className="mainBox">
                    <div className="cards">
                        <MainBoxCard onCardClick={HandleCard1}
                            bg={card1}
                            color={card1}
                            header="Design"
                            text="I can Design"
                            icon="/designIcon.png"
                        >
                        </MainBoxCard>
                        <MainBoxCard onCardClick={HandleCard2}
                            bg={card2}
                            color={card2}
                            header="Front-end Development"
                            text="I can Code"
                            icon="/codeIcon.png"
                        >
                        </MainBoxCard>
                        <MainBoxCard onCardClick={HandleCard3}
                            bg={card3}
                            color={card3}
                            header="Computer Graphics"
                            text="I can do some cool Digital Artworks"
                            icon="/CGIcon.png"
                        >
                        </MainBoxCard>
                    </div>
                    {showDesignDesc ?
                        <div className="desc">
                            <Text text="Experience in Design" size="24px" weight="normal" whiteSpace="none" />
                            <Text text="My experience combines different types of design skills. The range of these abilities includes User Interface Design, Graphic Design, Product Design, Logo Design, and Character Design. With over 3 years of experience in the design field, I learned various practices, tricks, and modern trends in the design industry."
                                size="18px" weight="300" margin="50px 0px 0px 0px" whiteSpace="none"
                            />
                        </div>
                        : null}
                    {showDesignDev ?
                        <div className="desc">
                            <Text text="Experience in Front-end Development" size="24px" weight="normal" whiteSpace="none" />
                            <Text text="When it comes to development, my knowledge of React and Next.js libraries allows me to build not complex but clean and usable components that will subsequently be used for building a website or an application."
                                size="18px" weight="300" margin="50px 0px 0px 0px" whiteSpace="none"
                            />
                        </div>
                        : null}
                    {showDesignCg ?
                        <div className="desc">
                            <Text text="Experience in Computer Graphics" size="24px" weight="normal" whiteSpace="none" />
                            <Text text="My first hobby and still my passion is CG. I have been self-taught but it did not stop me from becoming an experienced CG artist. With a wide knowledge of CG only lacking practice I would be existed to get a job and work in this field."
                                size="18px" weight="300" margin="50px 0px 0px 0px" whiteSpace="none"
                            />
                        </div>
                        : null}
                </div>
            </div>
        </div>
    )
}