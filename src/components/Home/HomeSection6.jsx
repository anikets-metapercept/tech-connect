import {
  IoLocation,
  IoCalendar,
  IoArrowForward,
  IoArrowBack,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import cornerImg from "../../assets/home/corner-img.png";
import section4Img from "../../assets/home/section4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
const events = [
  {
    eventName: "Event 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sint at a similique eius obcaecati minus velit cum qui doloremque.",
    date: "18/09/2015",
    location: "Pune, Maharashtra",
    photo: section4Img,
    moreInfoLink: "/",
  },
  {
    eventName: "Event 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sint at a similique eius obcaecati minus velit cum qui doloremque.",
    date: "18/09/2015",
    location: "Pune, Maharashtra",
    photo: section4Img,
    moreInfoLink: "/",
  },
  {
    eventName: "Event 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sint at a similique eius obcaecati minus velit cum qui doloremque.",
    date: "18/09/2015",
    location: "Pune, Maharashtra",
    photo: section4Img,
    moreInfoLink: "/",
  },
  {
    eventName: "Event 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sint at a similique eius obcaecati minus velit cum qui doloremque.",
    date: "18/09/2015",
    location: "Pune, Maharashtra",
    photo: section4Img,
    moreInfoLink: "/",
  },
  {
    eventName: "Event 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sint at a similique eius obcaecati minus velit cum qui doloremque.",
    date: "18/09/2015",
    location: "Pune, Maharashtra",
    photo: section4Img,
    moreInfoLink: "/",
  },
  {
    eventName: "Event 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sint at a similique eius obcaecati minus velit cum qui doloremque.",
    date: "18/09/2015",
    location: "Pune, Maharashtra",
    photo: section4Img,
    moreInfoLink: "/",
  },
];

function HomeSection6() {
  return (
    <div
      style={{
        background: `
      linear-gradient(#0F3460,#FF5050CC)
      `,
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
        <div className="w-full flex justify-center items-center flex-col gap-5 md:gap-10 py-16 relative">
          <div className="w-fit hidden lg:block absolute top-2 left-0">
            <img
              style={{ maxWidth: "94px" }}
              src={cornerImg}
              alt="Corner Image"
              className="mt-5"
            />
          </div>
          <h3 className="text-white font-bold text-[24px] sm:text-[32px] lg:text-[60px] leading-[150%]">
            Upcoming Events
          </h3>
          <div className="w-full flex justify-center items-center">
            <div className="w-full">
              <Swiper
                modules={[EffectCoverflow, Navigation]}
                effect="coverflow"
                grabCursor={false}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                  1026: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: true,
                }}
                navigation={{
                  nextEl: ".custom-next-two",
                  prevEl: ".custom-prev-two",
                }}
                className="carousel-3D-swiper"
              >
                {events.map((event, index) => (
                  <SwiperSlide key={index} className="px-2 lg:px-4 w-full">
                    <div className="group bg-white rounded-lg flex flex-col overflow-hidden h-auto lg:h-fit transition-all duration-300 ease-in-out shadow-lg mx-auto max-w-[520px]">
                      {/* Image (left) */}
                      <div className="w-full h-[200px] lg:h-auto">
                        <img
                          src={event.photo}
                          alt={`Event ${event.eventName}`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details (right) */}
                      <div className="p-4 lg:p-6 flex flex-col justify-evenly w-full">
                        <div className="space-y-3">
                          <h3 className="font-bold text-[16px] lg:text-[18px]">
                            {event.eventName}
                          </h3>
                          <p className="text-sm leading-[150%]">
                            {event.description}
                          </p>
                        </div>

                        <div className="space-y-1 flex flex-col mt-4">
                          <p className="font-medium flex items-center gap-1 ml-1">
                            <IoCalendar className="size-4" />
                            <span className="text-[14px] lg:text-[16px]">
                              {event.date}
                            </span>
                          </p>
                          <p className="font-medium text-[14px] lg:text-[16px] flex items-center gap-1 text-nowrap">
                            <IoLocation className="size-5" />
                            <span>{event.location}</span>
                          </p>
                          <Link
                            className="group text-[14px] lg:text-[16px] text-textHover flex items-center gap-1 ml-1"
                            to={event.moreInfoLink}
                          >
                            <span>More Info</span>
                            <IoArrowForward className="size-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300 mt-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="custom-prev-two absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#FFAC01] text-white rounded-full lg:my-4">
                <IoArrowBack size={20} />
              </button>
              <button className="custom-next-two absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#FFAC01] text-white rounded-full lg:my-4">
                <IoArrowForward size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection6;
