import section4Img from "../../assets/home/section4.png";
import cornerImg from "../../assets/home/corner-img.png";

function HomeSection4() {
  return (
    <div className="bg-[#051639]">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
        <div className="w-full flex justify-center items-center lg:items-start flex-col customWidth:flex-col customWidth:items-center lg:flex-row gap-5 md:gap-10 py-4 relative">
          <div className="w-fit hidden lg:block absolute top-2 left-0">
            <img
              style={{ maxWidth: "94px" }}
              src={cornerImg}
              alt="Corner Image"
              className="mt-5"
            />
          </div>
          <div className="flex justify-start items-center flex-col gap-10 lg:mt-8">
            <h3 className="text-[24px] lg:text-[48px] text-white font-semibold">
              About Us
            </h3>
            <p className="text-[16px] sm:text-[18px] lg:text-[22px] text-white text-justify">
              TechConnect brings together experts, innovators, and professionals
              from tech-driven industries to share ideas and lead change. We
              break silos and spark cross-industry collaboration through
              diverse, engaging events.
            </p>
          </div>
          <img
            src={section4Img}
            alt=""
            className="rounded-tl-3xl rounded-br-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeSection4;
