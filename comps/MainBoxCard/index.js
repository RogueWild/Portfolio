import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const CardCont = styled.div`
    min-width:520px;
    height:130px;
    background:${props => props.bg ? "#3F4751" : "#30333C"};
    border-radius:5px;
    margin-bottom:20px;
    cursor: pointer;

    &:hover {
        border: 2px solid #4DD3DC;
    }
    transition: 0.1s;
`;

const CardText = styled.p`
    font-size:${props => props.size ? props.size : ""};
    color:${props => props.color ? "white" : "#BEBEBE"};
    margin:20px 30px;
`;

const MainBoxCard = ({ bg, size, header, text, color, onCardClick }) => {
    return <CardCont bg={bg} size={size} onClick={onCardClick}>
        <CardText color={color} size="24px">{header}</CardText>
        <CardText color={color} size="16px">{text}</CardText>
    </CardCont>
}

MainBoxCard.defaultProps = {
    header: "Header",
    text: "Text",
    onCardClick: () => { }
}

export default MainBoxCard;