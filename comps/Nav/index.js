import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Logo from './Logo';
import PageButtons from './PageButtons';
import Social from '../../comps/Social';

const Container = styled.div`
    max-width:1366px;
    height:50px;
    display:flex;
    align-items:center;
    background:#1B1D23;

    //border:1px red solid;

    /* @media only screen and (max-width: 640px) {
        position:absolute;
        width:50%;
        height:100vh;
        right:0px;
        display:flex;
        align-items:center;
        background:#1B1D23;
        flex-direction:column;
    } */
`;

const FlexCont = styled.div`
    flex:${props => props.flex ? props.flex : ""};
`;

const Nav = ({ onLogoClick, cColor, cBg, HomeClicked, AboutClicked, WorksClicked, ContactClicked, homeFontWeight, aboutFontWeight, worksFontWeight }) => {
    return <Container>
        <FlexCont flex="5">
            <Logo onLogoClick={onLogoClick} />
        </FlexCont>
        <PageButtons
            HomeClicked={HomeClicked}
            AboutClicked={AboutClicked}
            WorksClicked={WorksClicked}
            ContactClicked={ContactClicked}
            homeFontWeight={homeFontWeight}
            aboutFontWeight={aboutFontWeight}
            worksFontWeight={worksFontWeight}
            cColor={cColor} cBg={cBg}
        />
        <FlexCont flex="5">
            <Social />
        </FlexCont>
    </Container>
}

Nav.defaultProps = {
    HomeClicked: () => { },
    AboutClicked: () => { },
    WorksClicked: () => { },
    ContactClicked: () => { }
}

export default Nav;