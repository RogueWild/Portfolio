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
      OffPopUps();
    } else if (pos >= about && pos <= works - 1) {
      setHomeWeight("normal");
      setAboutWeight("bold");
      setWorksWeight("normal");
      setContactColor(false);
      setContactBg(false);
      OffPopUps();
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
      OffPopUps();
    }
  }

  // HOME

  const HandleHome = () => {
    scrollPage(home);

    OffPopUps();
  }

  // ABOUT

  const HandleAbout = () => {
    scrollPage(about);

    OffPopUps();
  }

  // WORKS

  const HandleWorks = () => {
    scrollPage(works);
  }

  const OffPopUps = () => {
    //HandleGalleryOff();
    HandleVideoOff();
  }

  const [popupBg, setPopupBg] = useState(false);

  // gallery

  const [artGalleryOpen, setArtGallery] = useState(false);
  const [designGalleryOpen, setDesignGallery] = useState(false);

  const HandleArtGalleryOn = () => {
    setArtGallery(true);
    setPopupBg(true);
  }

  const HandleDesignGalleryOn = () => {
    setDesignGallery(true);
    setPopupBg(true);
  }

  const HandleGalleryOff = () => {
    setArtGallery(false);
    setDesignGallery(false);
    setPopupBg(false);
  }

  // video

  const [videoOpen, setVideo] = useState(false);

  const HandleVideoOn = () => {
    setVideo(true);
    setPopupBg(true);
  }

  const HandleVideoOff = () => {
    setVideo(false);
    setPopupBg(false);
  }

  // CONTACT

  const HandleContact = () => {
    scrollPage(contact);

    OffPopUps();
  }

  const HandleFormSubmit = (name, subject, message) => {
    //alert("Something went wrong. Please use email to contact me.");
    if (subject == null && message == null) {
      alert("Please fill in all fields")
    } else if (name == null) {
      window.open(`mailto:0.dreamer.009@gmail.com?subject=${subject}&body=${message}`);
    } else {
      window.open(`mailto:0.dreamer.009@gmail.com?subject=${subject}&body=${message + "- " + name}`);
    }
  }

  // OTHER

  useEffect(() => {
    document.addEventListener('scroll', () => {
      PagePos();
    });
  }, []);

  return (
    <div className="main_page">
      {popupBg ? <div onClick={OffPopUps} className="popup_bg" /> : null}
      <div ref={home} className="home">
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

      <div ref={about} className="about">
        <AboutPage />
      </div>

      <div ref={works} className="works">
        <WorksPage
          // gallery
          artGalleryOpen={artGalleryOpen}
          HandleArtGalleryOn={HandleArtGalleryOn}
          HandleArtGalleryOff={HandleGalleryOff}
          designGalleryOpen={designGalleryOpen}
          HandleDesignGalleryOn={HandleDesignGalleryOn}
          HandleDesignGallerOff={HandleGalleryOff}
          onCloseClick={HandleGalleryOff}
          // video
          videoOpen={videoOpen}
          HandleVideoOn={HandleVideoOn}
          HandleVideoOff={HandleVideoOff}
        />
      </div>

      <div ref={contact} className="contact">
        <ContactPage
          onFormSubmit={HandleFormSubmit}
        />
      </div>


    </div>
  )
}
