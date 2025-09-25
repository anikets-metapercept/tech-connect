import { Swiper, SwiperSlide } from "swiper/react";
import AmitSImg from "../../assets/home/speakers/AmitS.png";
import PriyankaBImg from "../../assets/home/speakers/PriyankaB.png";
import BenParkerBImg from "../../assets/home/speakers/BenParker.png";
import ChristianBuehnerImg from "../../assets/home/speakers/ChristianBuehner.png";
import { Pagination, Navigation } from "swiper/modules";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useEffect, useState } from "react";

function HomeSection3() {
  const baseUrl = import.meta.env.VITE_STRAPI_BASE_URL;
  const [speakers, setSpeakers] = useState([]);

  const getSpeakers = async () => {
    try {
      const res = await fetch(`${baseUrl}/speakers?populate=speaker_image`);
      const data = await res.json();
      setSpeakers(data.data);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  useEffect(() => {
    getSpeakers();
  }, []);

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
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              navigation={{
                nextEl: ".custom-next-three",
                prevEl: ".custom-prev-three",
              }}
              loop={true}
              breakpoints={{
                320: {
                  // mobile
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  // small tablets
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1026: {
                  // desktop
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {speakers.map((speaker, index) => (
                <SwiperSlide>
                  <div key={index} className="lg:px-10">
                    <div className="group bg-[#CBCBCB] rounded-lg flex justify-center items-center flex-col relative overflow-hidden h-[500px] lg:h-[400px] transition-all duration-300 ease-in-out">
                      <img
                        src={`http://localhost:1337${speaker.speaker_image?.url}`}
                        alt={`Speaker ${speaker.name}`}
                        className="w-full h-full block object-cover transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-0 w-full p-4 text-center">
                        <p className="text-white font-semibold text-lg">
                          {speaker.speaker_name}
                        </p>
                        <p className="text-white text-sm opacity-90">
                          {speaker.speaker_designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center mt-6 space-x-3">
              <button className="custom-prev-three z-10 p-2 bg-[#FFAC01] text-white rounded-full">
                <MdOutlineNavigateBefore size={20} />
              </button>
              <button className="custom-next-three z-10 p-2 bg-[#FFAC01] text-white rounded-full">
                <MdOutlineNavigateNext size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection3;
