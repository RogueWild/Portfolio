import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from "framer-motion";

const SocialBox = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    min-width:250px;
`;

const SocialIcon = styled.div`
    width:${props => props.width ? props.width : ""};
    height:${props => props.height ? props.height : ""};
    background-image:${props => props.url ? "url(" + props.url + ")" : ""};
    background-size:contain;
    cursor: pointer;
`;

const SocialButton = ({ width, height, url }) => {
    return <motion.div
        whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 }
        }} >
        <SocialIcon
            width={width}
            height={height}
            url={url}
        />
    </motion.div>
}

const Social = ({ iconSize }) => {
    return <SocialBox>
        <a href="https://www.instagram.com/rogue.wild/" target="_blank">
            <SocialButton
                width={iconSize}
                height={iconSize}
                url="/social/instagram.png"
            ></SocialButton>
        </a>
        <a href="https://dribbble.com/RogueWild" target="_blank">
            <SocialButton
                width={iconSize}
                height={iconSize}
                url="/social/dribble.png"
            ></SocialButton>
        </a>
        <a href="https://github.com/RogueWild" target="_blank">
            <SocialButton
                width={iconSize}
                height={iconSize}
                url="/social/github.png"
            ></SocialButton>
        </a>
    </SocialBox>
}

Social.defaultProps = {
    iconSize: "23px"
}

export default Social;