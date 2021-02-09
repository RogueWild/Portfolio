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
    position:absolute;
    width:40%;
    bottom:40px;
    left:-35px;
`;

const ContactField = styled.div`
    position:relative;
    min-width:400px;
    min-height:460px;
    background: #FFFFFF;
    border-radius: 20px;
    margin-left:45px;
    display:flex;
    flex-direction:column;
`;

const InputCont = styled.div`
    display:flex;
    flex-direction:column;
    min-width:20%;
    min-height:10%;
    padding:30px 30px 0px 30px;
`;
const Input = styled.input`
    background: #FFFFFF;
    min-width:340px;
    min-height:45px;
    border: 2px solid #E1E1E9;
    border-radius: 5px;
`;
const MessageCont = styled.textarea`
    background: #F3F3F3;
    min-width:340px;
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

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

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
        <ContactField>
            <InputCont>
                <Label>Your Name</Label>
                <Input onChange={(e) => {setName(e.target.value)}} />
            </InputCont>
            <InputCont>
                <Label>Your Email</Label>
                <Input onChange={(e) => {setEmail(e.target.value)}} />
            </InputCont>
            <InputCont>
                <Label>Your Message</Label>
                <MessageCont onChange={(e) => {setMessage(e.target.value)}} />
                <Submit onClick={() => {onFormSubmit(name, email, message)}}>Submit</Submit>
            </InputCont>
        </ContactField>
    </ContactCont>
}

Contact.defaultProps = {
    onFormSubmit: () => {}
}

export default Contact;

// linear-gradient(255.81deg, rgba(95, 236, 255, 0.3) 0%, rgba(55, 154, 167, 0) 100%);
