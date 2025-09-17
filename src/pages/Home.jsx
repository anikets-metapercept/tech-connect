import React from "react";
import HomeHero from "../components/Home/HomeHero";
import HomeSection1 from "../components/Home/HomeSection1";
import HomeSection2 from "../components/Home/HomeSection2";
import HomeSection3 from "../components/Home/HomeSection3";
import HomeSection4 from "../components/Home/HomeSection4";
import HomeSection5 from "../components/Home/HomeSection5";

function Home() {
  return (
    <div>
      <HomeHero />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
    </div>
  );
}

export default Home;
