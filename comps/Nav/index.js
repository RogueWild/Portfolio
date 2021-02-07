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

    //border:1px red solid;
`;

const FlexCont = styled.div`
    flex:${props => props.flex ? props.flex : ""};
`;

const Nav = ({ HomeClicked, AboutClicked, WorksClicked, ContactClicked, homeFontWeight, aboutFontWeight, worksFontWeight }) => {
    return <Container>
        <FlexCont flex="5">
            <Logo />
        </FlexCont>
        <PageButtons
            HomeClicked={HomeClicked}
            AboutClicked={AboutClicked}
            WorksClicked={WorksClicked}
            ContactClicked={ContactClicked}
            homeFontWeight={homeFontWeight}
            aboutFontWeight={aboutFontWeight}
            worksFontWeight={worksFontWeight}
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