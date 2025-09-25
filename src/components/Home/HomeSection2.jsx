import Slider from "react-slick";
import metaperceptLogo from "../../assets/home/metapercept-logo.png";
import metrLogo from "../../assets/home/metr-logo.png";
import tectConnectLogo from "../../assets/home/tech-connect-logo.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const logos = [
  metaperceptLogo,
  metrLogo,
  tectConnectLogo,
  metaperceptLogo,
  metrLogo,
  tectConnectLogo,
];

function HomeSection2() {
  const baseUrl = import.meta.env.VITE_STRAPI_BASE_URL;
  const [sponsorLogos, setSponsorLogos] = useState([]);

  const getSponsors = async () => {
    try {
      const res = await fetch(`${baseUrl}/sponsors?populate=sponsor_image`);
      const data = await res.json();
      setSponsorLogos(data.data);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  useEffect(() => {
    getSponsors();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300, // Quick snap effect
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
        <div className="flex justify-center items-center flex-col py-8 md:py-16">
          <div className="w-full flex justify-center items-center customWidth:flex-col lg:flex-row flex-col gap-5 md:gap-10">
            <p className="font-semibold text-[28px] lg:text-[32px] text-white">
              Powered by
            </p>
            <div className="w-full max-w-5xl">
              <Slider {...settings}>
                {sponsorLogos.map((logo, index) => (
                  <div key={index} className="px-4 py-2 pointer-events-none">
                    <img
                      src={`http://localhost:1337${logo.sponsor_image?.url}`}
                      alt={`Client company logo ${index + 1}`}
                      className="w-full h-20 object-contain"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <Link className="group flex justify-center items-center text-[18px] lg:text-[24px] font-semibold bg-gradient-to-r gap-4 from-[#FFAC01] to-[#5ECB38] hover:bg-[#5ECB38] hover:bg-none px-5 py-3 rounded-2xl mt-8">
            <span>Become a Sponsor</span>
            <FaArrowRight className="size-5 -rotate-[30deg] hover:rotate-0 group-hover:rotate-0 transition-transform duration-300 lg:mt-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeSection2;
