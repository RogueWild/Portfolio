import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from "framer-motion";

const ButtonCont = styled.p`
    display:flex;
    width:30%;
    justify-content:space-evenly;

    //border:1px red solid;
`;

const Button = styled.p`
    color:#F3F3F3;
    padding:5px 7px;
    border-radius:5px;
    user-select: none;
    font-weight:${props => props.fontWeight ? props.fontWeight : "normal"};
    cursor:pointer;
    
    &:hover {
        background:#272C33;
    }
    transition: 0.1s;
`;

const ContactButtonCont = styled.p`
    color:${props => props.color ? "white" : "black"};
    background:${props => props.bg ? "none" : "#F3F3F3"};
    //padding:5px 9px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:75px;
    height:50%;
    border-radius:4px;
    user-select: none;
    box-sizing: border-box;
    cursor:pointer;

    &:hover {
        background:none;
        border: 2px solid #FFFFFF;
        color:white;
    }
    transition: 0.1s;
`;

const PageButton = ({ onClick, text, fontWeight }) => {
    return <motion.div
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
    >
        <Button
        onClick={onClick}
        fontWeight={fontWeight}>
            {text}
        </Button>
    </motion.div>
}

const ContactButton = ({ }) => {
    return <motion.div
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
    >
        <ContactButtonCont>
            Contact
        </ContactButtonCont>
    </motion.div>
}

const PageButtons = ({ HomeClicked, AboutClicked, WorksClicked, ContactClicked, homeFontWeight, aboutFontWeight, worksFontWeight }) => {
    return <ButtonCont>
        <PageButton onClick={HomeClicked} fontWeight={homeFontWeight} text="Home"></PageButton>
        <PageButton onClick={AboutClicked} fontWeight={aboutFontWeight} text="About"></PageButton>
        <PageButton onClick={WorksClicked} fontWeight={worksFontWeight} text="Works"></PageButton>
        <ContactButton onClick={ContactClicked}>Contact</ContactButton>
    </ButtonCont>
}

PageButtons.defaultProps = {
    HomeClicked: () => { },
    AboutClicked: () => { },
    WorksClicked: () => { },
    ContactClicked: () => { }
}

export default PageButtons;