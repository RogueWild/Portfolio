import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Logo from './Logo';
import Social from '../../comps/Social';

const Container = styled.div`
    max-width:1366px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;

    //border:1px red solid;
`;

const FlexCont = styled.div`
    flex:${props => props.flex ? props.flex : ""};
`;

const Nav = ({ }) => {
    return <Container>
        <FlexCont flex="5">
            <Logo />
        </FlexCont>
        <Social />
    </Container>
}

Nav.defaultProps = {

}

export default Nav;