import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Social from '../Social';

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Background = styled.div`
    position: absolute;
    width:100%;
    max-width: 1060px;
    min-height: 535px;
    background: #181827;
    mix-blend-mode: screen;
    box-shadow: inset 0px -100px 120px rgba(90, 215, 242, 0.15);
    backdrop-filter: blur(17px);
    border-radius: 20px;
    border: 3px rgba(95, 236, 255, 0.2) solid;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const ContactCont = styled.div`
    position: absolute;
    width:100%;
    max-width: 1060px;
    min-height: 535px;
    display:flex;
    align-items:center;
`;

const InfoCont = styled.div`
    width: 50%;
    height: 450px;
    margin-left:40px;
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
    position:relative;
    width:80%;
    top:40px;
    left:-30px;
    align-self:flex-start;
    padding-right:70px;
    margin-top:70px;
`;

const ContactField = styled.div`
    position:relative;
    max-width:400px;
    width:100%;
    min-height:460px;
    background: #FFFFFF;
    border-radius: 20px;
    margin-left:45px;
    display:flex;
    flex-direction:column;
    
    @media (max-width: 830px) {
        width:33%;
  }
  transition:1s;
`;

const InputCont = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    width:100%;
    min-height:10%;
    padding:30px 30px 0px 30px;
`;
const Input = styled.input`
    background: #FFFFFF;
    width:100%;
    min-height:45px;
    border: 2px solid #E1E1E9;
    border-radius: 5px;
`;
const MessageCont = styled.textarea`
    position: relative;
    background: #F3F3F3;
    width:100%;
    min-height:100px;
    max-width:400px;
    max-height:120px;
    border: none;
    border-radius: 5px;
    resize:none;
`;
const Label = styled.label`
    color:black;
    margin-bottom:10px;
`;
const Submit = styled.button`
    position:relative;
    align-self:flex-end;
    margin-top:20px;
    width:100px;
    height:40px;
    background:#0C75FF;
    border-radius: 5px;
    border: none;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        border: 2px solid blue;
    }
    transition: 0.1s;
`;

const Contact = ({ onFormSubmit }) => {

    return <Container>
        <Background />
        <Main
            onFormSubmit={onFormSubmit}
        />
    </Container>
}

const Main = ({ onFormSubmit }) => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    return <ContactCont>
        <InfoCont>
            <Text size="36px" weight="regular" margin="0px 0px 10px 0px">Have questions?</Text>
            <Text size="20px" weight="300" margin="0px 0px 90px 0px">Do not hesitate to contact me!</Text>
            <SocialContacts>
                {/* <Icon url="/phone.png" /> <Text size="20px">+1 778 333 999</Text> */}
            </SocialContacts>
            <SocialContacts>
                <Icon url="/mail.png" /> <Text size="20px">muderevskyi@gmail.com</Text>
            </SocialContacts>
            <SocialContacts>
                <Icon url="/linkedin.png" /> <Text size="20px" weight="400"><a href="https://www.linkedin.com/in/mike-uderevskyi-18b9b0204/" target="_black">LinkedIn.com</a></Text>
            </SocialContacts>
            <SocialCont>
                <Social
                    scale="none"
                    iconSize="40px"
                />
            </SocialCont>
        </InfoCont>
        <ContactField>
            <InputCont>
                <Label>Your Name</Label>
                <Input onChange={(e) => { setName(e.target.value) }} />
            </InputCont>
            <InputCont>
                <Label>Your Email</Label>
                <Input onChange={(e) => { setEmail(e.target.value) }} />
            </InputCont>
            <InputCont>
                <Label>Your Message</Label>
                <MessageCont onChange={(e) => { setMessage(e.target.value) }} />
                <Submit onClick={() => { onFormSubmit(name, email, message) }}>Submit</Submit>
            </InputCont>
        </ContactField>
    </ContactCont>
}

Contact.defaultProps = {
    onFormSubmit: () => { }
}

export default Contact;

// linear-gradient(255.81deg, rgba(95, 236, 255, 0.3) 0%, rgba(55, 154, 167, 0) 100%);
