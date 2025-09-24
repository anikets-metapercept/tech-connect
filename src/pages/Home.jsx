import React from "react";
import HomeHero from "../components/Home/HomeHero";
import HomeSection1 from "../components/Home/HomeSection1";
import HomeSection2 from "../components/Home/HomeSection2";
import HomeSection3 from "../components/Home/HomeSection3";
import HomeSection4 from "../components/Home/HomeSection4";
import HomeSection5 from "../components/Home/HomeSection5";
import HomeSection6 from "../components/Home/HomeSection6";
import HomeSection8 from "../components/Home/HomeSection8";
import HomeSection9 from "../components/Home/HomeSection9";
import HomeSection10 from "../components/Home/HomeSection10";
import HomeSection11 from "../components/Home/HomeSection11";
import HomeSection7 from "../components/Home/HomeSection7";
import HomeSection12 from "../components/Home/HomeSection12";
import ScrollToTop from "../components/ScrollToTop";

function Home() {
  return (
    <div>
      <HomeHero />
      <HomeSection1 />
      <section id="sponsors">
        <HomeSection2 />
      </section>
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <section id="membership">
        <HomeSection12 />
      </section>
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      <HomeSection9 />
      <HomeSection10 />
      <HomeSection11 />
      <ScrollToTop />
    </div>
  );
}

export default Home;
