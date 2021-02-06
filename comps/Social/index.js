import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from "framer-motion";

import Image from 'next/image';

const SocialBox = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:20%;
    height:auto;

    //border:1px red solid;
`;

const SocialIcon = styled.div`
    cursor: pointer;

    /* &:hover {
        transform: scale(1.1);
    }
    transition: 0.3s; */
`;

const SocialButton = ({ width, height, src }) => {
    return <motion.div
        whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 }
        }}
    >
        <SocialIcon>
            <Image src={src}
                width={width}
                height={height}
            />
        </SocialIcon>
    </motion.div>
}

const Social = ({ imgWidth, imgHeight }) => {
    return <SocialBox>
        <a href="https://www.instagram.com/rogue.wild/" target="_blank">
            <SocialButton
                src="/social/instagram.png"
                width={imgWidth}
                height={imgHeight}
            />
        </a>
        <SocialButton
            src="/social/dribble.png"
            width={imgWidth}
            height={imgHeight}
        />
        <SocialButton
            src="/social/github.png"
            width={imgWidth}
            height={imgHeight}
        />
    </SocialBox>
}

Social.defaultProps = {
    imgWidth: 23,
    imgHeight: 23
}

export default Social;