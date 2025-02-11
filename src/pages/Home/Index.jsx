import React,{useEffect}  from 'react';
import Body from '../../component/Body';
import Cta from '../../component/Cta';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  return (
    <div >
      <Body
        intro="Hi There I'm"
        name="Ose"
        role="FRONTEND DEVELOPER"
        description="I'm a professsional Front End Developer with HTML, CSS, Bootstrap, Tailwind, Javascript, React, NEXT.js and UI/UX skills based in Lagos."
        img="banner-image (1).png"
      />
      <Cta/>
    </div>
  )
}

export default Index