import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Text from '../Text';

const ProjectCont = styled.div`
    min-width:385px;
    width:100%;
    max-width:${props => props.maxWidth ? props.maxWidth : "385px"};
    min-height:385px;
    background-image:${props => props.img ? props.img : "url(/tempImg.jpg)"};
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
    padding:20px;
    border-radius:10px;
`;

const Project = ({ maxWidth, headerText, headerColor, headerSize, headerWeight, headerFamily, headerBg, headerWidth, headerHeight, headerMargin, headerWhiteSpace }) => {
    return <ProjectCont maxWidth={maxWidth}>
        <HeaderCont>
            <Text text={headerText} color={headerColor} size={headerSize} weight={headerWeight} family={headerFamily} bg={headerBg} width={headerWidth} height={headerHeight} margin={headerMargin} whiteSpace={headerWhiteSpace} />
        </HeaderCont>
    </ProjectCont>
}

Project.defaultProps = {
    headerText: "Header",
    headerSize: "20px"
}

export default Project;