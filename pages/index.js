import React, { useState, useEffect, useRef } from 'react';

import HomePage from './home';
import AboutPage from './about';
import WorksPage from './works';
import ContactPage from './contact';

export default function Portfolio({ }) {

  const [homeWeight, setHomeWeight] = useState("bold");
  const [aboutWeight, setAboutWeight] = useState("normal");
  const [worksWeight, setWorksWeight] = useState("normal");
  const [contactColor, setContactColor] = useState(false);
  const [contactBg, setContactBg] = useState(false);

  // HANDLE PLAGE SCROLL

  const home = useRef(null);
  const about = useRef(null);
  const works = useRef(null);
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

    scrollPage(works);
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
        />
      </div >

      <div ref={about}>
        <AboutPage />
      </div>

      <div ref={works}>
        <WorksPage

        />
      </div>

      <div ref={contact}>
        <ContactPage
          onFormSubmit={HandleFormSubmit}
        />
      </div>


    </div>
  )
}
