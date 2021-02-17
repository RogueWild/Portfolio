import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const LogoCont = styled.div`
    display:flex;
    margin-left:15px;
`;

const LogoText = styled.p`
    font-weight:${props => props.fontWeight ? props.fontWeight : "normal"};
    margin-left:${props => props.marL ? props.marL : ""};
    color: #F3F3F3;
    font-family:'Comfortaa';
    cursor:pointer;
`;

const Logo = ({ onLogoClick }) => {
    return <LogoCont onClick={onLogoClick}>
        <LogoText fontWeight="bold">Mike</LogoText>
        <LogoText marL="5px" fontWeight="300">Uderevskyi</LogoText>
    </LogoCont>
}

Logo.defaultProps = {
    onLogoClick: () => { }
}

export default Logo;