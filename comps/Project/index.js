import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Text from '../Text';

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
    background: #181826;
    mix-blend-mode: screen;
    backdrop-filter: blur(12px);
    border-radius:5px;
    opacity:${props => props.display ? "100%" : "0%"};
    transition: 0.3s;
`;

const Project = ({ img, maxWidth, headerText, headerColor, headerSize, headerWeight, headerFamily, headerBg, headerWidth, headerHeight, headerMargin, headerWhiteSpace }) => {

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

        </LinksCont>
    </ProjectCont>
}

Project.defaultProps = {
    headerText: "Header",
    headerSize: "20px"
}

export default Project;