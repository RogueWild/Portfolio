import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Text from '../Text';
import { transform } from 'framer-motion';

const ProjectCont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-width:100px;
    width:100%;
    max-width:${props => props.maxWidth ? props.maxWidth : "385px"};
    height:90%;
    background-image:${props => props.img ? "url(" + props.img + ")" : "url(/tempImg.jpg)"};
    background-position:center;
    //background-size:contain;

    border-radius:10px;
    margin:20px;

    cursor: pointer;

    &:hover {
        transform:scale(0.95);
    }
    transition: 0.3s;
`;

const HeaderCont = styled.div`
    position: relative;
    padding:20px;
    border-radius:10px;
    opacity:${props => props.display ? "100%" : "0%"};
    top:${props => props.pos ? "0px" : "-20px"};
    transition: 0.3s;
`;

const LinksCont = styled.div`
    position: relative;
    width:100%;
    height:20%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    //background: #181826;
    backdrop-filter: blur(12px);
    border-radius:5px;
    opacity:${props => props.display ? "100%" : "0%"};
    transition: 0.3s;
`;

const Link = styled.div`
    min-width:40px;
    min-height:40px;
    display:${props => props.invisible ? "none" : "block"};
    background-image:${props => props.icon ? "url(" + props.icon + ")" : "url(/tempImg.jpg)"};
    background-position:center;
    background-size:contain;

    &:hover {
        transform:scale(1.3);
    }
    transition: 0.3s;
`;

const Project = ({ onIcon1Click, onIcon2Click, onIcon3Click, invisible1, invisible2, invisible3, icon1, icon2, icon3, img, maxWidth, headerText, headerColor, headerSize, headerWeight, headerFamily, headerBg, headerWidth, headerHeight, headerMargin, headerWhiteSpace }) => {

    const [disp, setDisp] = useState(false);
    const [pos, setPos] = useState(false);

    const HandleHeaderHover = () => {
        setDisp(true);
        setPos(true);
    }

    const HandleHeaderLeave = () => {
        setDisp(false);
        setPos(false);
    }

    return <ProjectCont onMouseOver={HandleHeaderHover} onMouseLeave={HandleHeaderLeave} img={img} maxWidth={maxWidth}>
        <HeaderCont display={disp} pos={pos}>
            <Text text={headerText} color={headerColor} size={headerSize} weight={headerWeight} family={headerFamily} bg={headerBg} width={headerWidth} height={headerHeight} margin={headerMargin} whiteSpace={headerWhiteSpace} />
        </HeaderCont>
        <LinksCont display={disp}>
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
    </ProjectCont>
}

Project.defaultProps = {
    headerText: "Header",
    headerSize: "20px"
}

export default Project;