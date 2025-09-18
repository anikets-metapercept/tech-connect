import Slider from "react-slick";

import AmitSImg from "../../assets/home/speakers/AmitS.png";
import PriyankaBImg from "../../assets/home/speakers/PriyankaB.png";
import BenParkerBImg from "../../assets/home/speakers/BenParker.png";
import ChristianBuehnerImg from "../../assets/home/speakers/ChristianBuehner.png";

const speakers = [
  {
    name: "Duke Stump",
    role: "Game-Changing CMO & Founder, Nonfire with Soul",
    photo: BenParkerBImg,
  },
  {
    name: "Priyanka Bhat",
    role: "Co -Founder and COO, Metapercept Technologies",
    photo: PriyankaBImg,
  },
  {
    name: "Christian Buehner",
    role: "Game-Changing CMO & Founder, Nonfire with Soul",
    photo: ChristianBuehnerImg,
  },
  {
    name: "Amit Siddhartha",
    role: "Founder and CEO,Metapercept Technologies",
    photo: AmitSImg,
  },
];

function HomeSection3() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    arrows: true,
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
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      style={{
        background: `
      linear-gradient(#0F3460,#FF5050CC)
      `,
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
        <div className="w-full flex justify-center items-center flex-col gap-5 md:gap-10 py-16">
          <div className="flex justify-center items-center flex-col gap-5">
            <h3 className="text-white font-bold text-[24px] sm:text-[32px] lg:text-[60px] leading-[150%]">
              Meet The Talented Speakers
            </h3>
            <p className="max-w-[800px] text-center text-white text-[18px] sm:text-[28px] lg:text-[32px]">
              The convention is the main event of the year for professionals in
              the world of AI and Technology .
            </p>
          </div>
          <div className="w-full max-w-screen-xl">
            <Slider {...settings}>
              {speakers.map((speaker, index) => (
                <div key={index} className="px-4 lg:px-10">
                  <div className="group bg-[#CBCBCB] rounded-lg flex justify-center items-center flex-col relative overflow-hidden h-[400px] transition-all duration-300 ease-in-out">
                    <img
                      src={speaker.photo}
                      alt={`Speaker ${speaker.name}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 w-full p-4 text-center">
                      <p className="text-white font-semibold text-lg">
                        {speaker.name}
                      </p>
                      <p className="text-white text-sm opacity-90">
                        {speaker.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection3;
