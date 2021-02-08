import React, { useState, useEffect } from 'react';

import Home from './home';

export default function Portfolio({ }) {

  const [homeWeight, setHomeWeight] = useState("normal");
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
    HandleHome();
  });

  return (
    <div>
      <Home
        // Clicking Page buttons
        HomeClicked={HandleHome}
        AboutClicked={HandleAbout}
        WorksClicked={HandleWorks}
        // Page button font weight
        homeFontWeight={homeWeight}
        aboutFontWeight={aboutWeight}
        worksFontWeight={worksWeight}
      />
    </div>
  )
}
