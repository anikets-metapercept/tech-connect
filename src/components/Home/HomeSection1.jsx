import { Link } from "react-router-dom";
import homesection1img from "../../assets/home/home-section-1.png";
import { FaArrowRight } from "react-icons/fa6";

function HomeSection1() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
      <div className="w-full flex justify-center items-center flex-col gap-5 md:gap-10 py-8 md:py-16">
        <div className="w-full md:w-[90%] bg-gradient-to-r from-[#FFAC01] to-[#5ECB38] flex justify-center items-center flex-col gap-5 sm:gap-8 lg:gap-10 leading-[150%] py-12 px-4 lg:px-20 rounded-lg">
          <h2 className="font-bold text-[18px] sm:text-[32px] lg:text-[44px] tracking-wide text-center leading-[150%]">
            JOIN US AT TechConnect Event 2025
          </h2>
          <p className="font-semibold text-[16px] sm:text-[22px] lg:text-[24px] text-center">
            Use of Artificial Intelligence
          </p>
        </div>
        <div className="w-full flex justify-center items-center flex-col lg:flex-row gap-5 lg:gap-10">
          <div className="w-full lg:w-1/2 flex justify-center items-center lg:items-start flex-col gap-5 text-white mt-5">
            <h3 className="text-2xl lg:text-4xl">ARTIFICIAL INTELLIGENCE</h3>
            <p className="text-lg text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              sint at a similique eius obcaecati minus velit cum qui doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, accusamus!
            </p>
          </div>
          <img src={homesection1img} alt="guest image" className="w-full lg:w-1/2 rounded-lg" />
        </div>
        <div className="my-6 text-[18px] lg:text-[32px] font-bold">
          <Link className="group flex justify-center items-center text-[18px] lg:text-[32px] font-semibold bg-gradient-to-r gap-4 from-[#FFAC01] to-[#5ECB38] hover:bg-[#5ECB38] hover:bg-none px-12 py-5 rounded-2xl">
            <span>Buy Tickets now</span>
            <FaArrowRight className="size-7 -rotate-[30deg] hover:rotate-0 group-hover:rotate-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
