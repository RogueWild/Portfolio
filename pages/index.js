import React, { useState, useEffect } from 'react';

import HomePage from './home';
import ContactPage from './contact';

export default function Portfolio({ }) {

  const [homeWeight, setHomeWeight] = useState("bold");
  const [aboutWeight, setAboutWeight] = useState("normal");
  const [worksWeight, setWorksWeight] = useState("normal");

  const HandleHome = () => {
    setHomeWeight("bold");
    setAboutWeight("normal");
    setWorksWeight("normal");
  }

  const HandleAbout = () => {
    setHomeWeight("normal");
    setAboutWeight("bold");
    setWorksWeight("normal");
  }

  const HandleWorks = () => {
    setHomeWeight("normal");
    setAboutWeight("normal");
    setWorksWeight("bold");
  }

  useEffect(() => {

  });

  return (
    <div>

      <HomePage
        // Clicking Page buttons
        HomeClicked={HandleHome}
        AboutClicked={HandleAbout}
        WorksClicked={HandleWorks}
        // Page button font weight
        homeFontWeight={homeWeight}
        aboutFontWeight={aboutWeight}
        worksFontWeight={worksWeight}
      />

      <ContactPage

      />

    </div>
  )
}
