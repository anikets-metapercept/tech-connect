import Slider from "react-slick";
import metaperceptLogo from "../../assets/home/metapercept-logo.png";
import metrLogo from "../../assets/home/metr-logo.png";
import tectConnectLogo from "../../assets/home/tech-connect-logo.png";

const logos = [
  metaperceptLogo,
  metrLogo,
  tectConnectLogo,
  metaperceptLogo,
  metrLogo,
  tectConnectLogo,
];

function HomeSection2() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
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
        <div className="w-full flex justify-center items-center customWidth:flex-col lg:flex-row flex-col gap-5 md:gap-10 py-8 md:py-16">
          <p className="font-semibold text-[28px] lg:text-[32px] text-white">
            Powered by
          </p>
          <div className="w-full max-w-5xl">
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div key={index} className="px-3 py-2 pointer-events-none">
                  <img
                    src={logo}
                    alt={`Client company logo ${index + 1}`}
                    className="w-full h-20 object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection2;
