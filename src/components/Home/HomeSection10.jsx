import { Link } from "react-router-dom";
import trainingImg from "../../assets/home/trainingImg.png";
import cornerImg from "../../assets/home/VectorImg.png";
import { FaArrowRight } from "react-icons/fa6";

function HomeSection10() {
  return (
    <div
      style={{
        background: `
      linear-gradient(#0F3460,#FF5050CC)
      `,
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
        <div className="w-full flex justify-center items-start flex-col lg:flex-row gap-5 md:gap-10 py-5 lg:py-6 relative">
          <div className="w-fit hidden lg:block absolute top-0 -right-8">
            <img
              style={{ maxWidth: "94px" }}
              src={cornerImg}
              alt="Corner Image"
              className="mt-5"
            />
          </div>
          <div className="flex items-center flex-col lg:mt-8">
            <h3 className="w-full lg:max-w-[1000px] text-left text-[22px] lg:text-[48px] text-white font-semibold">
              TURBOCHARGE YOUR AI SKILLS WITH HANDS-ON TRAINING
            </h3>
            <div className="flex justify-start items-center flex-col lg:flex-row gap-10 my-4">
              <div className="flex flex-col gap-6 justify-center items-center lg:items-start">
                <p className="text-[16px] sm:text-[18px] lg:text-[22px] text-white text-start">
                  An Immersive Learning Experience at Metapercept Training
                  Academy
                </p>
                <p className="text-[16px] sm:text-[18px] lg:text-[22px] text-white text-start">
                  Cutting-edge curriculum designed in guidance with industry and
                  academia to develop job-ready skills
                </p>
                <div className="lg:my-4 text-[18px] lg:text-[32px] font-bold">
                  <Link className="group flex justify-center items-center text-[18px] lg:text-[28px] font-semibold bg-gradient-to-r gap-4 from-[#FFAC01] to-[#5ECB38] hover:bg-[#5ECB38] hover:bg-none px-10 py-4 rounded-2xl">
                    <span>Learn More</span>
                    <FaArrowRight className="size-5 -rotate-[30deg] hover:rotate-0 group-hover:rotate-0 transition-transform duration-300 mt-1.5" />
                  </Link>
                </div>
              </div>
              <img
                src={trainingImg}
                alt=""
                className="lg:mt-10 lg:max-w-[480px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection10;
