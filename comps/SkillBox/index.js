import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const SkillCont = styled.div`
    min-height:45px;
    padding:0px 20px;
    border-radius:6px;
    background:#324556;
    border: 3px solid #1B1D23;
    font-family: Source Code Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color:white;
    display: flex;
    align-items: center;
    text-align: center;
    margin-right:15px;
`;

const SkillBox = ({ text }) => {
    return <SkillCont>
        {text}
    </SkillCont>
}

SkillBox.defaultProps = {
    text: "Skill"
}

export default SkillBox;