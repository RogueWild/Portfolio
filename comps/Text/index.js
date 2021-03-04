import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const TextBox = styled.div`
    color:${props => props.color ? props.color : "white"};
    font-size:${props => props.size ? props.size : ""};
    font-weight:${props => props.weight ? props.weight : ""};
    font-family:${props => props.family ? props.family : ""};
    background:${props => props.bg ? props.bg : "none"};
    width:${props => props.width ? props.width : ""};
    height:${props => props.height ? props.height : ""};
    margin:${props => props.margin ? props.margin : ""};
    border-radius:5px;
    white-space:${props => props.whiteSpace ? props.whiteSpace : "nowrap"} ;

    @media only screen and (max-width: 680px) {
        font-size:16px;
    }

    transition: 0.3s;
`;

const Text = ({ text, color, size, weight, family, bg, width, height, margin, whiteSpace }) => {
    return <TextBox color={color} size={size} weight={weight} family={family} bg={bg} width={width} height={height} margin={margin} whiteSpace={whiteSpace}>
        {text}
    </TextBox>
}

Text.defaultProps = {
    text: "Text"
}

export default Text;