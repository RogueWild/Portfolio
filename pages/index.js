import React, { useState, useEffect, useRef } from 'react';

import HomePage from './home';
import AboutPage from './about';
import ContactPage from './contact';

export default function Portfolio({ }) {

  const [homeWeight, setHomeWeight] = useState("bold");
  const [aboutWeight, setAboutWeight] = useState("normal");
  const [worksWeight, setWorksWeight] = useState("normal");
  const [contactColor, setContactColor] = useState(false);
  const [contactBg, setContactBg] = useState(false);

  // Cards

  const [card1, setCard1] = useState(true);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);

  // HANDLE PLAGE SCROLL

  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const scrollPage = (page) => page.current.scrollIntoView();

  const PagePos = (pos) => {
    pos = window.pageYOffset;
    const about = 500;
    const works = 1450;
    const contact = 2400;
    if (pos >= 0 && pos <= about - 1) {
      setHomeWeight("bold");
      setAboutWeight("normal");
      setWorksWeight("normal");
      setContactColor(false);
      setContactBg(false);
    } else if (pos >= about && pos <= works - 1) {
      setHomeWeight("normal");
      setAboutWeight("bold");
      setWorksWeight("normal");
      setContactColor(false);
      setContactBg(false);
    } else if (pos >= works && pos <= contact - 1) {
      setHomeWeight("normal");
      setAboutWeight("normal");
      setWorksWeight("bold");
      setContactColor(false);
      setContactBg(false);
    } else if (pos >= contact) {
      setHomeWeight("normal");
      setAboutWeight("normal");
      setWorksWeight("normal");
      setContactColor(true);
      setContactBg(true);
    }
  }

  // HOME

  const HandleHome = () => {
    setHomeWeight("bold");
    setAboutWeight("normal");
    setWorksWeight("normal");

    setContactColor(false);
    setContactBg(false);

    scrollPage(home);
  }

  const HandleCard1 = () => {
    setCard1(true);
    setCard2(false);
    setCard3(false);
  }
  const HandleCard2 = () => {
    setCard1(false);
    setCard2(true);
    setCard3(false);
  }
  const HandleCard3 = () => {
    setCard1(false);
    setCard2(false);
    setCard3(true);
  }

  // ABOUT

  const HandleAbout = () => {
    setHomeWeight("normal");
    setAboutWeight("bold");
    setWorksWeight("normal");

    setContactColor(false);
    setContactBg(false);

    scrollPage(about);
  }

  // WORKS

  const HandleWorks = () => {
    setHomeWeight("normal");
    setAboutWeight("normal");
    setWorksWeight("bold");

    setContactColor(false);
    setContactBg(false);
  }

  // CONTACT

  const HandleContact = () => {
    setHomeWeight("normal");
    setAboutWeight("normal");
    setWorksWeight("normal");

    setContactColor(true);
    setContactBg(true);

    scrollPage(contact);
  }

  const HandleFormSubmit = (name, email, message) => {

  }

  // OTHER

  useEffect(() => {
    document.addEventListener('scroll', () => {
      PagePos();
    });
  }, []);

  return (
    <div>
      <div ref={home}>
        <HomePage
          onLogoClick={HandleHome}
          // Clicking Page buttons
          HomeClicked={HandleHome}
          AboutClicked={HandleAbout}
          WorksClicked={HandleWorks}
          ContactClicked={HandleContact}
          // Page button font weight
          homeFontWeight={homeWeight}
          aboutFontWeight={aboutWeight}
          worksFontWeight={worksWeight}
          // Contact Button
          cColor={contactColor}
          cBg={contactBg}
          // Cards
          onCard1Click={HandleCard1}
          bg1={card1}
          color1={card1}
          onCard2Click={HandleCard2}
          bg2={card2}
          color2={card2}
          onCard3Click={HandleCard3}
          bg3={card3}
          color3={card3}
        />
      </div >

      <div ref={about}>
        <AboutPage />
      </div>

      <div ref={contact}>
        <ContactPage
          onFormSubmit={HandleFormSubmit}
        />
      </div>


    </div>
  )
}
