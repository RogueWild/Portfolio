import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Social from '../Social';

const ContactCont = styled.div`
    min-width: 1060px;
    min-height: 535px;
    background: #181826;
    mix-blend-mode: screen;
    box-shadow: inset 0px -100px 120px rgba(90, 215, 242, 0.15);
    backdrop-filter: blur(17px);
    border-radius: 20px;
    border: 3px rgba(95, 236, 255, 0.2) solid;

    display:flex;
    align-items:center;
`;

const InfoCont = styled.div`
    width: 50%;
    height: 450px;
    margin-left:50px;
    display:flex;
    flex-direction:column;
`;

const Text = styled.p`
    color:white;
    font-size:${props => props.size ? props.size : ""};
    font-weight:${props => props.weight ? props.weight : "300"};
    margin:${props => props.margin ? props.margin : "0"};
`;

const SocialContacts = styled.div`
    width: 80%;
    height: auto;
    margin-left:30px;
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;

const Icon = styled.div`
    min-width: 20px;
    min-height: 20px;
    background-image:${props => props.url ? "url(" + props.url + ")" : ""};
    background-size:contain;
    background-repeat:no-repeat;
    margin-right:20px;
`;

const SocialCont = styled.div`
    position:absolute;
    bottom:40px;
    left:20px;
`;

const Contact = ({ }) => {
    return <ContactCont>
        <InfoCont>
            <Text size="36px" weight="regular" margin="0px 0px 10px 0px">Have questions?</Text>
            <Text size="20px" weight="300" margin="0px 0px 90px 0px">Do not hesitate to contact me!</Text>
            <SocialContacts>
                <Icon url="/phone.png" /> <Text size="20px">+1 778 333 999</Text>
            </SocialContacts>
            <SocialContacts>
                <Icon url="/mail.png" /> <Text size="20px">0.dreamer.009@gmail.com</Text>
            </SocialContacts>
            <SocialContacts>
                <Icon url="/linkedin.png" /> <Text size="20px" weight="400"><a href="https://www.linkedin.com/in/mike-uderevskyi-18b9b0204/" target="_black">LinkedIn.com</a></Text>
            </SocialContacts>
            <SocialCont>
                <Social
                    iconSize="40px"
                />
            </SocialCont>
        </InfoCont>
    </ContactCont>
}

Contact.defaultProps = {

}

export default Contact;

// linear-gradient(255.81deg, rgba(95, 236, 255, 0.3) 0%, rgba(55, 154, 167, 0) 100%);
