import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Text from '../Text';

const ProjectCont = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-width:100px;
    width:100%;
    max-width:${props => props.maxWidth ? props.maxWidth : "385px"};
    height:90%;
    background-image:${props => props.img ? "url(" + props.img + ")" : "url(/tempImg.jpg)"};
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;

    border-radius:10px;
    margin:20px;
    
    &:hover {
        transform:scale(0.95);
    }
    transition: 0.3s;
`;

const BG = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    border-radius:10px;
    backdrop-filter:${props => props.blur ? "blur(2px)" : ""};
    transition: 0.3s;
`;

const HeaderCont = styled.div`
    position: relative;
    width:100%;
    padding:15px;
    opacity:${props => props.display ? "100%" : "0%"};
    top:${props => props.pos ? "0px" : "-20px"};
    transition: 0.3s;
`;

const SecondHeader = styled.div`
    position: absolute;
    right:0px;
    padding:15px;
    opacity:${props => props.display ? "100%" : "0%"};
    top:${props => props.pos ? "0px" : "-20px"};
    transition: 0.3s;
`;

const LinksCont = styled.div`
    position: relative;
    width:100%;
    height:20%;
    justify-content:space-evenly;
    align-items:center;
    //backdrop-filter: blur(12px);
    border-radius:5px;
    opacity:${props => props.display ? "100%" : "0%"};
    display:${props => props.invisible ? "none" : "flex"};
    transition: 0.3s;
    z-index:1;
`;

const ButtonCont = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-evenly;
`;

const Line = styled.div`
    position:relative;
    background:white;
    opacity:${props => props.display ? "30%" : "0%"};
    border-radius:10px;
    width:5px;
    height:90%;
    align-self:center;
    transition: 0.3s;
`;

const Button = styled.div`
    position: relative;
    align-self:center;
    //top:37%;
    width:100px;
    height:100px;
    background-image:${props => props.buttonImg ? "url(" + props.buttonImg + ")" : "url(/tempImg.jpg)"};
    filter:invert(1);
    background-size:contain;
    //border-radius:100px;
    opacity:${props => props.display ? "70%" : "0%"};
    display:${props => props.invisible ? "flex" : "none"};

    cursor: pointer;

    &:hover {
        transform:scale(1.2);
    }
    transition: 0.3s;
`;

const Link = styled.div`
    min-width:40px;
    min-height:40px;
    display:${props => props.invisible ? "none" : "block"};
    background-image:${props => props.icon ? "url(" + props.icon + ")" : "url(/tempImg.jpg)"};
    background-position:center;
    background-size:contain;

    cursor: pointer;

    &:hover {
        transform:scale(1.3);
    }
    transition: 0.3s;
`;

const Project = ({ secondHeader, line, secondButton, buttonVis, button1Img, button2Img, linksContInvis, onClick1, onClick2, onIcon1Click, onIcon2Click, onIcon3Click, invisible1, invisible2, invisible3, icon1, icon2, icon3, img, maxWidth, headerText, headerColor, headerSize, headerWeight, headerFamily, headerBg, headerWidth, headerHeight, headerMargin, headerWhiteSpace }) => {

    const [disp, setDisp] = useState(false);
    const [pos, setPos] = useState(false);
    const [blur, setBlur] = useState(false);

    const HandleHeaderHover = () => {
        setDisp(true);
        setPos(true);
        setBlur(true);
    }

    const HandleHeaderLeave = () => {
        setDisp(false);
        setPos(false);
        setBlur(false);
    }

    return <ProjectCont onMouseOver={HandleHeaderHover} onMouseLeave={HandleHeaderLeave} img={img} maxWidth={maxWidth}>
        <BG blur={blur} />
        <HeaderCont display={disp} pos={pos}>
            <Text text={headerText} color={headerColor} size={headerSize} weight={headerWeight} family={headerFamily} bg={headerBg} width={headerWidth} height={headerHeight} margin={headerMargin} whiteSpace={headerWhiteSpace} />
        </HeaderCont>
        {secondHeader ? <SecondHeader display={disp} pos={pos}>
            <Text text="Design Gallery" size="20px" />
        </SecondHeader> : null}
        <LinksCont display={disp} invisible={linksContInvis}>
            <Link invisible={invisible1}
                icon={icon1}
                onClick={onIcon1Click}
            />
            <Link invisible={invisible2}
                icon={icon2}
                onClick={onIcon2Click}
            />
            <Link invisible={invisible3}
                icon={icon3}
                onClick={onIcon3Click}
            />
        </LinksCont>
        <ButtonCont>
            <Button
                buttonImg={button1Img}
                onClick={onClick1}
                invisible={buttonVis}
                display={disp}
            />
            {line ? <Line
                display={disp}
            /> : null}
            {secondButton ? <Button
                buttonImg={button2Img}
                onClick={onClick2}
                invisible={buttonVis}
                display={disp}
            /> : null}
        </ButtonCont>
    </ProjectCont>
}

Project.defaultProps = {
    headerText: "Header",
    headerSize: "20px"
}

export default Project;