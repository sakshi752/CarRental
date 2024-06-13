import React from 'react'
import Helmet from '../Components/Helmet';
import InfoSection1 from '../Components/Home/InfoSection1';
import TeamMembers from '../Components/About/TeamMembers';
import AboutInfo from '../Components/About/AboutInfo';

const About = () => {
  return (
    <>
      <Helmet title={"About"} />
      <AboutInfo/>
      <InfoSection1/>
      <TeamMembers/>
    </>
  )
}

export default About
