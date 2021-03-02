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

    &:hover {
        transform:${props => props.scale ? props.scale : "scale(1.2)"};
    }
    transition: 0.3s;
`;

const SocialButton = ({ width, height, url, scale }) => {
    return <motion.div
        whileHover={{
            //scale: 1.2,
            //transition: { duration: 0.3 }
        }} >
        <SocialIcon scale={scale}
            width={width}
            height={height}
            url={url}
        />
    </motion.div>
}

const Social = ({ iconSize, scale }) => {
    return <SocialBox >
        <a href="https://www.instagram.com/rogue.wild/" target="_blank">
            <SocialButton scale={scale}
                width={iconSize}
                height={iconSize}
                url="/social/instagram.png"
            ></SocialButton>
        </a>
        <a href="https://dribbble.com/RogueWild" target="_blank">
            <SocialButton scale={scale}
                width={iconSize}
                height={iconSize}
                url="/social/dribble.png"
            ></SocialButton>
        </a>
        <a href="https://github.com/RogueWild" target="_blank">
            <SocialButton scale={scale}
                width={iconSize}
                height={iconSize}
                url="/social/github.png"
            ></SocialButton>
        </a>
        <a href="https://www.artstation.com/mike-bay" target="_blank">
            <SocialButton scale={scale}
                width={iconSize}
                height={iconSize}
                url="/social/artstation.png"
            ></SocialButton>
        </a>
    </SocialBox>
}

Social.defaultProps = {
    iconSize: "23px"
}

export default Social;