import { Link } from "react-router-dom";
import partnerImg from "../../assets/home/partner.png";
import cornerImg from "../../assets/home/VectorImg.png";
import { FaArrowRight } from "react-icons/fa6";

function HomeSection8() {
  return (
    <div className="bg-[#051639]">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
        <div className="w-full flex justify-center items-center flex-col customWidth:flex-col lg:flex-row gap-5 md:gap-10 py-5 lg:py-10 relative">
          <div className="w-fit hidden lg:block absolute top-0 -right-8">
            <img
              style={{ maxWidth: "94px" }}
              src={cornerImg}
              alt="Corner Image"
              className=""
            />
          </div>
          <img
            src={partnerImg}
            alt="partner image"
            className="rounded-tl-3xl rounded-br-3xl"
          />
          <div className="flex lg:justify-start items-center flex-col gap-10 lg:mt-8">
            <h3 className="text-[24px] lg:text-[48px] text-white font-semibold">
              Partner with Us
            </h3>
            <p className="text-[16px] sm:text-[18px] lg:text-[22px] text-white text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              libero, accusantium earum blanditiis odit in tenetur soluta omnis
              laborum molestiae quisquam aperiam! Atque, sapiente? Ab
              perferendis adipisci ducimus exercitationem tenetur, ea, iure
              sapiente facilis ratione saepe debitis temporibus voluptatem!
              Alias?
            </p>
            <div className="my-6 text-[18px] lg:text-[32px] font-bold">
              <Link className="group flex justify-center items-center text-[18px] lg:text-[28px] font-semibold bg-gradient-to-r gap-4 from-[#FFAC01] to-[#5ECB38] hover:bg-[#5ECB38] hover:bg-none px-10 py-4 rounded-2xl">
                <span>Learn More</span>
                <FaArrowRight className="size-5 -rotate-[30deg] hover:rotate-0 group-hover:rotate-0 transition-transform duration-300 mt-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection8;
